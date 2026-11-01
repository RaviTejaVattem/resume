export function yearsSince(start: string, now: Date = new Date()): number {
  const parts = start.split('-').map(Number);
  const year = parts[0] ?? 0;
  const month = (parts[1] ?? 1) - 1;
  const day = parts[2] ?? 1;
  let years = now.getFullYear() - year;
  const beforeAnniversary = now.getMonth() < month || (now.getMonth() === month && now.getDate() < day);
  if (beforeAnniversary) years -= 1;
  return Math.max(0, years);
}
