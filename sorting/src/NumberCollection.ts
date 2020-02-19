import { ISortable } from './ISortable'

export class NumberCollection implements ISortable {
  public data: number[]

  constructor(data: number[]) {
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
