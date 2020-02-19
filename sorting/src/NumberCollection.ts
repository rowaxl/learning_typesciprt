import { ISortable } from './ISortable'
import { Sorter } from './Sorter'

export class NumberCollection extends Sorter implements ISortable {
  constructor(public data: number[]) {
    super()
    this.data = data
  }

  get length(): number {
    return this.data.length
  }

  public compare(leftIndex: number, rightIndex: number):boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  public swap(leftIndex: number, rightIndex: number):void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }
}
