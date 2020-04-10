import { MatchData } from './MatchData'
import { IAnalyzer } from './analyzers/IAnalyzer'
import { IOutputTarget } from './reportTargets/IOutputTarget'

export class Summary {
  constructor(
    public analyzer: IAnalyzer,
    public outputTarget: IOutputTarget
  ) { }
  
  buildAndPrintReport(matches: MatchData[]): void {
    const result = this.analyzer.run(matches)

    this.outputTarget.print(result)
  }
}
