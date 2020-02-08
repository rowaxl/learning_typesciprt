type typed = "brown" | "blue" | true | 10
const typedArr: typed[] = []

typedArr.push(true, "blue")

type tupled = [string, boolean, number]
const coke: tupled = ["black", true, 0]

coke.push('non-sugar') // it success
// coke[3] // compile error


