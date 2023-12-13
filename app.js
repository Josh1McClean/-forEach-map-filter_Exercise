//Array Usecases For Entire Exercise
let toons = ['Family Guy', 'South Park', 'Rick & Morty', 'Invincible'];
let numbers = [1, 3, 10, 33, 100, 333];
let jocks = [
    { name: "Bron", sport: "Basketball", bestYear: 2007 },
    { name: "OBJ", sport: "Football", bestYear: 2015 },
    { name: "Tyson", sport: "Boxing", bestYear: 1986 },
]

//forEach- doubleValues
function doubleValues(array) {
    let doubledArray = [];

    array.forEach(function (value) {
        doubledArray.push(value * 2);
    });
    return doubledArray;
}
let doubledArray = doubleValues(numbers);
console.log(doubledArray); // Console: (6) [2, 6, 20, 60, 200, 600]

//forEach- onlyEvenValues
function onlyEvenValues(arr) {
    let evenValuesArray = [];

    arr.forEach(function (value) {
        if (value % 2 === 0) {
            evenValuesArray.push(value);
        }
    });
    return evenValuesArray;
}
let evenValuesArray = onlyEvenValues(numbers);
console.log(evenValuesArray); // Console: (2) [10, 100]

//forEach- showFirstAndLast
function showFirstAndLast(arrayString) {
    let resultArray = [];

    arrayString.forEach(function (string) {
        if (string.length >= 2) {
            // Check if the string has at least two characters
            resultArray.push(string[0] + string[string.length - 1]);
        } else {
            // If the string has only one character, add it twice
            resultArray.push(string[0] + string[0]);
        }
    });
    return resultArray;
}
let result = showFirstAndLast(toons);
console.log(result); // Console: (4) ['Fy', 'Sk', 'Ry', 'Ie']

//forEach - addKeyAndValue
function addKeyAndValue(arrayObjects, key, value) {
    arrayObjects.forEach(function (object) {
        object[key] = value;
    });
    return arrayObjects;
}
let jocksObject = addKeyAndValue(jocks, 'Reward', 'All-Star/Pro Bowl/Champion');
console.log(jocksObject);

//forEach - vowelCount
function vowelCount(string) {
    let countObject = {};
    string = string.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // Iterate over each character in the string
    Array.from(string).forEach(function (character) {
        // Check if the character is a vowel
        if (vowels.includes(character)) {
            // If the vowel is already a key in the counts object, increment its count
            // Otherwise, initialize the count to 1
            countObject[character] = countObject[character] ? countObject[character] + 1 : 1;
        }
    });
    return countObject;
}
let fruit = "Apple, Grapes, Oranges, Pineapple, Strawberry";
let resultString = vowelCount(fruit);
console.log(resultString);

