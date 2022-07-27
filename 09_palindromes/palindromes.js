const palindromes = function (str) {
    str = str.replace(/[^a-z0-9]/gi, "")
    let arr = str.split("");
    let reversed = (arr.reverse()).join("");
    return reversed.toLowerCase() === str.toLowerCase();
}; 

// Do not edit below this line
module.exports = palindromes;
