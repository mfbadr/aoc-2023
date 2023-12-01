// On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.


// find the first and last digit from each line, make a 2 digit number, sum them



//This solution is failing on edge cases such as "oneight" because of regex weirdness. Oh well.


const realInput = require('./input').split(/\n/);
const testInput = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen'
];

const wordNumberRegex = /one|two|three|four|five|six|seven|eight|nine/g; 
// console.log(input);

function replaceNumbersWithWords(stringWithNumbers) {
 return     stringWithNumbers.replace(/\d/g, (match) => {
      switch(match) {
        case '1':
          return 'one';
        case '2':
          return 'two';
        case '3':
          return 'three';
        case '4':
          return 'four';
        case '5':
          return 'five';
        case '6':
          return 'six';
        case '7':
          return 'seven';
        case '8':
          return 'eight';
        case '9':
          return 'nine';
        default:
          return match;
      }
    });  
}

function convertToArrayOfNumbers(input) {
  const out = [];
  const inputInWords = replaceNumbersWithWords(input);
  const arrayOfWords = inputInWords.match(wordNumberRegex);


  arrayOfWords.forEach((word) => {
    switch(word) {
        case 'one':
          out.push(1);
        case 'two':
          out.push(2);
        case 'three':
          out.push(3);
        case 'four':
          out.push(4);
        case 'five':
          out.push(5);
        case 'six':
          out.push(6);
        case 'seven':
          out.push(7);
        case 'eight':
          out.push(8);
        case 'nine':
          out.push(9);
      } 
  })
  return out

}




function main(input){
  let sum = 0

  const inputInNumbers = input.map((line) => {
    return line.replace(wordNumberRegex, (match) => {
      switch(match) {
        case 'one':
          return '1';
        case 'two':
          return '2';
        case 'three':
          return '3';
        case 'four':
          return '4';
        case 'five':
          return '5';
        case 'six':
          return '6';
        case 'seven':
          return '7';
        case 'eight':
          return '8';
        case 'nine':
          return '9';
        default:
          return match;
      }
    });
  });

  const numerals = inputInNumbers.map((line) => {
    return line.match(/\d/g)
  });

  numerals.forEach((nums) => {
    if(nums.length === 0) {
      return;
    }
    const num = Number(nums[0] + nums[nums.length - 1]) || 0;
    sum += num;
  });

  return sum;

}


console.log(main(testInput) === 281 ? 'Test passes! ✅' : 'Test Failed ❌')
// console.log(main(testInput) === 281 ? 'Test passes! ✅' : 'Test Failed ❌')
console.log(`Output of real data: ${main(realInput)}`)
