const TimeConvert = (num) => {
  const minutes = Math.floor(num / 60)
  const seconds = num % 60
  return `${minutes}:${seconds}`
}

const TimeConvertToHour = (num) => {
  const hour = Math.floor(num / 60)
  const minutes = num % 60
  return `${hour} Jam, ${minutes} Menit`
}

export { TimeConvert, TimeConvertToHour }