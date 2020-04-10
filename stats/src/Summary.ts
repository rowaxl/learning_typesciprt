import { MatchData } from './MatchData'
import { IAnalyzer } from './analyzers/IAnalyzer'
import { IOutputTarget } from './reportTargets/IOutputTarget'

import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { HTMLReport } from './reportTargets/HTMLReport'

export class Summary {
  // static method return instance
  static summaryWinsWithHTMLReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HTMLReport()
    )
  }

  constructor(
    public analyzer: IAnalyzer,
    public outputTarget: IOutputTarget
  ) { }

  buildAndPrintReport(matches: MatchData[]): void {
    const result = this.analyzer.run(matches)

    this.outputTarget.print(result)
  }
}
