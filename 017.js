/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let numToString = {
        "2": ['a','b','c'],
        "3": ['d','e','f'],
        "4": ['g','h','i'],
        "5": ['j','k','l'],
        "6": ['m','n','o'],
        "7": ['p','q','r','s'],
        "8": ['t','u','v'],
        "9": ['w','x','y','z'],
    }
    if(digits.length === 0) return [];
    if(digits.length === 1) return numToString[digits[0]];
    let result = [];
    
    for (let i = 0; i < digits.length; i++) {
        if(i == 0){
            result = arrmularr(numToString[digits[i]], numToString[digits[i+1]]);
            i++
        }else {
            result = arrmularr(result, numToString[digits[i]]);
        }
    }

    return result;
}

function arrmularr(arr1,arr2){
    let array = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            array.push(arr1[i]+arr2[j]);         
        }        
    }
    return array;
}