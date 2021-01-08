// task 1
const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const futureDate = new Date(date).setDate(days + day);
  return week[new Date(futureDate).getDay()];
};

const result = dayOfWeek(new Date(2020, 11), 63);

console.log(result);

// task 2
const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
});

const getGreenwichTime = date => formatter.format(date);
console.log(getGreenwichTime(new Date()));

// task 3
// algo
// if startDate > endDate count st. - en.
// if endDate > startDate count en. - st.
// return string +++
// /* export */ const getDiff1 = (startDate, endDate) => {
//   const fromDate = new Date(new Date(startDate).getTime());
//   //   console.log('start Date \n' + fromDate);
//   const toDate = new Date(new Date(endDate).getTime(startDate));
//   //   console.log('end Date \n' + endDate);
//   if (fromDate > toDate) {
//     const result = new Date(); //incorrect
//     // console.log('result\n' + result);
//     return `${result.getDate()}d ${result.getHours()}h ${result.getMinutes()}m ${result.getSeconds()}s`;
//   }
//   const res = new Date(toDate - fromDate);
//   return `${res.getDate()}d ${res.getHours()}h ${res.getMinutes()}m ${res.getSeconds()}s`;
// };
// console.log(getDiff1(new Date(1999, 0), new Date()));
// console.log(getDiff1(new Date(), new Date(1999, 0)));

// const getDiff = (startDate, endDate) => {
//   const date1 = new Date(startDate);
//   const date2 = new Date(endDate);
//   if (date1 > date2) {
//     const result = new Date(date1 - date2);
//     const diffInDays = Math.floor((date1 - date2) / (3600000 * 24));
//     return `${diffInDays}d ${result.getHours()}h ${result.getMinutes()}m ${result.getSeconds()}s`;
//   }
//   const result = new Date(date2 - date1);
//   const diffInDays = Math.floor((date2 - date1) / (3600000 * 24));
//   return `${diffInDays}d ${result.getHours()}h ${result.getMinutes()}m ${result.getSeconds()}s`;
// };
// console.log(getDiff(new Date(2019, 11, 25), new Date()));

const getDiff = (startDate, endDate) => {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  let result = new Date(date1 - date2);
  if (result > 0) {
    const diffInDays = Math.floor(result / (3600000 * 24));
    return `${diffInDays}d ${result.getHours()}h ${result.getMinutes()}m ${result.getSeconds()}s`;
  }
  result = new Date(date2 - date1);
  const diffInDays = Math.floor((date2 - date1) / (3600000 * 24));
  return `${diffInDays}d ${result.getHours()}h ${result.getMinutes()}m ${result.getSeconds()}s`;
};
console.log(getDiff(new Date(), new Date()));
