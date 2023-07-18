import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");

reader.read();
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manunitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manunitedWins = manunitedWins + 1;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manunitedWins++;
  }
}
console.log(`Man United won ${manunitedWins} games`);
