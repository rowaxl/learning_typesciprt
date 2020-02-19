import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'

const numCol = new NumberCollection([0,-1,2,1])
const sortNum = new Sorter(numCol)

sortNum.simpleSort()
console.log(`after sort: ${numCol.data}`)

// const sortStr = new Sorter('bbasXe2mlvsa')

// sortStr.simpleSort()
// sortStr.log()

