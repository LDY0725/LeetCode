//13. 罗马数字转整数

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s === '') return 0
    if (s.length >= 2){
        if (s[s.length - 2] === 'C' && s[s.length - 1] === 'M') return 900 + romanToInt(s.substring(0, s.length - 2));
        if (s[s.length - 2] === 'C' && s[s.length - 1] === 'D') return 400 + romanToInt(s.substring(0, s.length - 2));
        if (s[s.length - 2] === 'X' && s[s.length - 1] === 'C') return 90 + romanToInt(s.substring(0, s.length - 2));
        if (s[s.length - 2] === 'X' && s[s.length - 1] === 'L') return 40 + romanToInt(s.substring(0, s.length - 2));
        if (s[s.length - 2] === 'I' && s[s.length - 1] === 'X') return 9 + romanToInt(s.substring(0, s.length - 2));
        if (s[s.length - 2] === 'I' && s[s.length - 1] === 'V') return 4 + romanToInt(s.substring(0, s.length - 2));
    }
    if (s[s.length - 1] === 'M') return 1000 + romanToInt(s.substring(0, s.length - 1));
    else if (s[s.length - 1] === 'D') return 500 + romanToInt(s.substring(0, s.length - 1));
    else if (s[s.length - 1] === 'C') return 100 + romanToInt(s.substring(0, s.length - 1));
    else if (s[s.length - 1] === 'L') return 50 + romanToInt(s.substring(0, s.length - 1));
    else if (s[s.length - 1] === 'X') return 10 + romanToInt(s.substring(0, s.length - 1));
    else if (s[s.length - 1] === 'V') return 5 + romanToInt(s.substring(0, s.length - 1));
    else if (s[s.length - 1] === 'I') return 1 + romanToInt(s.substring(0, s.length - 1));
};