export {};
const fs = require("fs").promises;

const getRockPaperScissorsWinner = (elf: string, me: string): number => {
  if (
    (elf === "A" && me === "X") ||
    (elf === "B" && me === "Y") ||
    (elf === "C" && me === "Z")
  ) {
    return 3;
  }
  if (elf === "A") {
    if (me === "Z") return 0;
    if (me === "Y") return 6;
  }
  if (elf === "B") {
    if (me === "X") return 0;
    if (me === "Z") return 6;
  }
  if (elf === "C") {
    if (me === "Y") return 0;
    if (me === "X") return 6;
  } else return 0;
};

const getPickScore = (pick) => {
  if (pick === "X") return 1;
  if (pick === "Y") return 2;
  if (pick === "Z") return 3;
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

async function calculate() {
  const results = await readFile(
    "/Users/stephenfinegan/Documents/dev/AdventCode/two/data.txt"
  );
  let myScore = 0;

  for (let i in results) {
    const choices = results[i].split(" ");//Split each line into the elfs choice an my choice
    myScore += getRockPaperScissorsWinner(choices[0], choices[1]);
    myScore += getPickScore(choices[1]);
  }
  console.log(myScore);
}

calculate()
