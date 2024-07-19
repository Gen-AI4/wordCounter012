#! /usr/bin/env node
import input from "@inquirer/input";
const answer = await input({
    message: "Enter your sentence to count the words:",
});
const words = answer.trim().split(" ");
console.log(words);
console.log(`Your sentence count the words is ${words.length}`);
