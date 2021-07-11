//replacing date formats with string 'date'

const str = "abcd 08/12/1890 \nefgh 08-12-1890 \nijkl 08/12/90 \nmnop 08-12-90"
const regex = /(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-](\d{4}|\d{2})/g
const newStr = str.replaceAll(regex,"date")
console.log(newStr)