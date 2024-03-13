function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const filteredStudents = students.filter((student) => student.location === city);

  // Map through the filtered students and update grades
  const updatedStudents = filteredStudents.map((student) => {
    // Find the corresponding grade for the student (if exists)
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    // If grade exists, update the student's grade, otherwise set it to 'N/A'
    const grade = studentGrade ? studentGrade.grade : 'N/A';
    // Return the updated student object
    return { ...student, grade };
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;
