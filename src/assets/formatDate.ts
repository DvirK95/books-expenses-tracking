export function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

export function pullDate(): string {
  const date = new Date();
  return date.toISOString();
}

export function isoStrToDateStr(date: string): string {
  if (date === '') return ''; // no date found
  const dateObject = new Date(date);
  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObject.getFullYear().toString();
  return `${day}/${month}/${year}`;
}
