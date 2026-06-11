import { NextResponse } from "next/server";
import { reportComment } from "@/lib/db";
import { reportSchema } from "@/lib/schema";

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

  try {
    await reportComment(parsed.data.commentId);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not submit report." },
      { status: 500 }
    );
  }
}
