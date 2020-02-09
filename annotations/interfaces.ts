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
