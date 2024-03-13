// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getToWork(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test the createEmployee function
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director
