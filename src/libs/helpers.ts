import { differenceInSeconds, format } from "date-fns";
import {
  camelCase,
  isArray,
  isDate,
  isObject,
  snakeCase,
  transform,
} from "lodash";

export function toCamelCase(obj: any) {
  return transform(obj, (acc: any, value: any, key: any, target: any) => {
    const snakeKey = isArray(target) ? key : camelCase(key);
    acc[snakeKey] = isObject(value)
      ? isDate(value)
        ? value
        : toCamelCase(value)
      : value;
  });
}

export function toSnakeCase(obj: any) {
  return transform(obj, (acc: any, value: any, key: any, target: any) => {
    const camelKey = isArray(target) ? key : snakeCase(key);
    acc[camelKey] = isObject(value) ? toSnakeCase(value) : value;
  });
}

export function formatDate(dateTime: any) {
  const result = format(dateTime, "MMM do, yyyy");
  return result;
}

export function getTimeAgo(
  dateTime: Date,
  limitTime: "sec" | "min" | "hour" | "day" | "week" | "month" | "year",
) {
  const currentTime = Date.now();
  const timeDifference = differenceInSeconds(currentTime, dateTime);
  const sec = timeDifference;
  const min = Math.round(sec / 60);
  const hours = Math.round(sec / 3600);
  const days = Math.round(sec / 86400);
  const weeks = Math.round(sec / 604800);
  const months = Math.round(sec / 2629440);
  const years = Math.round(sec / 31553280);

  if (limitTime === "sec") return formatDate(dateTime);
  if (sec <= 60) {
    return "just now";
  }

  if (limitTime === "min") return formatDate(dateTime);
  if (min <= 60) {
    return min === 1 ? "1 min ago" : `${min} mins ago`;
  }

  if (limitTime === "hour") return formatDate(dateTime);
  if (hours <= 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }

  if (limitTime === "day") return formatDate(dateTime);
  if (days <= 7) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }

  if (limitTime === "week") return formatDate(dateTime);
  if (weeks < 4) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }

  if (limitTime === "month") return formatDate(dateTime);
  if (months <= 12) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }

  if (limitTime === "year") return formatDate(dateTime);
  return years === 1 ? "1 year ago" : `${years} years ago`;
}
