const TimeConvert = (num) => {
  const minutes = Math.floor(num / 60)
  const seconds = num % 60
  return `${minutes}:${seconds}`
}

export { TimeConvert }