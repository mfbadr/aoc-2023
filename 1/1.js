// On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.


// find the first and last digit from each line, make a 2 digit number, sum them

const realInput = require('./input').split(/\n/);
const testInput = ['1abc2',
'pqr3stu8vwx',
'a1b2c3d4e5f',
'treb7uchet']
// console.log(input);


function main(input){
  let sum = 0

  const numerals = input.map((line) => {
    return line.match(/\d/g);
  })

  numerals.forEach((nums) => {
    const num = Number(nums[0] + nums[nums.length - 1])
    sum += num
  })

  return sum
}


console.log(main(testInput) === 142 ? 'Test passes! ✅' : 'Test Failed ❌')
console.log(`Output of real data: ${main(realInput)}`)