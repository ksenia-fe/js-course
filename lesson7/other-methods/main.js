// ['a','b','c','d'] ['a','b'] => ['Good job, c','Good job, d']


const allStudentsList = ['a','b','c','d'];
const studentsForRetake = ['a','b'];

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStudents = allStudentsList
    .filter(name => !studentsForRetake.includes(name));

  const message = passedStudents
    .map(name => 'Good job, ' + name);

  return message;
}


// =
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter(name => !studentsForRetake.includes(name))
    .map(name => 'Good job, ' + name);

console.log(getMessagesForBestStudents(allStudentsList, studentsForRetake));