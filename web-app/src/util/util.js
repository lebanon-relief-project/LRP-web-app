export const getCardIdsFromSessionStorage = () => {
  let cardIds = [];
  let key;
  const numberOfCards = sessionStorage.length;

  for (let i = 0; i < numberOfCards; i++) {
    key = sessionStorage.key(i);

    // Should regex this to match flashcard id patterns
    if (key !== "null" && key !== "undefined") {
      cardIds.push(key);
    }
  }

  return cardIds;
};
