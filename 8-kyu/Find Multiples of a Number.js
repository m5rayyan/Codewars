findMultiples = (integer, limit) => {
  let arrMult = [];
  let initialNum = integer;
  while (integer <= limit) {
    arrMult.push(integer);
    integer += initialNum;
  }
  return arrMult;
};
