// sorted array

// changed array
function sortDesc (arr) {
  return arr.sort((a,b) => b-a);
}

// to not change array you can
function sortDesc (arr) {

  let copy = [...arr]
  return copy.sort((a,b) => b-a);
}
// or
function sortDesc (arr) {

  let copy = arr.slice();
  return copy.sort((a,b) => b-a);
}
// =
function sortDesc (arr) {
  return arr.slice().sort((a,b) => b-a);
}