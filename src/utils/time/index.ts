import dayjs from "dayjs"

export const timeFormat = function (time, Format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(time).format(Format)
}
export const getTimeDiff = function (stringTime) {
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const month = day * 30
  const time = dayjs().valueOf() - dayjs(stringTime).valueOf()
  if (time / month > 12) {
    return timeFormat(stringTime)
  } else if (time / month >= 1) {
    return Math.floor(time / month) + "个月前"
  } else if (time / week >= 1) {
    return Math.floor(time / week) + "周前"
  } else if (time / day >= 1) {
    return Math.floor(time / day) + "天前"
  } else if (time / hour >= 1) {
    return Math.floor(time / hour) + "小时前"
  } else if (time / minute >= 1) {
    return Math.floor(time / minute) + "分钟前"
  }
  return "刚刚"
}
