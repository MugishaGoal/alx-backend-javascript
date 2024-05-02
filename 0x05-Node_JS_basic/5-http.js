const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (Path) => new Promise((resolve, reject) => {
  if (!Path) {
    reject(new Error('Cannot load the database'));
    return;
  }
  fs.readFile(Path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentNames = dbFieldNames.slice(0, -1);

    for (const line of fileLines.slice(1)) {
      const studentArray = line.split(',');
      const studentValues = studentArray.slice(0, -1);
      const field = studentArray.slice(-1)[0];
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      const studentEntries = studentNames.map((Name, idx) => [Name, studentValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre.length + cur.length, 0);
    const response = [`Number of students: ${totalStudents}`];
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentName = group.map((student) => student.firstname).join(', ');
      response.push(`Number of students in ${field}: ${group.length}. List: ${studentName}`);
    }
    resolve(response.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents(DB_FILE)
      .then((report) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${report}\n`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found\n');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
