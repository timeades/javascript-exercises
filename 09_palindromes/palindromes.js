const palindromes = function (str) {
    const re = /[^A-Za-z0–9]/g;
    const lowRegStr = str.toLowerCase().replace(re, ''); //stripping all the spaces from the string
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
};


// Do not edit below this line
module.exports = palindromes;
