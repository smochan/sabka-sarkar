import { NextResponse } from "next/server";
import { voteNominee } from "@/lib/db";
import { voteSchema, isForgedUserKey } from "@/lib/schema";
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

  const parsed = voteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid vote." },
      { status: 422 }
    );
  }

  try {
    const { nomineeId, value, voterKey } = parsed.data;
    const sv = await sessionVoterKey();
    if (isForgedUserKey(voterKey, Boolean(sv))) {
      return NextResponse.json(
        { success: false, error: "Invalid voter key." },
        { status: 400 }
      );
    }
    const result = await voteNominee(nomineeId, sv?.key ?? voterKey, value);
    if (!result) {
      return NextResponse.json(
        { success: false, error: "That nominee no longer exists." },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: result });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not record that vote." },
      { status: 500 }
    );
  }
}
