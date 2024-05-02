const fs = require('fs');

const countStudents = (Path) => new Promise((resolve, reject) => {
  // Read the database file asynchronously
  fs.readFile(Path, 'utf-8', (err, data) => {
    // Handle errors
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    // Process the data if available
    if (data) {
      const fileLines = data.trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Iterate through each line of the file
      for (const line of fileLines.slice(1)) {
        const studentArray = line.split(',');
        const studentValues = studentArray.slice(0, studentArray.length - 1);
        const field = studentArray[studentArray.length - 1];
        // Initialize student groups if not already present
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        // Create student entries and push them to respective groups
        const studentEntries = studentNames.map((Name, idx) => [Name, studentValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate total number of students
      const totalStudents = Object.values(studentGroups).reduce((pre, cur) => (pre || []).length + cur.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      // Log number of students in each field
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentName = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentName}`);
      }
      // Resolve the promise with true when done
      resolve(true);
    }
  });
});

module.exports = countStudents;
