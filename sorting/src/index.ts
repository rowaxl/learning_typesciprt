import { NumberCollection } from './NumberCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const initNums = [0, -1, 2, 1]
console.log(`
before: ${initNums}`)

const numCol = new NumberCollection(initNums)

numCol.sort()
console.log(`after: ${numCol.data}
`)

const initChar = 'bbasXe2mlvsa'
const charCol = new CharactersCollection(initChar)

charCol.sort()
console.log(`before: ${initChar}
after: ${charCol.data}
`)

const linkedList = new LinkedList()
linkedList.add(5)
linkedList.add(999)
linkedList.add(2)
linkedList.add(10)
linkedList.add(-10)

console.log(`before sort`)
linkedList.print()

linkedList.sort()
console.log(`
after sort`)
linkedList.print()