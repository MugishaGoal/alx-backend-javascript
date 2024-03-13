// Define the interfaces MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: string; // Unique identifier
}

interface MinorCredits {
  credits: number;
  brand: string; // Unique identifier
}

// Define the function sumMajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits" // Unique identifier for MajorCredits
  };
}

// Define the function sumMinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits" // Unique identifier for MinorCredits
  };
}

// Example usage
const subject1: MajorCredits = { credits: 3, brand: "Mathematics" };
const subject2: MajorCredits = { credits: 4, brand: "Physics" };

const majorResult = sumMajorCredits(subject1, subject2);
console.log("Major Credits:", majorResult);

const subject3: MinorCredits = { credits: 2, brand: "History" };
const subject4: MinorCredits = { credits: 1, brand: "English" };

const minorResult = sumMinorCredits(subject3, subject4);
console.log("Minor Credits:", minorResult);
