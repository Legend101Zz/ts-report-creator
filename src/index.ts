import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvReaderFile";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./summary";

// Create an Object that satifies the 'DataReader' interface

const csvFileReader = new CsvFileReader("football.csv");

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Bournemouth"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
