//Array Usecases For Entire Exercise
let toons = ['Family Guy', 'South Park', 'Rick & Morty', 'Invincible'];
let numbers = [1, 3, 10, 33, 100, 333];
let jocks = [
    { name: "Bron", sport: "Basketball", bestYear: 2007 },
    { name: "OBJ", sport: "Football", bestYear: 2015 },
    { name: "Tyson", sport: "Boxing", bestYear: 1986 },
]
let jocksFullNames = [
    { first: 'LeBron', last: 'James' },
    { first: 'Odell', last: 'Beckham Jr' },
    { first: 'Mike', last: 'Tyson' }
];
let peeps = [
    { name: 'Deidre', age: 26, city: 'Brooklyn' },
    { name: 'Tasharah', gender: 'Female' },
    { name: 'Malik', gender: 'Male' },
    { name: 'Zoe', age: 25, city: 'Trenton' }
];

//forEach- doubleValues
function doubleValues(array) {
    //Translates To What Will Show In The Console.
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
    //Translates To What Will Show In The Console.
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
    //Translates To What Will Show In The Console.
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
    //Translates To What Will Show In The Console.
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
console.log(resultString); // Console: {a: 5, e: 6, o: 1, i: 1}

//map- doubleValuesWithMap
function doubleValuesWithMap(x) {
    return x * 2;
}
let doubleNum = numbers.map(doubleValuesWithMap)
console.log(doubleNum); // Console: (6) [2, 6, 20, 66, 200, 666]

//map- valTimesIndex
function valTimesIndex(x) {
    return x * 20;
}
let multiplyNum = numbers.map(valTimesIndex)
console.log(multiplyNum); // Console: (6) [20, 60, 200, 660, 2000, 6660]

//map- extractKey
function extractKey(arrObjects, key) {
    // Uses the map method to create a new array with values of the specified key
    let extractedValues = arrObjects.map(function (obj) {
        return obj[key];
    });
    return extractedValues;
}
let sports = extractKey(jocks, 'sport');
console.log(sports); // Console: (3) ['Basketball', 'Football', 'Boxing']

//map- extractFullName
function extractFullName(arrayOfObjects) {
    // Use the map method to create a new array with concatenated full names
    let fullNames = arrayOfObjects.map(function (obj) {
        return `${obj['first']} ${obj['last']}`
    });
    return fullNames;
}
let fullName = extractFullName(jocksFullNames);
console.log(fullName); // Console: (3) ['LeBron James', 'Odell Beckham Jr', 'Mike Tyson']

//filter- filterByValue
function filterByValue(arrayOfObj, key) {
    // Uses the filter method to create a new array with objects containing the specified key
    let filteredObjects = arrayOfObj.filter(function (obj) {
        return key in obj;
    });
    return filteredObjects;
}
let outcome = filterByValue(peeps, 'age');
console.log(outcome);

//filter- find
function find(array, value) {
    // Uses the find method to search for the first element with the specified value
    return array.find(function (element) {
        return element === value;
    });
}
console.log(find(toons, 'Family Guy')); // Console: Family Guy
console.log(find(toons, 'looney Toons')); // Console: undefined

//filter- findInObj
function findInObj(arrOfObj, key) {
    // Uses the filter method to create a new array with objects containing the specified key
    let itemsInObj = arrOfObj.filter(function (obj) {
        return key in obj;
    });
    return itemsInObj;
}
let endResult = findInObj(peeps, 'gender');
console.log(endResult);

//filter- removeVowels
function removeVowels(string) {
    // Uses the filter method to create a new array with non-vowel characters
    let filteredArray = Array.from(string.toLowerCase()).filter(function (char) {
        return !['a', 'e', 'i', 'o', 'u', 'y'].includes(char);
    });
    // Uses the join method to concatenate the characters into a string
    return filteredArray.join('');
}
let filterResultString = removeVowels(fruit);
console.log(filterResultString); // Console: ppl, grps, rngs, pnppl, strwbrr

//filter- doubleOddNumbers
function doubleOddNumbers(array) {
    // Uses the map method to double all numbers
    // Uses the filter method to select only the odd numbers
    return array.map(function (numb) {
        return numb * 2;
    }).filter(function (numb) {
        return numb % 2 !== 0; // Filter only odd numbers
    });
}
let numbersResult = doubleOddNumbers(numbers);
console.log(numbersResult); // Console: []