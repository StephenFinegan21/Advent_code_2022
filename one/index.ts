export{}
const fs = require('fs').promises


// Get the puzzle string from data.txt
async function readFile(filepath): Promise<string[]> {
    try {
      const data = await fs.readFile(filepath, 'utf-8');
      const results = data.split(/\r?\n|\r|\n/g); // Split on new line
      return await results;
    } catch (err) {
      console.log(err);
    }
  }

async function calculate(){
    
       const results = await readFile("/Users/stephenfinegan/Documents/dev/AdventCode/one/data.txt");
        
        let current = 0
        let highest = 0 //Store elf with most calories

        let elfNumber = 0
        let elves:number[] = [] 

        for(let i in results){
            if(results[i] !== ""){
                current += parseInt(results[i])
            }
            if(results[i] === ""){
                elves[elfNumber] = current
                elfNumber++
                if(current > highest){
                    highest = current
                }
                current = 0
            }
        }

        const topThree = elves.sort((a, b) => b - a).slice(0, 3)
        const topThreeCalories = topThree[0] + topThree[1] + topThree[2]

        console.log(highest)
        console.log(topThreeCalories)
    }

calculate()
  




