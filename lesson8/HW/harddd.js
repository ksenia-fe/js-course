

// 1.learn requirements
// 2.create step by step algo(& input/output for functions(before functions(in types)))
// 3.draft solution & testing
// 4.refactoring & final testing --> final solution


// check if obj has properties from arr
//    find keys from obj
//    filter those which are not included
//    add those which are included to new obj
// create new obj ++
// add selected peoperties from arr to new obj ++ 
// return new obj ++


// input: object, array
// output: object


  // const prop = Object.keys(obj);
  // for (const [key, value] of Object.entries(obj)) {
  //   console.log(`${key}: ${value}`);
  // }

  // const picked = (({ a, c }) => ({ a, c }))(obj);
  // return picked;

  const pickProps = (obj, arr) => {
      // arr.reduce((res, el) => 
      //   (res[el] = obj[el], res),{}),
      let result = {};
      const included = Object.keys(obj)
        .filter(key => !arr.includes(key));
      result = included
        .reduce((res, field) =>
         (delete res[field], res),{...obj});

      return result;
  }

  res = pickProps( {name: 12, age: 34, city: 'NY'}, ['name', 'city']);
  console.log(res); // => {name: 12, city: 'NY'}
