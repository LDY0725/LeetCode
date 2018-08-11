/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((el1,el2) => el1 - el2)
    var results = new Set();
    for (let i = 0; i < nums.length - 1; i++) {
        var newNums = nums.slice().splice(i,1)
        for (let j = i+1; j <newNums.length ; j++) {
            newNums
        }
    }
};