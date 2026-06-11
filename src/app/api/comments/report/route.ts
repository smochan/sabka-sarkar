import { NextResponse } from "next/server";
import { reportComment } from "@/lib/db";
import { reportSchema, isForgedUserKey } from "@/lib/schema";
import { rateLimit } from "@/lib/ratelimit";
import { sessionVoterKey } from "@/auth";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = reportSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid report." },
      { status: 422 }
    );
  }

  const session = await sessionVoterKey();
  if (isForgedUserKey(parsed.data.voterKey, Boolean(session))) {
    return NextResponse.json(
      { success: false, error: "Invalid voter key." },
      { status: 403 }
    );
  }
  const finalKey = session?.key ?? parsed.data.voterKey;

  if (!rateLimit(`report:${finalKey}`, 3, 60_000)) {
    return NextResponse.json(
      { success: false, error: "Too many reports. Try again later." },
      { status: 429 }
    );
  }

  try {
    await reportComment(parsed.data.commentId, finalKey);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not submit report." },
      { status: 500 }
    );
  }
}
