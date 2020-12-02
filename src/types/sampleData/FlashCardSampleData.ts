import { FlashCard, FlashCardsCloudantResponse } from "../FlashCard";

export const sampleFlashCard: FlashCard = {
  _id: "bauysdbiuyasd",
  title: "sample title",
  body: "sample body",
};

export const sampleFlashCards: FlashCard[] = [sampleFlashCard];

export const sampleFlashCardsResponse = {
  cards: sampleFlashCards,
};

export const sampleFlashCardsCloudantResponse: FlashCardsCloudantResponse = {
  total_rows: 2,
  offset: 0,
  rows: [
    {
      id: "some random id 1",
      key: "some random key 1",
      value: {},
      doc: {
        _id: "some random _id 1",
        title: "some random title 1",
        body: "some random body 1",
      },
    },
    {
      id: "some random id 2",
      key: "some random key 2",
      value: {},
      doc: {
        _id: "some random _id 2",
        title: "some random title 2",
        body: "some random body 2",
      },
    },
  ],
};
