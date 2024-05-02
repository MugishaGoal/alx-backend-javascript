// Import the 'fs' module for file system operations
const fs = require ('fs');

// Define a function named countStudents that takes a 'dataPath' argument
const countStudents = (Path) => {
  // Check if the specified file path exists
  if (!fs.existsSync(Path)) {
    // If the file does not exist, throw an error
    throw new Error('Cannot load the database');
  }
  
  // Check if the specified path corresponds to a file
  if (!fs.statSync(Path).isFile()) {
    // If the path does not correspond to a file, throw an error
    throw new Error('Cannot load the database');
  }
  
  // Read the content of the file synchronously, decode it as UTF-8, trim any whitespace, and split it into lines
  const fileLines = fs.readFileSync(Path, 'utf-8').toString('utf-8').trim().split('\n');
  
  // Initialize an empty object to store student groups
  const studentGroups = {};
  
  // Extract field names from the first line of the CSV file
  const dbFieldNames = fileLines[0].split(',');
  
  // Extract property names from the field names
  const studentNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Iterate over each line of the file (excluding the header)
  for (const line of fileLines.slice(1)) {
    // Split each line into an array of student properties
    const studentArray = line.split(',');
    
    // Extract student property values and the field
    const studentValues = studentArray.slice(0, studentArray.length - 1);
    const field = studentArray[studentArray.length - 1];
    
    // If the field does not exist in studentGroups, create an empty array
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    
    // Map each property name to its corresponding value and create an object
    const studentEntries = studentNames.map((Name, idx) => [Name, studentValues[idx]]);
    
    // Push the student object into the corresponding field array
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate the total number of students by summing the lengths of all student groups
  const totalStudents = Object.values(studentGroups).reduce((pre, cur) => (pre || []).length + cur.length);
  
  // Log the total number of students to the console
  console.log(`Number of students: ${totalStudents}`);
  
  // Iterate over each field in studentGroups
  for (const [field, group] of Object.entries(studentGroups)) {
    // Extract the first names of students in the group and join them with commas
    const studentNames = group.map((student) => student.firstname).join(', ');
    
    // Log the number of students in the field and their first names to the console
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

// Export the countStudents function to make it accessible to other modules
module.exports = countStudents;

