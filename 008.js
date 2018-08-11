//8. 字符串转整数 (atoi)

/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function(str) {
   let numArray = [];

   for (let i = 0; i < str.length; i++){
       if(str[i] === '+' ||str[i] === '-' || str[i] === ' ' || !isNaN(str[i])) numArray.push(str[i]);
       else break;
   }

   let n = Number.parseInt(numArray.join(''));
   if (isNaN(n)) return 0;
   let MIN_NUM = Math.pow(-2,31);
   let MAX_NUM = Math.pow(2,31) - 1;
   if(n > MAX_NUM) return MAX_NUM;
   else if(n < MIN_NUM) return MIN_NUM;
   else return n;
};