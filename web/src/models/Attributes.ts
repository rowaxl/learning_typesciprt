export class Attributes<T> {
  constructor(private data: T) {}

  // K = keys inside of T
  // T[K] = returns typeof
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  set = (updates: T): void => {
    Object.assign(this.data, updates)
  }
}
