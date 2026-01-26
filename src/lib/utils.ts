/**
 * Formats a Date object into a human-readable string based on the specified locale.
 *
 * @param date - The Date object to format.
 * @param locale - The locale string (default is 'en-US').
 * @returns The formatted date string.
 */
export function formatDate(date: Date, locale: string = "en-US"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}
