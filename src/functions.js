/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// codewars link 1
const evenOrOdd = (value) => {
  if (value % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
};
console.log(evenOrOdd(1));
console.log(evenOrOdd(2));

// codewars link 3
const getAge = (inputString) => parseInt(inputString, 10);
const inputString = '1 год';
const age = getAge(inputString);
console.log(age);
// codewars link 4
const reverseList = (list) => list.reverse();
const A = [1, 2, 3, 4];
const B = [9, 2, 0, 7];
const reversedA = reverseList(A);
const reversedB = reverseList(B);
console.log(reversedA);
console.log(reversedB);
// codewars link 5
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - 2 * sonYearsOld);
console.log(twiceAsOld(30, 5));
