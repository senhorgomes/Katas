// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

function digital_root(n) {
  const nStringArray = (n + '').split('');
  const nActualNumberArray = nStringArray.map((x) => { return Number(x) });
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (n.toString().length > 1) {
    let newN = nActualNumberArray.reduce(reducer);
    return digital_root(newN)
  }
  return n;
}