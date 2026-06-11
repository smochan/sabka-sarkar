import { NextResponse } from "next/server";
import {
  listForModeration,
  setCommentStatus,
  deleteComment,
} from "@/lib/db";

export const dynamic = "force-dynamic";

function authorized(request: Request): boolean {
  const key = process.env.ADMIN_KEY;
  if (!key) return false;
  return request.headers.get("x-admin-key") === key;
}

export async function GET(request: Request) {
  if (!process.env.ADMIN_KEY) {
    return NextResponse.json(
      { success: false, error: "Admin is not configured." },
      { status: 503 }
    );
  }
  if (!authorized(request)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized." },
      { status: 401 }
    );
  }
  try {
    const data = await listForModeration();
    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not load comments." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized." },
      { status: 401 }
    );
  }
  let body: { id?: number; action?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid body." },
      { status: 400 }
    );
  }
  const id = Number(body.id);
  const action = body.action;
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json(
      { success: false, error: "Invalid id." },
      { status: 400 }
    );
  }

  try {
    if (action === "hide") await setCommentStatus(id, "hidden");
    else if (action === "restore") await setCommentStatus(id, "visible");
    else if (action === "delete") await deleteComment(id);
    else
      return NextResponse.json(
        { success: false, error: "Unknown action." },
        { status: 400 }
      );
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Action failed." },
      { status: 500 }
    );
  }
}
