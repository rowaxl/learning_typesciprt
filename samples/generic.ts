// class
class SomeArray<T> {
  constructor(public collection: T[]) { }
  
  getItem(index: number): T {
    return this.collection[index]
  }
}

const arrStr = new SomeArray<string>(['a', 'b', 'c'])

const arrTuple = new SomeArray(['a', 1, false])
const arrTuple2 = new SomeArray<string | number>([1, 'hi'])

// function
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything<string>(['hi', 'hola'])
printAnything<string | number>(['hi', 'hola', 111, 0x123])

type strAndNum = { str: string, num: number }

printAnything<strAndNum>([
  { str: 'str', num: 1 },
  { str: 'str2', num: 2 },
  { str: 'str3', num: 3 },
])

// generic constraints
class Car {
  print() {
    console.log('i am car')
  }
}

class House {
  print() {
    console.log('i am house')
  }
}

interface Printable {
  print(): void
}

function printHouseesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseesOrCars([
  { print() { console.log('hello') } },
  new House(),
  new Car(),
])

printHouseesOrCars<House>([
  new House(),
  new House(),
])