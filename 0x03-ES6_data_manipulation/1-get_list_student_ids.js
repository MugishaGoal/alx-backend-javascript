function getListStudentIds(array) {
  // Check if the argument is an array
  if (!Array.isArray(array)) {
    return [];
  }

  // Use the map function to extract ids from each object in the array
  return array.map(student => student.id);
}

export default getListStudentIds;
