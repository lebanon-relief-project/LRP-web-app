import { getCardIdsFromSessionStorage } from "./util";

describe("the getCardIdsFromSessionStorage", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("should return all card id's that are in session storage", () => {
    sessionStorage.setItem("key1", "value1");
    sessionStorage.setItem("key2", "value2");
    const result = getCardIdsFromSessionStorage();

    expect(result).toEqual(["key1", "key2"]);
  });

  it("should return an empty array if there are no flashcards selected", () => {
    const result = getCardIdsFromSessionStorage();

    expect(result).toEqual([]);
  });

  it("should not return null or undefined keys if they are in session storage", () => {
    sessionStorage.setItem("key1", "value1");
    sessionStorage.setItem(null, null);
    sessionStorage.setItem(undefined, undefined);
    sessionStorage.setItem("key2", "value2");

    const result = getCardIdsFromSessionStorage();

    expect(result).toEqual(["key1", "key2"]);
  });
});
