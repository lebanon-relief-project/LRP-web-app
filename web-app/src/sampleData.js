/*
  Temp data for /api/results
*/
export const recommendation_1 = {
  title: "Allow yourself to feel",
  body:
    "As hard as this might sound, the healthiest way to deal with feelings is to notice them, accept them as a reaction to what has happened, and let them be. Emotions are like waves, they subside once they peak, let them do so, or else they will keep trying to resurface.",
};
export const recommendation_2 = {
  title: "Talk about it",
  body:
    "Share your experience, thoughts, and feelings. It's important that you only do so when you feel ready to. This can be a gradual process. Take your time and do it at whatever pace feels comfortable for you.",
};
export const recommendation_3 = {
  title: "Try these excercises",
  body: "Lorem ipsum...",
};

// Flashcard recommendations
export const sampleResultsFeelingGuilty = {
  _id: "9851d5f91b9f896b097acdd32a5d4e80",
  _rev: "",
  expl_title: "Feeling Guilty",
  expl_body: "",
  image: "feeling-guilty.svg",
  recommendations: [recommendation_1, recommendation_2, recommendation_3],
};
export const sampleResultsAchesPains = {
  _id: "9851d5f91b9f896b097acdd32a5dfed8",
  _rev: "",
  expl_title: "Unexplained aches and pains",
  expl_body: "",
  image: "aches-pains.svg",
  recommendations: [recommendation_3, recommendation_1],
};

// Results response
export const sampleResultsResponse = {
  results: [sampleResultsFeelingGuilty, sampleResultsAchesPains],
};
