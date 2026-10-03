/** Prefix public assets for a project Pages URL, or leave them at a domain root. */
export function assetPath(path: `/${string}`): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
