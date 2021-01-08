// input: date
// output: obj

// algo
// 1 chaining method
// 2 add date
// 3 subtract date
// 4 return obj

const shmoment = date => {
  let result = date;

  const calculatedDate = {
    add(str, num) {
      switch (str) {
        case 'years':
          result = new Date(date.setFullYear(date.getFullYear() + num));
          break;
        case 'months':
          result = new Date(date.setMonth(date.getMonth() + num));
          break;
        case 'days':
          result = new Date(date.setDate(date.getDate() + num));
          break;
        case 'hours':
          result = new Date(date.setHours(date.getHours() + num));
          break;
        case 'minutes':
          result = new Date(date.setMinutes(date.getMinutes() + num));
          break;
        case 'seconds':
          result = new Date(date.setSeconds(date.getSeconds() + num));
          break;
        case 'milliseconds':
          result = new Date(date.setMilliseconds(date.getMilliseconds() + num));
          break;
      }
      return this;
    },
    subtract(str, num) {
      switch (str) {
        case 'years':
          result = new Date(date.setFullYear(date.getFullYear() - num));
          break;
        case 'months':
          result = new Date(date.setMonth(date.getMonth() - num));
          break;
        case 'days':
          result = new Date(date.setDate(date.getDate() - num));
          break;
        case 'hours':
          result = new Date(date.setHours(date.getHours() - num));
          break;
        case 'minutes':
          result = new Date(date.setMinutes(date.getMinutes() - num));
          break;
        case 'seconds':
          result = new Date(date.setSeconds(date.getSeconds() - num));
          break;
        case 'milliseconds':
          result = new Date(date.setMilliseconds(date.getDate() - num));
          break;
      }
      return this;
    },
    result() {
      return result;
    },
  };

  return calculatedDate;
};

const result = shmoment(new Date()).subtract('years', 30).result();

console.log(result);

const now = new Date();
console.log(now.getMonth());
console.log(now.setMonth(4));
console.log(now);
console.log(new Date(now.setSeconds(now.getSeconds() - 120)));
