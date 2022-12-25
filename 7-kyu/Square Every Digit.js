// For example, if we run 9119 through the function, 811181 will come out, because
// 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer
let squareDigits = (...num) => {
  return +(num + "")
    .split("")
    .map((n) => n * n)
    .join("");
};
