function getStudentIdsSum(students) {
  // Use the reduce function to sum up all the student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
