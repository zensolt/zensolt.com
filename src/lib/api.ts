/**
 * Resolves a path for the Nest (or other) API. Same-origin: leave unset.
 * Cross-origin dev: set NEXT_PUBLIC_API_BASE_URL=http://localhost:3000 in `.env.local`.
 */
export function apiUrl(path: string): string {
  const base = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "");
  if (!path.startsWith("/")) {
    return base ? `${base}/${path}` : `/${path}`;
  }
  return base ? `${base}${path}` : path;
}
