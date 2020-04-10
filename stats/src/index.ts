// inheritence pattern
// import { MatchReader } from './inheritence/MatchReader'

// interface composition pattern
import { CSVReader } from './composition/CSVReader'
import { MatchReader } from './composition/MatchReader'
import { Summary } from './Summary'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HTMLReport } from './reportTargets/HTMLReport'

const assetPath = './asset/football.csv'

// inheritence pattern
// const matchReader = new MatchReader(assetPath)
// matchReader.read()
// const matches = matchReader.data

// composition pattern
const matchReader = new MatchReader(new CSVReader(assetPath))
matchReader.load()
const matches = matchReader.matches

/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won, 
 */
const teamName = 'Man United'

const consoleSummary = new Summary(
  new WinsAnalysis(teamName),
  new ConsoleReport()
)

consoleSummary.buildAndPrintReport(matches)

const htmlSummary = new Summary(
  new WinsAnalysis(teamName),
  new HTMLReport()
)

htmlSummary.buildAndPrintReport(matches)
