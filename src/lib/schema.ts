import { z } from "zod";
import { portfolios } from "@/content/cabinet";

const slugs = portfolios.map((p) => p.slug) as [string, ...string[]];

export const portfolioSlug = z.enum(slugs);

const voterKey = z.string().trim().min(8).max(100);
const voteValue = z.union([z.literal(1), z.literal(-1)]);

const nameRegex = /^[\p{L}\p{M}.''\-\s]+$/u;

export const nominateSchema = z.object({
  portfolioSlug,
  name: z
    .string()
    .trim()
    .min(2, "Please enter a full name")
    .max(80, "That name is too long")
    .regex(nameRegex, "Use letters and spaces only"),
  note: z.string().trim().max(140, "Keep it under 140 characters").optional(),
});

export const voteSchema = z.object({
  nomineeId: z.coerce.number().int().positive(),
  value: voteValue,
  voterKey,
});

export const commentCreateSchema = z.object({
  portfolioSlug,
  nomineeId: z.coerce.number().int().positive().nullable().default(null),
  parentId: z.coerce.number().int().positive().nullable().default(null),
  body: z
    .string()
    .trim()
    .min(2, "Say a little more")
    .max(2000, "Keep it under 2000 characters"),
  authorName: z
    .string()
    .trim()
    .max(40)
    .regex(nameRegex, "Use letters and spaces only")
    .optional(),
  // NOTE: authorKind is intentionally NOT accepted from the client — it is
  // derived server-side from the authenticated session to prevent spoofing.
  voterKey,
});

/** A client may only ever supply an anonymous voter key. The "user:" namespace
 *  is reserved for server-derived signed-in identities. */
export function isForgedUserKey(voterKey: string, hasSession: boolean): boolean {
  return !hasSession && voterKey.startsWith("user:");
}

export const commentVoteSchema = z.object({
  commentId: z.coerce.number().int().positive(),
  value: voteValue,
  voterKey,
});

export const reportSchema = z.object({
  commentId: z.coerce.number().int().positive(),
});

export type NominateInput = z.infer<typeof nominateSchema>;
export type VoteInput = z.infer<typeof voteSchema>;
export type CommentCreateInput = z.infer<typeof commentCreateSchema>;
