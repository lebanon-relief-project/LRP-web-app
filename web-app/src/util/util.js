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

export const getCardTitleFromSessionStorage = (id) => {
  let card = "";
  const numberOfCards = sessionStorage.length;

  for (let i = 0; i < numberOfCards; i++) {
    let key = sessionStorage.key(i);

    if (key === id) {
      card = sessionStorage.getItem(key);
    }
  }

  return card;
};

export const checkIfCardIsInSessionStorage = (id) => {
  let response = false;
  const numberOfCards = sessionStorage.length;

  for (let i = 0; i < numberOfCards; i++) {
    let key = sessionStorage.key(i);

    if (key === id) {
      response = true;
    }
  }

  return response;
};