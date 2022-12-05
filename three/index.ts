export {};
const fs = require("fs").promises;

const splitStringInHalf = (string: string): string[][] => {
    const half = Math.ceil(string.length / 2);
    return [string.slice(0, half).split(''), string.slice(half).split('')];
};

const findDuplicatesInTwoArrays = (arrayOne: string[], arrayTwo: string[]): string[] => {
    const duplicates:string[] = [];
    for (let i in arrayOne) {
        if (arrayTwo.includes(arrayOne[i])) {
            duplicates.push(arrayOne[i]);
        }
    }
    return duplicates;
};


const findDuplicateInThreeArrays = (arrayOne: string[], arrayTwo: string[], arrayThree: string[]): string => {
    let duplicates = ''
    for (let i in arrayOne) {
        if (arrayTwo.includes(arrayOne[i]) && arrayThree.includes(arrayOne[i])) {
            duplicates = arrayOne[i];
        }
    }
    return duplicates;
};
    

const mapLettersToNumbers = (letter: string): number => {   
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.indexOf(letter) + 1;
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

//Day 3 Part 1
  async function calculatePartOne() {
    const results = await readFile(
      "/Users/stephenfinegan/Documents/dev/AdventCode/three/data.txt"
    );

    let totalValue = 0
      for (let i in results) {

      const compartmentOne = splitStringInHalf(results[i])[0]
      const compartmentTwo = splitStringInHalf(results[i])[1]
      const duplicates = findDuplicatesInTwoArrays(compartmentOne, compartmentTwo)
      const letterValue = mapLettersToNumbers(duplicates[0])
      totalValue += letterValue
      }
      console.log(totalValue) //print answer to part 1

  }

  //Day 3 Part 2
  async function calculatePartTwo() {
    const results = await readFile(
      "/Users/stephenfinegan/Documents/dev/AdventCode/three/data.txt"
    );

    let totalValue = 0
    let count = 0
    let currentDuplicate = ''
    
      for ( let i = 0; i < results.length; i += 3) {
        currentDuplicate = findDuplicateInThreeArrays(results[i].split(''), results[i+ 1].split(''), results[i + 2].split('') )
        totalValue += mapLettersToNumbers(currentDuplicate)
        count ++
    }
    console.log(totalValue) //print answer to part 2

  }
  
  calculatePartOne()
  calculatePartTwo()