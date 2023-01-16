const palindromes = function (word) {
    word = word.replace(/[^\w]/g, "").toLowerCase();
    const reverse = word.split('').reverse().join('');
    return word === reverse;
};

// Do not edit below this line
module.exports = palindromes;
