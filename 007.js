//7. 反转整数

/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    let a = x.toString().split('').reverse();
    if (a[a.length-1] === '-'){
        a.pop();
        a.unshift('-')
    }

    let newNum = Number.parseInt(a.join(''));
    if(newNum > Math.pow(2,31) - 1) return 0;
    else if(newNum < Math.pow(-2,31)) return 0;
    else return newNum;
};