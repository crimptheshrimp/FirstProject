//contains all quiz questions and answers. Answers stored inside a second array represent multiple choice options, with the first element being the correct answer.

let questions = [
    "Who was the most listened artist in 2017?",
    "The song 'Lean On' from 2015 is performed by DJ Snake and which other artist?",
    "What music developed out of the UK rave scene and Jamaican sound system culture?",
    "Who is the most listened female artist in 2020?",
    "True or False: Ed Sheeran is the UK's most listened artist of the decade?",
    "Eminem has his own film, what is it's name?"
];

let answers = [
    "ed sheeran", 
    "major lazer", 
    ["jungle", "grime", "drum and bass"],
    ["billie eilish", "taylor swift", "ariana grande"],
    "true",
    "8 mile"
];

const quiz = {questions, answers};
export default quiz;