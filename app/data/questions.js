// const Question = require("./Question.js");

const questionStrings = [
    "You are a night owl",
    "You enjoy social interaction but can only handle a limited amount before you are exhuasted",
    "You are not a morning person",
    "You maintain a crusty persona but really inside you're a big softie",
    "You have multiple siblings",
    "You live in a suburban neighborhood",
    "You love binge watching shows on Netflix",
    "You hate Mondays",
    "You Love Lasagna",
    "You live with a dog named Odie"
]

const questions = questionStrings.map((question, index) => {
    // console.log(question, index);
    return { id: `question${++index}`, question: question };
})


module.exports = questions;
