export default function whoDate(date) {
  let mm, dd, yyyy, dateArr

  if (date.indexOf('/') !== -1) {
    dateArr = date.split('/').map(Number)
    mm = (dateArr[0] < 10 ? '0' : '') + dateArr[0];
    dd = (dateArr[1] < 10 ? '0' : '') + dateArr[1];
    yyyy = (50 <= dateArr[2] <= 99 ? '19' : '20') + dateArr[2];
    return (yyyy + "-" + mm + "-" + dd)
  }
  if (date.indexOf('#') !== -1) {
    dateArr = date.split('#').map(Number)
    mm = (dateArr[0] < 10 ? '0' : '') + dateArr[0];
    dd = (dateArr[2] < 10 ? '0' : '') + dateArr[2];
    yyyy = (50 <= dateArr[1] <= 99 ? '19' : '20') + dateArr[1];
    return (yyyy + "-" + mm + "-" + dd)
  }
  if (date.indexOf('*') !== -1) {
    dateArr = date.split('*').map(Number)
    mm = (dateArr[1] < 10 ? '0' : '') + dateArr[1];
    dd = (dateArr[0] < 10 ? '0' : '') + dateArr[0];
    yyyy = dateArr[2]
    return (yyyy + "-" + mm + "-" + dd)
  }
  if (date.indexOf(' ') !== -1) {
    date = date.replace(/,/g, '')
    if (/\D/.test(date.slice(0,3))) {
      mm = date.slice(0,3)
      switch (mm) {
        case "Jan":
          mm = "01"
          break
        case "Feb":
          mm = "02"
          break
        case "Mar":
          mm = "03"
          break
        case "Apr":
          mm = "04"
          break
        case "May":
          mm = "05"
          break
        case "Jun":
          mm = "06"
          break
        case "Jul":
          mm = "07"
          break
        case "Aug":
          mm = "08"
          break
        case "Sep":
          mm = "09"
          break
        case "Oct":
          mm = "10"
          break
        case "Nov":
          mm = "11"
          break
        case "Dec":
          mm = "12"
          break
        default:
          "Error"
          break
      }
    dateArr = date.split(' ').map(Number)
    dd = (dateArr[1] < 10 ? '0' : '') + dateArr[1];
    if (dateArr[2] <100) {
      yyyy = (50 <= dateArr[2] <= 99 ? '19' : '20') + dateArr[2];
    } else {
      yyyy = dateArr[2]
    }
    }
    return (yyyy + "-" + mm + "-" + dd)
  }
}
