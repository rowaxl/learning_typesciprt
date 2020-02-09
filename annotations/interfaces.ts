const obj = {
  name: 'object',
  num: 1234,
  bool: false,
}

const longAnnotation = (obj: {
  name: string
  num: number
}) => {
  console.log(`
    name: ${obj.name}
    num: ${obj.num}
  `)
}

longAnnotation(obj)

// use interface
interface ISomeObject {
  name: string
  num: number
  bool: boolean
}

const newObj: ISomeObject = {
  name: 'new',
  num: 4321,
  bool: true
}

const annotationWithInterface = ({ name, num, bool }: ISomeObject) => {
  console.log(`
    name: ${name}
    num: ${num}
    bool: ${bool}
  `)
}

annotationWithInterface(obj)
annotationWithInterface(newObj)

class Implemented implements ISomeObject {
  public name = 'new'
  public num = 4321
  public bool = true

  private somePrivateVal = 'priv'

  protected protectedVal = 'prot'

  public summarize = () =>
  `
    name: ${this.name}
    num: ${this.num}
    bool: ${this.bool}
    private: ${this.somePrivateVal}
    protected: ${this.protectedVal}
  `
}

const implemented = new Implemented()

annotationWithInterface(implemented)

const printSummary = (obj: Implemented):void => {
  console.log(obj.summarize())
}

printSummary(implemented)

class Extended extends Implemented {
  public summarize = () =>
    `
      name: ${this.name}
      num: ${this.num}
      bool: ${this.bool}
      priv: 'none'
      prot: ${this.protectedVal}
    `
}

const exteded = new Extended()
exteded.name = 'exteded'
exteded.num = 21491013284
exteded.bool = false || true || true || false

printSummary(exteded)

interface IT1 {
  p1: string
  p2: string
}

interface IT2 {
  p3: string
  callSome(): string
}

class MImpl implements IT1, IT2 {
  p1 = 'I\'m IT1 props'
  p2 = 'howbout multiple implements?'
  p3 = 'I\'m IT2 props'
  public callSome():string {
    return (`
p1: ${this.p1}
p2: ${this.p2}
p3: ${this.p3}
    `)
  }

  // overload signatures
  public printProp(str: string):string
  public printProp(str: string, str2: string):string[] 

  // overload implements
  public printProp(str: string, str2?: string):string |string[] {
    if (str2) {
      return [str, str2, this.p2]
    }

    return str + this.p1
  }
}

const impled = new MImpl()
console.log(impled.printProp('hello '))
console.log(impled.printProp('hello ', 'overloaded'))
console.log(impled.callSome())

// function overload pattern
function overloadFunc(obj: IT1): void
function overloadFunc(obj: IT2): string

function overloadFunc(obj: IT1 | IT2): void | string {
  if (Object(obj).hasOwnProperty('callSome')) {
    return (obj as IT2).callSome()
  }

  console.log((obj as IT1).p1)
  console.log((obj as IT1).p2)
}

const res1 = overloadFunc({
  p1: 'I\'m IT1 props',
  p2: 'run overload1 func'
})

console.log(res1)

const res2 = overloadFunc({
  p3: 'I\'m IT2 props',
  callSome: () => `this is overload2 func`
})

console.log(res2)
