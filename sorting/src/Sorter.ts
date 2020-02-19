import { ISortable } from './ISortable'

export abstract class Sorter implements ISortable {
  abstract length: number

  abstract compare(leftIndex: number, rightIndex:number): boolean
  abstract swap(leftIndex: number, rightIndex:number): void

  sort(): void {
    const { length } = this

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        // If collections is number[]
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}