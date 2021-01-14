import {
  FlashCard,
  FlashCardsCloudantResponse,
  ResultsResponse,
  ResultsResponseCloudantResponse,
} from "../FlashCard";

export const sampleFlashCard: FlashCard = {
  _id: "bauysdbiuyasd",
  title: "sample title",
  body: "sample body",
  cosUri: "test",
  image: "test image",
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
        cosUri: "test",
        image: "random image",
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
        cosUri: "test",
        image: "random image",
      },
    },
  ],
};

export const sampleResultsCloudantResponse: ResultsResponseCloudantResponse = {
  total_rows: 2,
  offset: 0,
  rows: [
    {
      id: "test_id_1",
      key: "test key",
      value: {},
      doc: {
        _id: "test_id_1",
        _rev: "test_rev_1",
        expl_title: "some title 1",
        expl_body: "some body 1",
        image: "some image 1",
        recommendations: [
          {
            title: "some recommendation title 1",
            body: "some recommendation body 1",
          },
        ],
      },
    },
    {
      id: "test_id_2",
      key: "test key",
      value: {},
      doc: {
        _id: "test_id_2",
        _rev: "test_rev_2",
        expl_title: "some title 2",
        expl_body: "some body 2",
        image: "some image 2",
        recommendations: [
          {
            title: "some recommendation title 2",
            body: "some recommendation body 2",
          },
        ],
      },
    },
  ],
};
