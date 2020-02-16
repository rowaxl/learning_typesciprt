import { NumberCollection } from './NumberCollection'

export class Sorter {
  public collection: NumberCollection

  constructor(data: NumberCollection) {
    this.collection = data
  }

  simpleSort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // If collections is number[]
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }

        this.log()
      }
    }
  }

  log(): void {
    console.log(this.collection.data)
  }
}