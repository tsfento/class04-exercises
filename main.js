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
    const inputName1 = document.getElementById('exercise1Name').value;
    const modalText = document.querySelector('div.ex1-modal-body');
    const modal = new bootstrap.Modal(document.getElementById('exercise1Modal'));

    if(inputName1 == '') {
        modalText.innerHTML = '<h3>All right, then. Keep your secrets.</h3>';
    } else {
        modalText.innerHTML = `<h3>${inputName1}</h3>`;
    }

    modal.show();
}

// Exercise 2
function ex2Button() {
    let ex2Num1 = document.getElementById('exercise2Num1').value;
    let ex2Num2 = document.getElementById('exercise2Num2').value;
    let ex2Result = document.getElementById('exercise2Result');

    if(ex2Num1 == '' || ex2Num2 == '') {
        ex2Num1 = 0;
        ex2Num2 = 0;
    }

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

    if(person.name == '' || person.age == '' || person.gender == '') {
        ex3Result.textContent = 'Please fill all fields.';
    } else {
        ex3Result.textContent = `${person.name} is a ${person.gender.toLowerCase()} aged ${person.age}.`;
    }
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

    if(car.make == '' || car.model == '' || car.year == '') {
        ex4Result.textContent = 'Please fill all fields.';
    } else {
        ex4Result.textContent = `The car is a ${car.year} ${car.make} ${car.model}.`;
    }
}

// Exercise 5
function ex5Button() {
    let ex5String = document.getElementById('exercise5String').value;
    let ex5Result = document.getElementById('exercise5Result');

    if(ex5String == '') {
        ex5String = 'Blank';
    }

    let revString = ex5String.split('').reverse().join('');

    ex5Result.textContent = `${ex5String} reversed is ${revString}.`;
}

// Exercise 6
function ex6Button() {
    let ex6Rad = document.getElementById('exercise6Radius').value;
    let ex6Result = document.getElementById('exercise6Result');
    
    if(ex6Rad == '') {
        ex6Rad = 0;
    }

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
    let leadingZeroMin = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

    ex7Result.textContent = `It is currently ${stdTime}:${leadingZeroMin} ${amOrPm} on ${(now.getMonth() + 1)}/${now.getDate()}/${now.getFullYear()}.`;
}

// Exercise 8
function ex8Button() {
    let ex8Result = document.getElementById('exercise8Result');

    ex8Result.textContent = (Math.floor(Math.random() * 10) + 1).toFixed().toString();
}

// Exercise 9
function ex9Button() {
    let ex9Str = document.getElementById('exercise9String').value;
    let ex9Result = document.getElementById('exercise9Result');

    if(ex9Str == '') {
        ex9Result.textContent = `I'm gonna need some participation.`;
    } else {
        ex9Result.textContent = `You entered: ${ex9Str}.`;
    }
    
}

// Exercise 10
function ex10Button() {
    let ex10Name = document.getElementById('exercise10Name').value;
    let ex10Age = document.getElementById('exercise10Age').value;
    let ex10Job = document.getElementById('exercise10Occupation').value;
    let ex10Result = document.getElementById('exercise10Result');

    const person = {
        name: ex10Name.toString(),
        age: ex10Age,
        occupation: ex10Job.toString().toLowerCase(),
    }

    if(person.name == '' || person.age == '' || person.occupation == '') {
        ex10Result.textContent = 'Please fill all fields.';
    } else {
        ex10Result.textContent = `${person.name} is ${person.age} years old and is employed as a ${person.occupation}.`;
    }
}

// Exercise 11
function ex11Button() {
    let ex11Key1 = document.getElementById('exercise11Key1').value;
    let ex11Key2 = document.getElementById('exercise11Key2').value;
    let ex11Key3 = document.getElementById('exercise11Key3').value;
    let ex11Key4 = document.getElementById('exercise11Key4').value;
    let ex11Val1 = document.getElementById('exercise11Value1').value;
    let ex11Val2 = document.getElementById('exercise11Value2').value;
    let ex11Val3 = document.getElementById('exercise11Value3').value;
    let ex11Val4 = document.getElementById('exercise11Value4').value;

    let ex11K1Result = document.getElementById('exercise11Key1Sorted');
    let ex11K2Result = document.getElementById('exercise11Key2Sorted');
    let ex11K3Result = document.getElementById('exercise11Key3Sorted');
    let ex11K4Result = document.getElementById('exercise11Key4Sorted');
    let ex11V1Result = document.getElementById('exercise11Value1Sorted');
    let ex11V2Result = document.getElementById('exercise11Value2Sorted');
    let ex11V3Result = document.getElementById('exercise11Value3Sorted');
    let ex11V4Result = document.getElementById('exercise11Value4Sorted');

    let objToSort = {};

    objToSort[ex11Key1.toString()] = ex11Val1.toString();
    objToSort[ex11Key2.toString()] = ex11Val2.toString();
    objToSort[ex11Key3.toString()] = ex11Val3.toString();
    objToSort[ex11Key4.toString()] = ex11Val4.toString();

    let keyArr = Object.keys(objToSort).sort();
    let valArr = [];

    for (let i = 0; i < keyArr.length; i++) {
        valArr.push(objToSort[keyArr[i].toString()]);
    }

    ex11K1Result.textContent = keyArr[0].toString();
    ex11K2Result.textContent = keyArr[1].toString();
    ex11K3Result.textContent = keyArr[2].toString();
    ex11K4Result.textContent = keyArr[3].toString();
    ex11V1Result.textContent = valArr[0].toString();
    ex11V2Result.textContent = valArr[1].toString();
    ex11V3Result.textContent = valArr[2].toString();
    ex11V4Result.textContent = valArr[3].toString();
}

