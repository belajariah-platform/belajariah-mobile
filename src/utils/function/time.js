const TimeConvert = (num) => {
  // let numMinute, numSecond
  const minutes = Math.floor(num / 60)
  const seconds = num % 60
  // minutes.lenght == 1 ? numMinute = '0' :
  // seconds.lenght == 1 ?
  //   numSecond = '0' : numMinute = ''&&  numSecond = ''
  // }
  return `${minutes}:${seconds}`
}

const TimeConvertToHour = (num) => {
  const hour = Math.floor(num / 60)
  const minutes = num % 60
  return `${hour} Jam, ${minutes} Menit`
}

export { TimeConvert, TimeConvertToHour }