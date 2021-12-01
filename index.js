function hello() {
  console.log("hello");
}

const hello2 = function () {
  console.log("hello2");
};

hello2();

const hello3 = () => {
  console.log("hello3");
};

const hello4 = () => {
  return "hello4";
};
const hello5 = (str) => {
  console.log(str);
  return "hello5";
};

console.log(hello5());

const sum = (n1, n2) => {
  return n1 + n2;
};
const _sum = (n1, n2) => n1 + n2;

const sumResult = sum(1, 2);
const _sumResult = () => sum(2, 3);

console.log(sumResult);
console.log(_sumResult);

const greet = (string, customFunction) => {
  const random = Math.floor(Math.random() * 5);
  const enthusiasm = string + "!";

  customFunction(enthusiasm, random); // sayHi(enthusiasm, random); sayBye(enthusiasm, random)
};

const sayHi = (str, num) => {
  console.log("Hello " + str + " " + num);
};

const sayBye = (str, num) => {
  console.log("Byeeeee " + str + " " + num);
};

const anythingElse = (str) => {
  console.log(str);
};

greet("Roberta", sayHi);
greet("Davide", sayHi);
greet("May", sayHi);
greet("Rafael", anythingElse);

const animals = [
  "cat",
  "dog",
  "mouse",
  "rabbit",
  "horse",
  "spider",
  "snake",
  "goldfish",
];

const getAnimal = (arr, callback) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const selectedAnimal = arr[randomIndex]; // cat, dog, mouse

  callback(selectedAnimal); //displayAnimal(selectedAnimal); getAnimalName(selectedAnimal);
};

const displayAnimal = (animalType, animalName) => {
  console.log("We found a " + animalType + " and its name is " + animalName);
};

const getAnimalName = (str) => {
  console.log("I looked over and saw a " + str);
};

getAnimal(animals, function (str) {
  displayAnimal(str, "Roger");
});
getAnimal(animals, function (str) {
  displayAnimal(str, "Rajib");
});
getAnimal(animals, function (str) {
  displayAnimal(str, "Sebastian");
});
// getAnimal(animals, getAnimalName);
// getAnimal(animals, function(str) {console.log("I'm yet another " + str)});

// div.addEventListener("click", customFunction);

// function then(callback) {
//     // awaiting fetch to finish...callback
//     const data = ...

//     callback(data)
// }
// .then((data) => {
//     // DOM MANIPULATION
//     div.innerHTML = data.id
// })

// FOREACH

// definition example
const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    callback(element);
  }
};

// forEach(animals, (elem) => console.log(elem));

// usage
animals.forEach((elem) => console.log("foreach", elem));

// MAP

// example definition
const arrOfNum = [1, 2, 3, 4, 66, 89, 12, 2000];

const map = (arr, callback) => {
  const mapped = [];

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    mapped.push(callback(number));
  }

  return mapped;
};

// const doubled = map(arrOfNum, (num) => num * 2);

// usage
const doubled = arrOfNum.map((num) => num * 2);

console.log(doubled);

const newElem = arrOfNum.map((num) => `<li>number is: ${num}</li>`);
console.log(newElem.join(""));

// FILTER

// example definition
const filter = (arr, callback) => {
  const filteredElements = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (callback(num)) {
      filteredElements.push(num);
    }
  }

  return filteredElements;
};

const arrObjPeople = [
  { name: "Stefano", age: 32, kudos: 10 },
  { name: "Davide", age: 25, kudos: 100 },
  { name: "Rajib", age: 15, kudos: 40 },
  { name: "Anusha", age: 24, kudos: 9000 },
];

// console.log(filter(arrOfNum, (num) => num > 1))
const filtered = arrOfNum.filter((num) => num > 1);
console.log(filtered);

const filteredPeopleByKudos = arrObjPeople.filter(
  (person) => person.kudos > 99
);
console.log(filteredPeopleByKudos);

// find
console.log(arrOfNum.find((num) => num > 2));

const findPeopleByKudos = arrObjPeople.find((person) => person.kudos > 99);
console.log(findPeopleByKudos);

//some
console.log(arrOfNum.some((num) => num > 3));
console.log(arrObjPeople.some((person) => person.age < 20));

// every
console.log(arrOfNum.every((num) => num > 0));

// findIndex
console.log(arrObjPeople.findIndex((person) => person.age < 20));

// includes
console.log(arrOfNum.includes(5));

const names = ["Stefano", "Davide", "Rajib", "Anusha"];

// sort
console.log(names.sort().reverse());
console.log(names.sort((a, b) => (a > b ? 1 : -1)));

// reducer
// [1, 2, 3, 4, 66, 89, 12, 2000];
const reduced = arrOfNum.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATOR", accumulator);
  console.log("CURRENT", currentValue);
  return accumulator + currentValue;
});

console.log(reduced);

const reducedAgesSum = arrObjPeople.reduce((acc, curr) => acc + curr.age, 0);
const reducedArr = arrObjPeople.reduce((acc, curr) => acc.concat(curr.age), []);

console.log(reducedAgesSum);
console.log(reducedArr);
