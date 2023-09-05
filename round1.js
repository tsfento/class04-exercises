// Exercise 1
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// greet(prompt("Enter your name:"));
greet("Tyler");

// Exercise 2
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 2));
// alert(multiply(3, 3));

// Exercise 3
const person = {
    name: "Tyler",
    age: 42,
    gender: "Male",
}

console.log(person);

// Exercise 4
const car = {
    make: "Honda",
    model: "Fit",
    year: 2020,
}

console.log(car);

// Exercise 5
function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

console.log("Hello reversed is " + reverseString("Hello") + ".");

// Exercise 6
function calculateArea(radius) {
    return Math.PI * (radius * radius);
}

console.log(calculateArea(5).toFixed(2));

// Exercise 7
const now = new Date();

// console.log("It is currently " + now.getHours().toString() + ":" + now.getMinutes().toString() + " on " + (now.getMonth() + 1).toString() + "/" + now.getDate().toString() + "/" + now.getFullYear().toString() + ".");

console.log(`It is currently ${now.getHours().toString()}:${now.getMinutes().toString()} on ${(now.getMonth() + 1).toString()}/${now.getDate().toString()}/${now.getFullYear().toString()}.`);

// Exercise 8
console.log((Math.floor(Math.random() * 10) + 1).toFixed());

// Exercise 10
function insertString(stringToInsert) {
    console.log(`You entered: ${stringToInsert}.`);
}

insertString("potatoes");

// Exercise 11
function btnFunc() {
    const inputName = prompt("Enter your name:", "Tyler");
    const inputAge = prompt("Enter your age:", 42);
    const inputJob = prompt("Enter your occuptation:", "Misanthrope");

    const outObj = {
        name: inputName.toString(),
        age: inputAge.toString(),
        occupation: inputJob.toString().toLowerCase(),
    }

    logBtnObj(outObj);
}

function logBtnObj(inputObject) {
    console.log(`${inputObject.name} is ${inputObject.age} years old and is employed as a ${inputObject.occupation}.`);
}

// Exercise 12
const keysAndValues1 = {
    first: "First",
    second: "Second",
    third: "Third",
    fourth: "Fourth",
}

const keysAndValues2 = {
    d: "A",
    c: "B",
    b: "C",
    a: "D",
}

function splitAndReorder(inObj) {
    const keyArr = Object.keys(inObj).sort();
    const valueArr = [];

    // console.log(keyArr);
    // console.log(valueArr);
    // keyArr.sort();

    for (i = 0; i < keyArr.length; i++) {
        valueArr.push(inObj[keyArr[i].toString()]);
    }

    console.log(keyArr);
    console.log(valueArr);
}

splitAndReorder(keysAndValues1);
splitAndReorder(keysAndValues2);

// Exercise 13
function reverseSentence(str1) {
    return str1.split(" ").reverse().join(" ");
}

console.log(reverseSentence('reverse me baby'));

// Exercsie 14
function isBalanced(str2) {
    const tempArr = [];
    const parentheses = '() {} []';
    
    for (let i = 0; i < str2.length; i++) {
        tempArr.push(str2[i]);

        let oParen = tempArr[tempArr.length - 2];
        let cParen = tempArr[tempArr.length - 1];

        let checkParens = oParen + cParen;

        if(parentheses.includes(checkParens)) {
            tempArr.pop();
            tempArr.pop();
        }
    }

    return tempArr.length === 0;
}

console.log('isBalanced = ' + isBalanced('()'));
console.log('isBalanced = ' + isBalanced('()[]{}'));
console.log('isBalanced = ' + isBalanced('(]'));
console.log('isBalanced = ' + isBalanced('([)]'));
console.log('isBalanced = ' + isBalanced('{[]}'));

// Exercise 15
function checkAnagram(word1, word2) {
    let checkArr = [];

    if(word1.length != word2.length) {
        return false;
    }

    for (let i = 0; i < word2.length; i++) {
        checkArr.push(word1[i]);

        if(word2.includes(checkArr[0])) {
            checkArr.pop();
        }
    }

    return checkArr.length === 0;
}

console.log('checkAnagram = ' + checkAnagram('pork', 'beans'));
console.log('checkAnagram = ' + checkAnagram('care', 'race'));
console.log('checkAnagram = ' + checkAnagram('four', 'five'));
console.log('checkAnagram = ' + checkAnagram('slate', 'steal'));

// Exercise 16
function fizzBuzz() {
    let fizzBuzzArr = [];

    for (let i = 1; i <= 100; i++) {
        if(i > 1 && i % 3 === 0) {
            fizzBuzzArr.push('fizz');
        } else if (i > 1 && i % 5 === 0) {
            fizzBuzzArr.push('buzz');
        } else {
            fizzBuzzArr.push(i);
        }
    }

    console.log(fizzBuzzArr);
}

fizzBuzz();

// Exercise 17
function checkPalindrome(word3) {
    let checkStr1 = word3.toLowerCase().split(' ').join('');
    
    punctuationArr = [];
    punctuation = '.,;:!?';

    for(let i = 0; i < checkStr1.length; i++) {
        punctuationArr.push(checkStr1[i]);

        if(punctuation.includes(punctuationArr[i])) {
            punctuationArr.pop();
        }
    }

    checkStr1 = punctuationArr.join('');
    let checkStr2 = checkStr1.split('').reverse().join('');

    return checkStr1 === checkStr2;
}

console.log('checkPalindrome = ' + (checkPalindrome('b o a . t')));
console.log('checkPalindrome = ' + (checkPalindrome('June')));
console.log('checkPalindrome = ' + (checkPalindrome('RACECAR')));
console.log('checkPalindrome = ' + (checkPalindrome('racecar')));

// Exercise 18
function reverseSentence(sentence1) {
    let splitSentence = sentence1.split(" ");
    let joinSentence = [];

    for (let i = 0; i < splitSentence.length; i++) {
        joinSentence.push(splitSentence[i].split('').reverse().join(''));
    }

    return joinSentence.join(' ');
}

console.log(reverseSentence('reverse me baby'));