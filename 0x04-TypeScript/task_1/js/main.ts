// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attribute
}

// Define the createTeacher function
function createTeacher(firstName: string, lastName: string, location: string, args: Partial<Teacher>): Teacher {
  const teacher: Teacher = {
    firstName,
    lastName,
    fullTimeEmployee: true, // default value for fullTimeEmployee
    location,
    ...args, // allow additional attributes
  };
  return teacher;
}

// Example usage
const teacher3: Teacher = createTeacher('John', 'Doe', 'London', { contract: false });
console.log(teacher3);

// Extend the Teacher interface to create the Director interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
