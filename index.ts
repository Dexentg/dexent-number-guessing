#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "hint",
    type: "list",
    message: "You wanna know hint?\n\tOR\n  Try with yourself?",

    choices: ["HINT", "LUCK"],
  },
]);
if (answer.hint === "HINT") {      //  FOR HINT = WHAT COMPUTER GENERATED (RANDOM NUMBER)
  if (randomNumber === 1) {
    console.log(
      "I am a single digit,\nThe first of all numbers, so legit.\nIn unity, I stand tall,\nWhat am I? Answer the call!"
    );
  } else if (randomNumber === 2) {
    console.log(
      "I am a number, small and true,\nDivisible by one and by myself too.\nI'm the only even prime, it's clear,\nA pair of me is what you hold dear. \nWhat am I?"
    );
  } else if (randomNumber === 3) {
    console.log("I am a number, small and prime,\nMultiply me by one, I remain unchanged,\nSubtract me from six, the answer is clear,");
  } else if (randomNumber === 4) {
    console.log("William is a historian, He takes two from five, the answer is yours");
  } else if (randomNumber === 5) {
    console.log("Marla has four daughters, and each of her daughters has a brother.\nHow many children does Marla have?");
  } else if (randomNumber === 6) {
    console.log("Double my number, I'm less than 20, \nhalf of my number is less than four.What number am I?");
  }
}

{
  const sheet = await inquirer.prompt([
    {
      name: "numberguessed",
      type: "number",
      message: "Please Select A Number Between 1-6",
    },
  ]);

  if (sheet.numberguessed === randomNumber) {
    console.log("CONGRATULATIONS :)  ");
    console.log("\nYOU GUESSED RIGHT NUMBER");
  } else {
    console.log("OOOOOPSS   :(");
    console.log("\nYOU GUESSED WRONG NUMBER");
    console.log("\n\n   TRY AGAIN NEXT TIME");
  }
}
