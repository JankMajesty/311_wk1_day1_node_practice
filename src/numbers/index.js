const isEven = (num) => {
  if (num % 2 === 0){
    return true
  } else { return false }
}
console.log(isEven)

const sum = (arr) => {
  // write code for numbers.sum
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
  return sum
}


const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[i] + arr[j] === sum) {
        return true;
      } else {
        return false;
      }
    }
  }

}


module.exports = {
  isEven,
  sum,
  comboSum
}