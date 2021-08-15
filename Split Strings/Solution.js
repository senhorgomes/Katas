// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
  const splitArray = [];
  let tempString = '';
  const splitString = str.split('');
  for (let i = 0; i <= (splitString.length - 1); i++){
    tempString += splitString[i]
    if (((splitString.length - 1) === i) && (splitString.length % 2 !== 0)) {
      tempString += '_';
      splitArray.push(tempString);
    } else if ((i+1) % 2 === 0) {
      splitArray.push(tempString);
      tempString = '';
    }
  }
  return splitArray;
}