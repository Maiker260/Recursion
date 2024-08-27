    // Iterative Method
function fibs(n) {
    let num1 = 1;
    let num2 = 1;

    for (let i = 3; i <= n; i++) {
        let total = num1 + num2;
        num1 = num2;
        num2 = total;
    }
    return num2;
}

console.log('Iterative: ' + fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]


    // Recursive Method
        // Do not use higher numbers to avoid affecting performance
function fibsRec(n) {
    return n <= 1 ? n : fibsRec(n - 1) + fibsRec(n - 2)
}

console.log('Recursive: ' + fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]