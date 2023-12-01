// On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.


// find the first and last digit from each line, make a 2 digit number, sum them
// this time the number can be written out from one to nine

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

  const wordToNumberMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };

const wordNumberRegex = /one|two|three|four|five|six|seven|eight|nine/g; 

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

function getFirstNumber(lineInWords) {
  const firstNumberWord = lineInWords.match(wordNumberRegex)[0];
  return wordToNumberMap[firstNumberWord];
}

function getLastNumber(lineInWords) {
  for(let i = lineInWords.length - 1; i >= 0; i--){
    const chunk = lineInWords.substr(i, lineInWords.length);
    const check = chunk.match(wordNumberRegex)

    if(check && check.length > 0) {
      return wordToNumberMap[check[0]]
    }
  }
}

function main(input){
  let sum = 0;

  input.forEach((line) => {
    const convertedToWords = replaceNumbersWithWords(line);
    const firstNumber = getFirstNumber(convertedToWords);
    const lastNumber = getLastNumber(convertedToWords);

    sum += (firstNumber * 10);
    sum += lastNumber;
  })

  return sum;

}

console.log(main(testInput) === 281 ? 'Test passes! ✅' : 'Test Failed ❌')
console.log(`Output of real data: ${main(realInput)}`)

