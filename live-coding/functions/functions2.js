
// 1.learn requirements
// 2.create step by step algo(& input/output for functions(before functions(in types)))
// 3.draft solution & testing
// 4.refactoring & final testing --> final solution

// algo
// 1.iterate numbers from 1 to n
// 2.check ig number prime or not
//    iterate from 2 to n - 1
//    check if n % number == true

// expression - это команда, которую мы задаём JS, каждая из которых разделяется ';'
// когда в коде много вложенности, лучше делать новые функции
// цикл в цикле не практиковать


// input: number;
// ouyput: boolean;
const isPrime = (num) => {
  // console.log('isPrime is called' + num);
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }

  return true;
}

// input: number;
// output: undefined;
const getPrimes = (n) => {
  for(let i = 2; i <= n; i++){
    if(isPrime(i)){
      console.log(i);
    }
  }
}

getPrimes(7);


// getPrimes(5) output: 2,3,5
