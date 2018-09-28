module.exports = function longestConsecutiveLength(array) {
  // your solution here
  const len = array.length;
  if(!len) return 0;
  let count = 1, 
      max = 1;
  array.sort((a, b) => a - b);
  for(let i = 1; i < len; i++){
    if(array[i] === array[i - 1] + 1) count++;
    else {
      if(count > max) max = count;
      count = 1;
    }
  }
  return max;
}