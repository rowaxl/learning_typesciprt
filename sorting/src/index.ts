import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'

const numCol = new NumberCollection([0,-1,2,1])
const sortNum = new Sorter(numCol)

sortNum.simpleSort()
sortNum.log()

// const sortStr = new Sorter('bbasXe2mlvsa')

// sortStr.simpleSort()
// sortStr.log()

