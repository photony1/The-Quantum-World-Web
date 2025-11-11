//function to solve  a quadratic equation ax^2+bx+c=0
//read values from html input fields and display real or complex roots in element with id="results"
function solveQuadratic() {
    //get values from input fields
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    //calculate discriminant
    const discriminant = b * b - 4 * a * c;

    //display results
    const resultsDiv = document.getElementById('results');
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultsDiv.innerHTML = `Two real roots: ${root1} and ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        resultsDiv.innerHTML = `One real root: ${root}`;
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        resultsDiv.innerHTML = `Complex roots: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`;
    }
}
<script
//function to calculate  a letter grade from a numeric score(0-100)
 //validate that score is between 0 and 100
 //handle edge cases correctly (e.g., 90 is an A, 89.9 is a B)
 //display letter grade in an HTML element with id="gradeResult"
function calculateGrade() {
    const score = parseFloat(document.getElementById('score').value);
    const gradeResultDiv = document.getElementById('gradeResult');

    if (isNaN(score) || score < 0 || score > 100) {
        gradeResultDiv.innerHTML = 'Please enter a valid score between 0 and 100.';
        return;
    }

    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    gradeResultDiv.innerHTML = `Your grade is: ${grade}`;
}   