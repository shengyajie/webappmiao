function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  return year + "年" + month + "月";
}
function formatTime1(date) {
  var month = date.getMonth() + 1
  var day = date.getDate()
  return month + "月" + day + "日";
}
module.exports = {
  formatTime: formatTime,
  formatTime1: formatTime1
}