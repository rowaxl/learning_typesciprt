type ColType = number[] | string
class Sorter {
  
  public collection: ColType

  constructor(collection: ColType) {
    this.collection = collection
  }

  simpleSort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // If collections is number[]
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = leftHand
          }
        }

        this.log()
      }
    }
  }

  log(): void {
    console.log(this.collection)
  }
}

const sortNum = new Sorter([3,4,2,1])

sortNum.simpleSort()
sortNum.log()

// const sortStr = new Sorter('bbasXe2mlvsa')

// sortStr.simpleSort()
// sortStr.log()

