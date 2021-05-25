const TimeConvert = (num) => {
  const minutes = Math.floor(num / 60)
  const seconds = num % 60
  return `${minutes}:${seconds < 10 ?
    `0${seconds}` : seconds}`
}

const TimerObj = (num) => {
  const minutes = Math.floor(num / 60)
  const seconds = num % 60
  const obj = {
    minute : minutes,
    second : seconds
  }
  return obj
}

const TimeConvertToHour = (num) => {
  const hour = Math.floor(num / 60)
  const minutes = num % 60
  return `${hour} Jam, ${minutes} Menit`
}

const TimerSecondToTime = (seconds) => {
  const d = Number(seconds)
  const h = Math.floor(d / 3600)
  const m = Math.floor((d % 3600) / 60)
  const s = Math.floor((d % 3600) % 60)
  const hDisplay =
    h > 0 ? `${h.toString().length > 1 ? `${h}` : `${0}${h}`}` : '00'
  const mDisplay =
    m > 0 ? `${m.toString().length > 1 ? `${m}` : `${0}${m}`}` : '00'
  const sDisplay =
    s > 0 ? `${s.toString().length > 1 ? `${s}` : `${0}${s}`}` : '00'
  return `${hDisplay != '00' ? `${hDisplay}:` : ''}${mDisplay}:${sDisplay}`
}

export { TimeConvert, TimerObj, TimeConvertToHour, TimerSecondToTime }