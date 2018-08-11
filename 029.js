/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor) {
    let flag = false;
    if (dividend < 0) {
        flag = !flag;
        dividend = Math.abs(dividend);
    }
    if (divisor < 0) {
        flag = !flag;
        divisor = Math.abs(divisor);
    }
    if(dividend < divisor) return 0;
    let resultArray = [];

    while (dividend >= divisor){
        let dividendString = dividend.toString(2);
        let divisorString = divisor.toString(2);

        length = dividendString.length - divisorString.length - 1;
        if(length === -1) {
            resultArray.push(1);
            break;
        }

        let midnum = divisorString;
        for (let i = 0; i < length; i++) {
            midnum += "0";
        }

        let result = 0;
        if(length > 0) result = Math.pow(2, length);
        else if(length === 0) result = 1;

        dividend -= parseInt(midnum, 2);

        resultArray.push(result)
    }

    let result = 0;
    resultArray.forEach((e)=>{result += e});

    result = flag ? 0 - result : result;
    if(result >= 2147483648) return 2147483647;
    else return result;
};