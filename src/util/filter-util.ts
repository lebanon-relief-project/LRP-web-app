import { FilterType } from "src/types/Filter";

export function sanitizeFilter(unSafeFilter: any): FilterType {
  const schema: Record<keyof FilterType, string> = {
    languages: "string",
  };

  let cleanFilter: FilterType = {};

  Object.keys(schema).forEach((key) => {
    if (unSafeFilter[key]) {
      cleanFilter[key] = unSafeFilter[key];

      if (typeof schema[key] === "string") {
        if (typeof unSafeFilter[key] === "string")
          cleanFilter[key] = [unSafeFilter[key]];
        cleanFilter[key] = cleanFilter[key].map((entry) => {
          return entry.toLowerCase();
        });
      }

      if (typeof schema[key] === "object") {
        cleanFilter[key] = JSON.parse(cleanFilter[key]);
      }
    }
  });

  return cleanFilter;
}
