module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const brackets = Object.fromEntries(bracketsConfig);
  const strArray = str.split('');
 
  for(const element of strArray) {
      if (stack[0] === element) {
         stack.shift();
      } else if (brackets[element]) {
          stack.unshift(brackets[element])
      } else {
          return false;
      }
  }
 
  return stack.length === 0;


}
