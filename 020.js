/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0) return true; 
    let stack = [];
    let double = {
        '{':'}',
        '[':']',
        '(':')'
    }
    for (let i = 0; i < s.length; i++) {
        if(s[i] === "[" || s[i] === "(" || s[i] === "{"){
            stack.push(s[i]);
        }else {
            if(stack.length === 0 || double[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }

    if(stack.length !== 0) return false;
    
    return true;
};