var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];

    let length = 0;

    for (let i = 1; i <= strs[0].length; i++){
        if (strs[0].substring(0,i) === strs[1].substring(0,i)){
            length = i;
        }
        else break
    }
    if (length === 0) return '';
    for (let i = 2; i < strs.length; i++){
        if (strs[0].substring(0,length) !== strs[i].substring(0,length)){
            for (let j = length; j >= 0 ; j--){
                if (strs[0].substring(0,j) === strs[i].substring(0,j)) {
                    length = j;
                    break
                }

                if (j === 0){
                    return ''
                }
            }
        }
    }

    return strs[0].substring(0,length)
};