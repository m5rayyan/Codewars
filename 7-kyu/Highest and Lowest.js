// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.
function highAndLow(numbers) {
  let nums = numbers.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
