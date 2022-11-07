export function dateTimeToDate(date) {
  var date = new Date(date);

  var twoDigitMonth = date.getMonth() + "";
  if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;

  var twoDigitDate = date.getDate() + "";
  if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;

  var dateFormated =
    twoDigitDate + "/" + twoDigitMonth + "/" + date.getFullYear();

  return dateFormated;
}
