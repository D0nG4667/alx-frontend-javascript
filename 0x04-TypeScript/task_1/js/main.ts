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
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the function
export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
// console.log(printTeacher("John", "Doe")); // Output: J. Doe

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
export class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
