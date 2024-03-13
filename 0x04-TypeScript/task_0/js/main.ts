// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render the table
function renderTable(): void {
    // Get the table element
    const table = document.getElementById("studentsTable");

    // Loop through the studentsList array
    studentsList.forEach((student) => {
        // Create a new row
        const row = document.createElement("tr");

        // Create table data for first name
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;

        // Create table data for location
        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;

        // Append cells to the row
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        // Append the row to the table
        if (table) {
            table.appendChild(row);
        }
    });
}

// Call the renderTable function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", renderTable);
