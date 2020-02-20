import * as fs from 'fs'

const assetPath = './asset/football.csv'
const data = fs.readFileSync(assetPath, {
  encoding: 'UTF-8'
})

console.log(data)
