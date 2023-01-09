// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

const millisecondsInSecond = 1000;
const secondsInMinute = 60;
const minutesInHour = 60;
const secondsToMilliseconds = (s) => {
  return s * millisecondsInSecond;
};
const minutesToMilliseconds = (m) => {
  return m * secondsInMinute * millisecondsInSecond;
};
const hoursToMilliseconds = (h) => {
  return h * minutesInHour * secondsInMinute * millisecondsInSecond;
};
// 
const past = (h, m, s) => {
  return (
    hoursToMilliseconds(h) + minutesToMilliseconds(m) + secondsToMilliseconds(s)
  );
};

// You can easily use this solution but its not the best, the above is more readable and isolated 

// const past = (h, m, s) =>{
//   return (h * 3600 + m * 60 + s) * 1000;
// }