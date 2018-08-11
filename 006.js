//6. Z字形变换

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    if(numRows <= 1) return s
    let arrays = new Array(numRows)
    let length = s.length

    for (let i = 0; i< numRows;i++){
        arrays[i] = new Array()
    }
    console.log(arrays)
    while (length){
        for (let i = 0;i < numRows ; i++){
            arrays[i].push(s[s.length - length])
            length--
            if (length == 0) return arrayToString(arrays)
        }
        for (let i = 0; i < numRows - 2; i++){
            arrays[numRows - i - 2].push(s[s.length - length])
            length--
            if (length == 0) return arrayToString(arrays)

        }
    }
}

function arrayToString(arrays) {
    let string = ""
    for (let i = 0;i<arrays.length;i++){
        string += arrays[i].join('')
    }
    return string
}