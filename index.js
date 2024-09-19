// 1. Calculate Difference
function calculateDifference() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let difference = num1 - num2;
    document.getElementById("difference").textContent = difference;
}

// 2. Is Odd
function isOdd() {
    let num = parseInt(document.getElementById("oddInput").value);
    let result = (num % 2 !== 0) ? "True" : "False";
    document.getElementById("oddResult").textContent = result;
}

// 3. Find Minimum Number
function findMin() {
    let numbers = document.getElementById("minInput").value.split(',').map(Number);
    let min = Math.min(...numbers);
    document.getElementById("minResult").textContent = min;
}

// 4. Filter Even Numbers
function filterEvenNumbers() {
    let numbers = document.getElementById("evenInput").value.split(',').map(Number);
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    document.getElementById("evenResult").textContent = evenNumbers.join(', ');
}

// 5. Sort Array Descending
function sortArrayDescending() {
    let numbers = document.getElementById("sortInput").value.split(',').map(Number);
    let sorted = numbers.sort((a, b) => b - a);
    document.getElementById("sortResult").textContent = sorted.join(', ');
}

// 6. Lowercase First Letter
function lowercaseFirstLetter() {
    let str = document.getElementById("lowercaseInput").value;
    let result = str.charAt(0).toLowerCase() + str.slice(1);
    document.getElementById("lowercaseResult").textContent = result;
}

// 7. Count Vowels
function countVowels() {
    let str = document.getElementById("vowelInput").value;
    let vowels = str.match(/[aeiouAEIOU]/g);
    let count = vowels ? vowels.length : 0;
    document.getElementById("vowelResult").textContent = count;
}

// 8. Find Average
function findAverage() {
    let numbers = document.getElementById("averageInput").value.split(',').map(Number);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / numbers.length;
    document.getElementById("averageResult").textContent = avg;
}
