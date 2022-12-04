export {};
const fs = require("fs").promises;

// Return the choice I need to make
const getMyChoice = (elfChoice: string, resultNeeded: string): string => {
  if (resultNeeded === "Y") {
    return elfChoice;
  }
  if (resultNeeded === "X") {
    return elfChoice === "A" ? "C" : elfChoice === "B" ? "A" : "B";
  }
  if (resultNeeded === "Z") {
    return elfChoice === "A" ? "B" : elfChoice === "B" ? "C" : "A";
  }
};
//Return the score I get for my pick
const getPickScore = (pick: string): number => {
  return pick === "A" ? 1 : pick === "B" ? 2 : 3;
};
// Return my score for the round
const getResult = (elf: string, me: string): number => {
  if (elf === me) return 3;
  if (elf === "A") {
    if (me === "C") return 0;
    if (me === "B") return 6;
  }
  if (elf === "B") {
    if (me === "A") return 0;
    if (me === "C") return 6;
  }
  if (elf === "C") {
    if (me === "B") return 0;
    if (me === "A") return 6;
  } else return 0;
};

// Get the puzzle string from data.txt
async function readFile(filepath): Promise<string[]> {
    try {
      const data = await fs.readFile(filepath, "utf-8");
      const results = data.split(/\r?\n|\r|\n/g); // Split on new line
      return await results;
    } catch (err) {
      console.log(err);
    }
  }

const calculate = async () => {
  const results = await readFile(
    "/Users/stephenfinegan/Documents/dev/AdventCode/two/data.txt"
  );
  let pickScore = 0;
  let resultScore = 0;

  for (let i in results) {
    const choices = results[i].split(" ");// Split the 2 columns
    pickScore = getPickScore(getMyChoice(choices[0], choices[1])) + pickScore; //Find out what choice I need to make and pass that into the function that calculates the score for that choice
    resultScore =
      getResult(choices[0], getMyChoice(choices[0], choices[1])) + resultScore;// Find out what choice I need to make and pass that into the function that calculates the result of the round
  }
  const totalScore = pickScore + resultScore;
  console.log(totalScore);
};



calculate();
