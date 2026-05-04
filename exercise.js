// user input to check age
import {createInterface} from "readline";

const checkBirthYear = createInterface({
    input: process.stdin,
    output: process.stdout
});


checkBirthYear.question("What year were you born?: ", (birthYear) => {
    let age = 2026 - parseInt(birthYear)
    console.log(`You are ${age} years old`);
    checkBirthYear.close();
});