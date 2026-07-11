export function sitePath(path: string): string {
  if (/^[a-z][a-z\d+\-.]*:/i.test(path) || path.startsWith('#')) return path;

  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}
