//9. 回文数

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let left = '';
    let right = '';
    if (string.length === 1) {
        return true;
    }else if (string.length % 2 === 0) {
        left = string.substring(0, string.length / 2);
        right = string.substring(string.length / 2);
    }else if (string.length % 2 === 1) {
        left = string.substring(0, string.length / 2);
        right = string.substring(string.length / 2 + 1);
    }
    if (left.split('').reverse().join('') === right) return true;
    else return false;
};