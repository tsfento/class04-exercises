let previousDiv = null;
let exerciseDiv = document.querySelector('div.exercise-div');

function exDisplay(num) {
    if (previousDiv != null) {
        previousDiv.setAttribute('style', 'display: none');
    }
    const exerciseNum = document.querySelector(`div.${num}`);
    exerciseDiv.setAttribute('style', 'display: block');
    exerciseNum.setAttribute('style', 'display: block');
    previousDiv = exerciseNum;
}

// Exercise 1
function ex1Button() {
    const inputName = document.getElementById('exercise1Name');
    const modalText = document.querySelector('div.ex1-modal-body');
    const modal = new bootstrap.Modal(document.getElementById('exercise1Modal'));
    modalText.innerHTML = `<h3>Hello, ${inputName.value}!</h3>`;
    modal.show();
}

// Exercise 2
function ex2Button() {
    let ex2Num1 = document.getElementById('exercise2Num1').value;
    let ex2Num2 = document.getElementById('exercise2Num2').value;
    let ex2Result = document.getElementById('exercise2Result');

    ex2Result.innerText = `${ex2Num1} x ${ex2Num2} = ${ex2Num1 * ex2Num2}`;
}

// Exercise 3
function ex3Button() {
    let ex3Result = document.getElementById('exercise3Result');

    const person = {
        name: "Tyler",
        age: 42,
        gender: "Male",
    }

    person.name = document.getElementById('exercise3Name').value;
    person.age = document.getElementById('exercise3Age').value;
    person.gender = document.getElementById('exercise3Gender').value;

    ex3Result.textContent = `${person.name} is a ${person.gender.toLowerCase()} aged ${person.age}.`;
}

// Exercise 4
function ex4Button() {
    let ex4Result = document.getElementById('exercise4Result');

    const car = {
        make: "Honda",
        model: "Fit",
        year: 2020,
    }

    car.make = document.getElementById('exercise4Make').value;
    car.model = document.getElementById('exercise4Model').value;
    car.year = document.getElementById('exercise4Year').value;

    ex4Result.textContent = `The car is a ${car.year} ${car.make} ${car.model}.`;
}

// Exercise 5
function ex5Button() {
    let ex5String = document.getElementById('exercise5String').value;
    let ex5Result = document.getElementById('exercise5Result');
    let revString = ex5String.split('').reverse().join('');

    ex5Result.textContent = `${ex5String} reversed is ${revString}.`;
}

// Exercise 6
function ex6Button() {
    let ex6Rad = document.getElementById('exercise6Radius').value;
    let ex6Result = document.getElementById('exercise6Result');
    
    function calculateArea(radius) {
        return Math.PI * (radius * radius);
    }

    ex6Result.textContent = `The area of a circle with a radius of ${ex6Rad} is ${calculateArea(ex6Rad).toFixed(2)}.`;
}

// Exercise 7
function ex7Button() {
    let ex7Result = document.getElementById('exercise7Result');
    const now = new Date();
    let amOrPm = now.getHours() >= 12 ? 'PM' : 'AM';
    let stdTime = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();

    ex7Result.textContent = `It is currently ${stdTime.toString()}:${now.getMinutes().toString()} ${amOrPm} on ${(now.getMonth() + 1).toString()}/${now.getDate().toString()}/${now.getFullYear().toString()}.`;
}

// Exercise 8
function ex8Button() {
    let ex8Result = document.getElementById('exercise8Result');

    ex8Result.textContent = (Math.floor(Math.random() * 10) + 1).toFixed().toString();
}

// Exercise 10
function ex10Button() {
    let ex10Str = document.getElementById('exercise10String').value;
    let ex10Result = document.getElementById('exercise10Result');

    ex10Result.textContent = `You entered: ${ex10Str}.`;
}

// Exercise 11
function ex11Button() {
    let ex11Name = document.getElementById('exercise11Name').value;
    let ex11Age = document.getElementById('exercise11Age').value;
    let ex11Job = document.getElementById('exercise11Occupation').value;
    let ex11Result = document.getElementById('exercise11Result');

    const person = {
        name: ex11Name.toString(),
        age: ex11Age,
        occupation: ex11Job.toString().toLowerCase(),
    }

    ex11Result.textContent = `${person.name} is ${person.age} years old and is employed as a ${person.occupation}.`;
}

// Exercise 12
function ex12Button() {
    let ex12Key1 = document.getElementById('exercise12Key1').value;
    let ex12Key2 = document.getElementById('exercise12Key2').value;
    let ex12Key3 = document.getElementById('exercise12Key3').value;
    let ex12Key4 = document.getElementById('exercise12Key4').value;
    let ex12Val1 = document.getElementById('exercise12Value1').value;
    let ex12Val2 = document.getElementById('exercise12Value2').value;
    let ex12Val3 = document.getElementById('exercise12Value3').value;
    let ex12Val4 = document.getElementById('exercise12Value4').value;

    let ex12K1Result = document.getElementById('exercise12Key1Sorted');
    let ex12K2Result = document.getElementById('exercise12Key2Sorted');
    let ex12K3Result = document.getElementById('exercise12Key3Sorted');
    let ex12K4Result = document.getElementById('exercise12Key4Sorted');
    let ex12V1Result = document.getElementById('exercise12Value1Sorted');
    let ex12V2Result = document.getElementById('exercise12Value2Sorted');
    let ex12V3Result = document.getElementById('exercise12Value3Sorted');
    let ex12V4Result = document.getElementById('exercise12Value4Sorted');

    let objToSort = {};

    objToSort[ex12Key1.toString()] = ex12Val1.toString();
    objToSort[ex12Key2.toString()] = ex12Val2.toString();
    objToSort[ex12Key3.toString()] = ex12Val3.toString();
    objToSort[ex12Key4.toString()] = ex12Val4.toString();

    let keyArr = Object.keys(objToSort).sort();
    let valArr = [];

    for (let i = 0; i < keyArr.length; i++) {
        valArr.push(objToSort[keyArr[i].toString()]);
    }

    ex12K1Result.textContent = keyArr[0].toString();
    ex12K2Result.textContent = keyArr[1].toString();
    ex12K3Result.textContent = keyArr[2].toString();
    ex12K4Result.textContent = keyArr[3].toString();
    ex12V1Result.textContent = valArr[0].toString();
    ex12V2Result.textContent = valArr[1].toString();
    ex12V3Result.textContent = valArr[2].toString();
    ex12V4Result.textContent = valArr[3].toString();
}

