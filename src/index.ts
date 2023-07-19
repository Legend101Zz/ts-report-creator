import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvReaderFile";
import { MatchResult } from "./MatchResult";

// Create an Object that satifies the 'DataReader' interface

const csvFileReader = new CsvFileReader("football.csv");

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manunitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manunitedWins = manunitedWins + 1;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manunitedWins++;
  }
}
// console.log(reader.data);
console.log(`Man United won ${manunitedWins} games`);