// Exercise 12
function ex12Button() {
    let ex12Sentence = document.getElementById('exercise12Sentence').value;
    let ex12Result = document.getElementById('exercise12Result');

    if(ex12Sentence == '') {
        ex12Sentence = `I'm gonna need some participation.`;
    }

    let revSentence = ex12Sentence.split(' ').reverse().join(' ');

    ex12Result.textContent = `${revSentence}`;
}

// Exercise 13
function ex13Button() {
    let ex13Parens = document.getElementById('exercise13Parens').value;
    let ex13Result = document.getElementById('exercise13Result');

    const tempArr = [];
    const parens = '(){}[]';
    
    for (let i = 0; i < ex13Parens.length; i++) {
        tempArr.push(ex13Parens[i]);

        let oParen = tempArr[tempArr.length - 2];
        let cParen = tempArr[tempArr.length - 1];

        let checkParens = oParen + cParen;

        if(parens.includes(checkParens)) {
            tempArr.pop();
            tempArr.pop();
        }
    }

    if(ex13Parens == '') {
        ex13Result.textContent = `Nothing is balanced. As in all things. `;
    } else if(tempArr.length === 0 && ex13Parens != '') {
        ex13Result.textContent = `${ex13Parens} is balanced.`;
    } else{
        ex13Result.textContent = `${ex13Parens} is not balanced`;
    }
}

// Exercise 14
function ex14Button() {
    let ex14Word1 = document.getElementById('exercise14Word1').value;
    let ex14Word2 = document.getElementById('exercise14Word2').value;
    let ex14Result = document.getElementById('exercise14Result');

    let anaCheckArr = [];

    if(ex14Word1.length == 0 || ex14Word2.length == 0) {
        ex14Result.innerText = 'Please enter two words.';
    } else if(ex14Word1.length != ex14Word2.length) {
        ex14Result.innerText = `${ex14Word1} is not an anagram of ${ex14Word2}.`;
    }

    for (let i = 0; i < ex14Word2.length; i++) {
        anaCheckArr.push(ex14Word1[i]);

        if(ex14Word2.includes(anaCheckArr[0])) {
            anaCheckArr.pop();
        }
    }

    if(anaCheckArr.length === 0 && ex14Word1.length !== 0 && ex14Word2.length !== 0) {
        ex14Result.innerText = `${ex14Word1} is an anagram of ${ex14Word2}.`;
    } else if(ex14Word1.length !== 0 && ex14Word2.length !== 0) {
        ex14Result.innerText = `${ex14Word1} is not an anagram of ${ex14Word2}.`;
    }
}

// Exercise 15
function ex15Button() {
    let ex15Result = document.getElementById('exercise15Result');
    let ex15FizzBuzzArr = [];
    let parsedArr = '';

    for (let i = 1; i <= 100; i++) {
        if(i > 1 && i % 3 === 0 && i % 5 === 0) {
            ex15FizzBuzzArr.push('FizzBuzz');
        } else if(i > 1 && i % 3 === 0) {
            ex15FizzBuzzArr.push('Fizz');
        } else if (i > 1 && i % 5 === 0) {
            ex15FizzBuzzArr.push('Buzz');
        } else {
            ex15FizzBuzzArr.push(i);
        }
    }

    for (let j = 0; j < ex15FizzBuzzArr.length; j++) {
        parsedArr += `${ex15FizzBuzzArr[j]} `;
    }

    ex15Result.textContent = parsedArr;
}

// Exercise 16
function ex16Button() {
    let ex16Word = document.getElementById('exercise16Word').value;
    let ex16Result = document.getElementById('exercise16Result');
    let checkStr1 = ex16Word.toLowerCase().split(' ').join('');
    
    punctuationArr = [];
    punctuation = `. , ; : ! ? @ # $ % ^ & * ( ) - + = { } [ ] / < > ' "`;

    let prevI = 0;

    for(let i = 0; i < checkStr1.length; i++) {
        punctuationArr.push(checkStr1[i]);

        if(punctuation.includes(punctuationArr[i - prevI])) {
            punctuationArr.pop();
            prevI++;
        }
    }

    checkStr1 = punctuationArr.join('');
    let checkStr2 = checkStr1.split('').reverse().join('');

    if(ex16Word == '') {
        ex16Result.textContent = `Please enter a word.`;
    } else if(checkStr1 === checkStr2) {
        ex16Result.textContent = `${checkStr1} is a palindrome.`;
    } else {
        ex16Result.textContent = `${checkStr1} is not a palindrome.`;
    }
}

// Exercise 17
function ex17Button() {
    let ex17Sentence = document.getElementById('exercise17Sentence').value;
    let ex17Result = document.getElementById('exercise17Result');
    
    if(ex17Sentence == '') {
        ex17Sentence = `I'm gonna need some cooperation.`;
    }

    let splitSentence = ex17Sentence.split(" ");
    let joinSentence = [];

    for (let i = 0; i < splitSentence.length; i++) {
        joinSentence.push(splitSentence[i].split('').reverse().join(''));
    }

    ex17Result.textContent = `${joinSentence.join(' ')}`;
}