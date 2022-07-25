const reverseString = function(string) {
    let array = string.split("");
    array = array.reverse();
    string = array.join("");
    return string;
};

// Do not edit below this line
module.exports = reverseString;
