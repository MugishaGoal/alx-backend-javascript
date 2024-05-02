import fs from 'fs';

/**
 * Reads the database asynchronously.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise<Object>} Object containing arrays of first names per field.
 */
const readDatabase = (Path) => new Promise((resolve, reject) => {
  if (!Path) {
    reject(new Error('Cannot load the database'));
  }
  if (Path) {
    fs.readFile(Path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentNames
            .map((Name, idx) => [Name, studentValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
