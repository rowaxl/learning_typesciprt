import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'
import { CharactersCollection } from './CharactersCollection'

const initNums = [0,-1,2,1]
const numCol = new NumberCollection(initNums)
const sortNum = new Sorter(numCol)

sortNum.simpleSort()
console.log(`
before: ${initNums}
after: ${numCol.data}
`)

const initChar = 'bbasXe2mlvsa'
const charCol = new CharactersCollection(initChar)
const sortStr = new Sorter(charCol)

sortStr.simpleSort()
console.log(`
before: ${initChar}
after: ${charCol.data}
`)
