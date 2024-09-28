//Let's create a program that when invoked will take in the mark of a student, check the marks, and assign them a grade
function studentGrade(studentMark) {
    
    // let's confirm that the input is a number and between 0 to 100
    if (studentMark < 0 || studentMark > 100 || isNaN(studentMark)) {
        return "Please enter a valid mark between 0 and 100.";
    } else {
        // Let's assign the student a grade based on his marks
        if (studentMark > 79) {
            return "A";
        } else if (studentMark >= 60 && studentMark <= 79) {
            return "B";
        } else if (studentMark >= 49 && studentMark < 60) { // there seems to be an overlap between C and D for 49 marks
            return "C";
        } else if (studentMark >= 40 && studentMark <= 49) {
            return "D";
        } else {
            return "E";
        }
    }
}

// Let's take a use case
console.log(studentGrade(90)); 