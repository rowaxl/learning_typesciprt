import { IOutputTarget } from './IOutputTarget'

export class ConsoleReport implements IOutputTarget {
  print(report: string): void {
    console.log(report)
  }
}