// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number; 
    [key: string]: any; // allows any other attributes
}

// Extend the Teacher interface with Directors
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

// console.log(director1);

// Define the function interface
// Function type alias
export interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function declaration with destructuring
export function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
// console.log(printTeacher("John", "Doe")); // Output: John. Doe

// Interface describing constructor
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing class methods
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
export class StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.lastName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
