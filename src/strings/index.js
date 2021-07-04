const split = (str, delim) => {
  // write code for strings.split
  let string = str.split(delim)
  return string
}

const pairs = (str) => {
  // write code for strings.pairs
  let arrayPairs = [];
  for (let i = 0; i < str.length; i +=2) {
    arrayPairs.push(str.substring(i, i+2));
  }
  return arrayPairs;
}

const reverse = (str) => {
  // write code for strings.reverse
  let revArr = str.split('')
  return revArr.reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}