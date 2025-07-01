export function slugify(name: string) {
  const cleaned = name
    .trim()
    .toLowerCase()
    .replace(/[“”"']/g, "")
    .replace(/[^a-z0-9\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  return cleaned || name;
}
