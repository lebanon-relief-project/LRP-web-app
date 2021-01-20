/*
  Temp data for /api/results
*/
// Feeling guilty
export const feeling_guilty_recommendation_1 = {
  title: "Allow yourself to feel",
  body:
    "It can be helpful for you to accept the feelings that surface by allowing yourself time to process the guilt. This could be achieved by accepting that you are not in control of the event; acknowledging  how you reacted at the time of the event; and understanding that you acted to the best of your ability.",
};
export const feeling_guilty_recommendation_2 = {
  title: "Talk about it",
  body:
    "Share your experience, thoughts, and feelings. It's important that you only do so when you feel ready to. This can be a gradual process. Take your time and do it at whatever pace feels comfortable for you.",
};
export const feeling_guilty_recommendation_3 = {
  title: "Try these excercises",
  body: "Lorem ipsum...",
};

// Aches and pains
export const aches_pains_recommendation_1 = {
  title: "Excersize the area",
  body:
    "For a temporary relief, you can start exercising the area where the pain is located. By doing so, you oxygenate the muscles, and increase the blood flow to the area. Yet, as you already know, the problem isn't physical, hence, a first tip can be to try and relax and listen to what your body is trying to tell you.",
};
export const aches_pains_recommendation_2 = {
  title: "Meditate",
  body:
    "Meditation is a powerful tool, as it teaches you to acknowledge thoughts and aid uncounsious thoughts to come into the conscious part of our brain. respiration breathing techniques ",
};
export const aches_pains_recommendation_3 = {
  title: "Try these excercises",
  body: "During a traumatic event, our nervous system reverts back to its primitive form, thinking only about how we are going to survive. Once the episode past, our nervous system calms down, however sometimes it doesn't and keeps on sending this distressed signal. When this occurs, our body sends us a signal asking for help. That signal is the pain that cannot be explained medically. This is called psychosomatic pain, and our body trying to tell us that we are distressed and we need to take care of ourselves before we go deeper into duress. Different psychosomatic symptoms mean different things",
};

// Sleep difficulties and nightmares
export const difficulties_nightmares_recommendation_1 = {
  title: "Create a comfortable sleeping environment",
  body:
    "If the traumatic event happened in the bedroom, try to find another sleeping arrangement. If darkness is a trigger for you, consider leaving the light on in the corridor or investing in a dim nightlight.",
};
export const difficulties_nightmares_recommendation_2 = {
  title: "No screens before bed",
  body:
    "Turn off electronic devices and stop using them an hour before bed. Establish a relaxing bedtime routine, whether it's a relaxing bath, reading a book or meditating.",
};
export const difficulties_nightmares_recommendation_3 = {
  title: "Try some of these",
  body: "avoid daytime napping, avoid caffeine, only use your bed for night time sleep, avoid looking at a screen before you sleep, and try to maintain a regular sleeping schedule. If there is something that usually helps you drift off, such as music or a podcast, use it!",
};



// Flashcard recommendations
export const sampleResultsFeelingGuilty = {
  _id: "9851d5f91b9f896b097acdd32a5d4e80",
  _rev: "",
  expl_title: "Feeling Guilty",
  expl_body: "",
  image: "feeling-guilty.svg",
  recommendations: [
    feeling_guilty_recommendation_1,
    feeling_guilty_recommendation_2,
    feeling_guilty_recommendation_3,
  ],
};
export const sampleResultsAchesPains = {
  _id: "9851d5f91b9f896b097acdd32a5dfed8",
  _rev: "",
  expl_title: "Unexplained aches and pains",
  expl_body: "",
  image: "aches-pains.svg",
  recommendations: [
    aches_pains_recommendation_1,
    aches_pains_recommendation_2,
    aches_pains_recommendation_3,
  ],
};
export const sampleSleepDifficultiesNightmares = {
  _id: "18b4e43ad09f1b8e42fcec6c17e7a144",
  _rev: "",
  expl_title: "Sleep difficulties and nightmares",
  expl_body: "",
  image: "difficulties-nightmares.svg",
  recommendations: [
    difficulties_nightmares_recommendation_1,
    difficulties_nightmares_recommendation_2,
    difficulties_nightmares_recommendation_3,
  ],
};

// Results response
export const sampleResultsResponse = {
  results: [
    sampleResultsFeelingGuilty,
    sampleResultsAchesPains,
    sampleSleepDifficultiesNightmares,
  ],
};
