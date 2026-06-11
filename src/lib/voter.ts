// Identity used to dedupe votes and attribute posts.
// - Anonymous: a stable per-browser device key.
// - Signed-in (Google): overwritten with a "user:<id>" key + display name,
//   set by the auth SyncIdentity component. Not security on the anon path
//   (spoofable); signed-in keys are re-enforced server-side.

const VOTER = "apni-sarkar:voter";
const DEVICE = "apni-sarkar:device";
const NAME = "apni-sarkar:name";

function uuid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `anon-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function deviceKey(): string {
  let d = window.localStorage.getItem(DEVICE);
  if (!d) {
    d = uuid();
    window.localStorage.setItem(DEVICE, d);
  }
  return d;
}

export function getVoterKey(): string {
  if (typeof window === "undefined") return "";
  try {
    let v = window.localStorage.getItem(VOTER);
    if (!v) {
      v = deviceKey();
      window.localStorage.setItem(VOTER, v);
    }
    return v;
  } catch {
    return "anon-no-storage";
  }
}

export function getStoredName(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(NAME);
  } catch {
    return null;
  }
}

/** Called by the auth identity sync: pin votes/posts to the account, or reset. */
export function setIdentity(userKey: string | null, name: string | null): void {
  if (typeof window === "undefined") return;
  try {
    if (userKey) {
      window.localStorage.setItem(VOTER, userKey);
      if (name) window.localStorage.setItem(NAME, name);
    } else {
      window.localStorage.setItem(VOTER, deviceKey());
      window.localStorage.removeItem(NAME);
    }
  } catch {
    /* ignore */
  }
}
