export function slugify(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[“”"']/g, "")
    .replace(/[^a-z0-9\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
