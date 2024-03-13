function getStudentsByLocation(students, city) {
  // Use the filter function to find students located in the specified city
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;
