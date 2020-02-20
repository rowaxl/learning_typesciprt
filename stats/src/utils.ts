export const strToDate = (dateStr: string): Date => {
  const dateStrings = dateStr
    .split('/')
    .map(
      (value: string): number => parseInt(value)
  )

  return new Date(dateStrings[2], dateStrings[1] - 1, dateStrings[0])
}
