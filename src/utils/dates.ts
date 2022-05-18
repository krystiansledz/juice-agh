import { format, toDate, utcToZonedTime } from "date-fns-tz";

const UTC_TZ = "UTC";

export const ISO_MIDNIGHT_TIME = "T00:00:00Z";

// format date, force UTC to disregard time/zone
export const dateFormatter = (template: string) => (value: Date | string) => {
  const date = getDate(value);

  return date
    ? format(utcToZonedTime(date, UTC_TZ), template, {
        timeZone: UTC_TZ, // force UTC to match server if ignoring time
      })
    : "";
};

// format date and time to user's local time zone
export const dateTimeFormatter =
  (template: string) => (value: Date | string) => {
    const date = getDate(value);

    return date ? format(date, template) : "";
  };

// date formatters

export const toDdMmYyyy = dateFormatter("dd.MM.yyyy");

export const toDdMmYy = dateFormatter("dd.MM.yy");

export const toYyyyMmDd = dateFormatter("yyyy-MM-dd");

export const toMmmDYyyy = dateTimeFormatter("MMM d, yyyy");

// date/time formatters

export const toDdMmYyyyAndTime = dateTimeFormatter("dd.MM.yyyy hh:mm");

export const toDdMmYyAndTime = dateTimeFormatter("dd.MM.yy hh:mm");

export const toMmmDdYyyyAndTimeAmPm = dateTimeFormatter("MMM d, yyyy h:mm a");

export const toYyyyMmDdAndTime = dateTimeFormatter("yyyy-MM-dd hh:mm");

// for use with local Date

const isoDateStringFormatter = dateTimeFormatter(
  `yyyy-MM-dd'${ISO_MIDNIGHT_TIME}'`
);

export const toISODateString = (date: Date) => isoDateStringFormatter(date);

//

const getDate = (value: Date | string): Date | null => {
  if (value instanceof Date) {
    return value.getTime() ? value : null; // if is date and getTime(), return value; else is Invalid Date
  } else {
    if (!Date.parse(value)) return null; // check if parseable
  }

  return new Date(value);
};

//

export const removeTimeFromISODateString = (date: string) =>
  date.substring(0, date.indexOf("T"));

//

// strip T00:00:00Z from server, force local TZ for datepicker
export const isoStringToLocalTzMidnightDate = (value: string): Date =>
  toDate(removeTimeFromISODateString(value), {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // no IE 11 support, but 94.71% according to caniuse.com
  });
