module.exports = function longestConsecutiveLength(array) {
// your solution here
  const length = array.length;
  if(!length) return 0;
  let count = 1, max = 1;
  array.sort((a, b) => a - b);
  for(let i = 1; i < length; i++){
    let current = array[i], prev = array[i-1];
    if(current === prev + 1) count++;
    else {
      if (current === prev) count = count;
      else {
        max = Math.max(count, max);
        count = 1;
      }
    }
  }
  return max;
}