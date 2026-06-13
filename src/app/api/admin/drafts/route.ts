import { NextResponse } from "next/server";
import { listPendingDrafts, approveDraft, rejectDraft } from "@/lib/db";

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
    return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
  }
  try {
    const data = await listPendingDrafts();
    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not load drafts." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 });
  }
  let body: {
    id?: number;
    action?: string;
    bio?: string;
    achievements?: string[];
    why?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid body." }, { status: 400 });
  }
  const id = Number(body.id);
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ success: false, error: "Invalid id." }, { status: 400 });
  }

  try {
    if (body.action === "approve") {
      const edited =
        typeof body.bio === "string"
          ? {
              bio: body.bio,
              achievements: Array.isArray(body.achievements) ? body.achievements : [],
              why: body.why ?? "",
            }
          : undefined;
      const ok = await approveDraft(id, edited);
      return NextResponse.json({ success: ok });
    }
    if (body.action === "reject") {
      const ok = await rejectDraft(id);
      return NextResponse.json({ success: ok });
    }
    return NextResponse.json({ success: false, error: "Unknown action." }, { status: 400 });
  } catch {
    return NextResponse.json({ success: false, error: "Action failed." }, { status: 500 });
  }
}
