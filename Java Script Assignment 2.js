let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let marks = prompt("Enter your marks (0-100):");


age = parseInt(age);
marks = parseInt(marks);

let grade = "";

if(marks >= 90 && marks < 101) {
    grade = "A+";
} else if(marks >= 80 && marks < 90) {
    grade = "A";
} else if(marks >= 70 && marks < 80) {
    grade = "B+";
} else if(marks >= 60 && marks < 70) {
    grade = "B";
} else if(marks >= 50 && marks < 60) {
    grade = "C";
} else if(marks >= 40 && marks < 50) {
    grade = "D";
} else if(marks >= 33) {
    grade = "E"
}
 else {
    grade = "Fail";
}


alert(
    "Student Details:\n" +
    "Name: " + name + "\n" + 
    "Age: " + age + "\n" +
    "Marks: " + marks + "\n" + 
    "Grade: " + grade
);
