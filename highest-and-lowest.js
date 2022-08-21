//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let newArr = numbers.split(' ').sort((a,b) => b-a)
    if (newArr.length > 1) {
      return `${newArr.shift()} ${newArr.pop()}`
      } else {
        return `${newArr} ${newArr}`
        }
  }