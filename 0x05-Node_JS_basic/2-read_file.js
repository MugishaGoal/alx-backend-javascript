const fs = require('fs');

function countStudents(path) {
    try {
        // Read the database file synchronously
        const data = fs.readFileSync(path, 'utf8');

        // Split the data by lines and remove any empty lines
        const lines = data.trim().split('\n').filter(line => line.trim() !== '');

        // Initialize counters for each field
        const counters = {};

        // Iterate over each line
        lines.forEach(line => {
            // Split the line by commas
            const [firstName, lastName, age, field] = line.split(',');

            // Increment the counter for the field
            counters[field] = (counters[field] || 0) + 1;
        });

        // Log the total number of students
        const totalStudents = lines.length;
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students in each field and their first names
        Object.entries(counters).forEach(([field, count]) => {
            const firstNames = lines
                .filter(line => line.split(',')[3] === field)
                .map(line => line.split(',')[0])
                .join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${firstNames}`);
        });
    } catch (err) {
        // Handle errors if the database file cannot be loaded
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
