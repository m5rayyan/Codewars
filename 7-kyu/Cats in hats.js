// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

// The Cat In The Hat is 2,000,000 cat units tall.

// Each cat is 2.5 times bigger than the cat underneath their hat.

// Find the total height of the cats if they are standing on top of one another.

// Counting starts from the Cat In The Hat

// n = the number of cats

// fix to 3 decimal places.

function height(n) {
  return Array.from(
    { length: n + 1 },
    (_, index) => 2000000 / Math.pow(2.5, index)
  )
    .reduce((acc, curr) => acc + curr)
    .toFixed(3);
}
/*
Suppose n = 7
Array.from({ length: n + 1 }, (_, index) => 2000000 / Math.pow(2.5, index));
  These are the outputs when using Array.from()
  0: 2000000
  1: 800000
  2: 320000
  3: 128000
  4: 51200
  5: 20480
  6: 8192
  7: 3276.8
  length: 8

  Now to get the totalHeight, using
    reduce((acc:2,000,000 , curr:800,000)=> 2,000,000 + 800,000)
    reduce((acc:2,800,000 , curr:320,000)=> 2,800,000 + 320,000)
    ...
    and so on to the point
  
  Last of all fix to 3 decimal places using toFixed(3)
*/

/*
  Another Solution
function height(n) {
  let total = 0;
  let init = 2000000;
  for (let i = 0; i <= n; i++) {
    total += init;
    init /= 2.5;
  }
  return total.toFixed(3);
}
*/
