import * as fs from 'fs'

const assetPath = './asset/football.csv'
const matches = fs.readFileSync(assetPath, {
  encoding: 'UTF-8'
})
  .split('\n')
  .map((row: string):string[] => row.split(','))


/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won, 
 */

enum WhichWin {
  Home = 'H',
  Away = 'A',
  Draw = 'D'
}

const teamName = 'Man United'

let manUnitedWins = 0

for (let match of matches) {
  if (match[1] === teamName && match[5] === WhichWin.Home) {
    manUnitedWins++
  } else if (match[2] === teamName && match[5] === WhichWin.Away) {
    manUnitedWins++
  }
}

console.log(`Man United wins ${manUnitedWins} times`)
