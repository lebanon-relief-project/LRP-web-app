import { FilterQueryParam } from "../types/Filter";
import { sanitizeFilter } from "./filter-util";

describe("Filter util", () => {
  it("should correctly sanitize valid filter", () => {
    let unSafeFilter: FilterQueryParam = { languages: ["english"] };
    let expected = { languages: ["english"] };

    let cleanFilter = sanitizeFilter(unSafeFilter);

    expect(cleanFilter).toEqual(expected);
  });

  it("should correctly remove invalid filter options", () => {
    let unSafeFilter: any = {
      languages: ["english"],
      test: ["unsafe"],
    };
    let expected = { languages: ["english"] };

    let cleanFilter = sanitizeFilter(unSafeFilter);

    expect(cleanFilter).toEqual(expected);
  });

  it("should correctly convert valid filter options to array if they are string", () => {
    let unSafeFilter: any = {
      languages: "english",
    };
    let expected = { languages: ["english"] };

    let cleanFilter = sanitizeFilter(unSafeFilter);

    expect(cleanFilter).toEqual(expected);
  });
});