// Exercise 13
function ex13Button() {
    let ex13Sentence = document.getElementById('exercise13Sentence').value;
    let ex13Result = document.getElementById('exercise13Result');
    let revSentence = ex13Sentence.split(' ').reverse().join(' ');

    ex13Result.textContent = `${revSentence}`;
}

// Exercise 14
function ex14Button() {
    let ex14Parens = document.getElementById('exercise14Parens').value;
    let ex14Result = document.getElementById('exercise14Result');

    const tempArr = [];
    const parens = '(){}[]';
    
    for (let i = 0; i < ex14Parens.length; i++) {
        tempArr.push(ex14Parens[i]);

        let oParen = tempArr[tempArr.length - 2];
        let cParen = tempArr[tempArr.length - 1];

        let checkParens = oParen + cParen;

        if(parens.includes(checkParens)) {
            tempArr.pop();
            tempArr.pop();
        }
    }

    if(tempArr.length === 0) {
        ex14Result.textContent = `${ex14Parens} is balanced.`;
    } else {
        ex14Result.textContent = `${ex14Parens} is not balanced`;
    }
}

// Exercise 15
function ex15Button() {
    let ex15Word1 = document.getElementById('exercise15Word1').value;
    let ex15Word2 = document.getElementById('exercise15Word2').value;
    let ex15Result = document.getElementById('exercise15Result');

    let anaCheckArr = [];

    if(ex15Word1.length == 0 || ex15Word2.length == 0) {
        ex15Result.innerText = 'Please enter two words.';
    } else if(ex15Word1.length != ex15Word2.length) {
        ex15Result.innerText = `${ex15Word1} is not an anagram of ${ex15Word2}.`;
    }

    for (let i = 0; i < ex15Word2.length; i++) {
        anaCheckArr.push(ex15Word1[i]);

        if(ex15Word2.includes(anaCheckArr[0])) {
            anaCheckArr.pop();
        }
    }

    if(anaCheckArr.length === 0 && ex15Word1.length !== 0 && ex15Word2.length !== 0) {
        ex15Result.innerText = `${ex15Word1} is an anagram of ${ex15Word2}.`;
    } else if(ex15Word1.length !== 0 && ex15Word2.length !== 0) {
        ex15Result.innerText = `${ex15Word1} is not an anagram of ${ex15Word2}.`;
    }
}

// Exercise 16
function ex16Button() {
    let ex16Result = document.getElementById('exercise16Result');
    let ex16FizzBuzzArr = [];
    let parsedArr = '';

    for (let i = 1; i <= 100; i++) {
        if(i > 1 && i % 3 === 0 && i % 5 === 0) {
            ex16FizzBuzzArr.push('FizzBuzz');
        } else if(i > 1 && i % 3 === 0) {
            ex16FizzBuzzArr.push('Fizz');
        } else if (i > 1 && i % 5 === 0) {
            ex16FizzBuzzArr.push('Buzz');
        } else {
            ex16FizzBuzzArr.push(i);
        }
    }

    for (let j = 0; j < ex16FizzBuzzArr.length; j++) {
        parsedArr += `${ex16FizzBuzzArr[j]} `;
    }

    ex16Result.textContent = parsedArr;
}

// Exercise 17
function ex17Button() {
    let ex17Word = document.getElementById('exercise17Word').value;
    let ex17Result = document.getElementById('exercise17Result');
    let checkStr1 = ex17Word.toLowerCase().split(' ').join('');
    
    punctuationArr = [];
    punctuation = `.,;:!?@#$%^&*()-+={}[]/<>'"`;

    for(let i = 0; i < checkStr1.length; i++) {
        punctuationArr.push(checkStr1[i]);

        if(punctuation.includes(punctuationArr[i])) {
            punctuationArr.pop();
        }
    }

    checkStr1 = punctuationArr.join('');
    let checkStr2 = checkStr1.split('').reverse().join('');

    //return checkStr1 === checkStr2;
    if(checkStr1 === checkStr2) {
        ex17Result.textContent = `${checkStr1} is a palindrome.`;
    } else {
        ex17Result.textContent = `${checkStr1} is not a palindrome.`;
    }
}

// Exercise 18
function ex18Button() {
    let ex18Sentence = document.getElementById('exercise18Sentence').value;
    let ex18Result = document.getElementById('exercise18Result');
    
    let splitSentence = ex18Sentence.split(" ");
    let joinSentence = [];

    for (let i = 0; i < splitSentence.length; i++) {
        joinSentence.push(splitSentence[i].split('').reverse().join(''));
    }

    //return joinSentence.join(' ');

    ex18Result.textContent = `${joinSentence.join(' ')}`;
}