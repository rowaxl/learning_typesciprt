import * as fs from 'fs'

const assetPath = './asset/football.csv'
const data = fs.readFileSync(assetPath, {
  encoding: 'UTF-8'
})
  .split('\n')
  .map((row: string) => row.split(','))

console.log(data)
