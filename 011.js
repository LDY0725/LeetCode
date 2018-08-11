// 11. 盛最多水的容器
/**
 * 双指针解法
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left !== right){
        let compare = height[left] < height[right]
        let small = compare ? height[left] : height[right];
        let area = (right - left) * small;
        max = area > max ? area : max;
        if (compare) left++;
        else right--
    }
    return max
};