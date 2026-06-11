import { NextResponse } from "next/server";
import { voteComment } from "@/lib/db";
import { commentVoteSchema, isForgedUserKey } from "@/lib/schema";
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

  const parsed = commentVoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid vote." },
      { status: 422 }
    );
  }

  try {
    const { commentId, value, voterKey } = parsed.data;
    const sv = await sessionVoterKey();
    if (isForgedUserKey(voterKey, Boolean(sv))) {
      return NextResponse.json(
        { success: false, error: "Invalid voter key." },
        { status: 400 }
      );
    }
    const result = await voteComment(commentId, sv?.key ?? voterKey, value);
    if (!result) {
      return NextResponse.json(
        { success: false, error: "That comment no longer exists." },
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
