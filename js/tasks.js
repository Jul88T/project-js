/*function getLastElementMeta(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];

  return [lastIndex, lastElement];
}
console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
console.log(getLastElementMeta(['apple', 'peach', 'pear']));
console.log(getLastElementMeta(['apple', 'peach']));
console.log(getLastElementMeta(['apple']));

/*function getLastElementMeta(array) {
  const lastIndex = array.length - 1; // Індекс останнього елементу
  const lastElement = array[lastIndex]; // Останній елемент масиву

  return [lastIndex, lastElement];
}
console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana'])); // [3, "banana"]
console.log(getLastElementMeta(['apple', 'peach', 'pear'])); // [2, "pear"]
console.log(getLastElementMeta(['apple', 'peach'])); // [1, "peach"]
console.log(getLastElementMeta(['apple'])); // [0, "apple"]


function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}

/*function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}
console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); // ["Earth", "Venus"]
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); // ["apple", "banana"]

/*const array = [false];
const result = array ? 'A' : 'B';

// =============================

const add = function () {
  console.log(arguments);
  let total = 0;

  for (const arg of arguments) {
    //   total = total + arg;
    total += arg;
  }
  return total;
};
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));*/

/*const calculateAverage = function () {
  console.log(arguments);

  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }
  return total / arguments.length;
};
console.log(calculateAverage(1, 2, 3, 4));
console.log(calculateAverage(14, 8, 2));
console.log(calculateAverage(27, 43, 2, 8, 36));*/

/*const fn1 = function () {
  console.log('fn1 excution');
};

const fn2 = function () {
  console.log('fn2 excution');
};

const fn3 = function () {
  console.log('fn3 excution');
};

fn1();
fn2();
fn3();*/

/*const getRectArea = function (demensions) {
  const sidesArr = demensions.split(' ');
  console.log(demensions);
  console.log(sidesArr);

  return Number(sidesArr[0]) * Number(sidesArr[1]);
};

console.log(getRectArea('8 11')); //88
console.log(getRectArea('18 11')); //198
console.log(getRectArea('8 21')); //168*/

// const checkCaseOfLetter = function (letter) {
//   return letter.toLowerCase() === letter ? 'Lower case' : 'upper case';
// };
// console.log(checkCaseOfLetter('a'));
// console.log(checkCaseOfLetter('A'));

/*const changeCaseOfLetter = function (str) {
  console.log(str);
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      //   result = result + str[i].toUpperCase();
      result = result += str[i].toUpperCase();
    } else {
      // result = result + str[i].toLowerCase();
      result = result += str[i].toLowerCase();
    }
  }
  return result;
};
console.log(changeCaseOfLetter('AbCdE'));
console.log(changeCaseOfLetter('abc'));
console.log(changeCaseOfLetter('CBA'));*/

const logItems = function (items) {
  console.log(items);

  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍕', '🍔', '🍟', '🌭', '🍿']);
