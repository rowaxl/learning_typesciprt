class Decorator {
  color: string = 'red'

  get formattedColor(): string {
    return `This is a ${this.color} boat`
  }

  @testDecorator
  pilot(): void { 
    console.log('swish')
  }
}

function testDecorator(target: any, key: string):void {
  console.log(target)
  console.log(key)
}

