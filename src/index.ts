import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manunitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manunitedWins = manunitedWins + 1;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manunitedWins++;
  }
}
console.log(`Man United won ${manunitedWins} games`);
