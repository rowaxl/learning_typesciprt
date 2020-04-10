// inheritence pattern
// import { MatchReader } from './inheritence/MatchReader'

// interface composition pattern
import { MatchReader } from './composition/MatchReader'
import { Summary } from './Summary'

const assetPath = './asset/football.csv'

// inheritence pattern
// const matchReader = new MatchReader(assetPath)
// matchReader.read()
// const matches = matchReader.data

// composition pattern
const matchReader = MatchReader.fromCSV(assetPath)
matchReader.load()
const matches = matchReader.matches

/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won, 
 */
const teamName = 'Man United'

const summary = Summary.summaryWinsWithHTMLReport(teamName)
summary.buildAndPrintReport(matches)
