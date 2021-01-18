import {
  getCardIdsFromSessionStorage,
  getCardTitleFromSessionStorage,
} from "./util";

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

describe("the getCardTitleFromSessionStorage function", () => {
  it("should return the card's title if the card is in session storage", () => {
    sessionStorage.setItem("key1", "value1");
    const result = getCardTitleFromSessionStorage("key1");

    expect(result).toEqual("value1");
  });

  it("should return an empty string if the flashcard is not in session storage", () => {
    const result = getCardTitleFromSessionStorage();

    expect(result).toEqual("");
  });
});