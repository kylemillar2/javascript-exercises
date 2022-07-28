const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return "OOPS";
    let arr = [0, 1];
    for (let i = 1; i < num; i++) {
        let prev1 = arr[i]
        let prev2 = arr[i-1]
        arr.push(prev1 + prev2);
    }
    return arr[num];
}

// Do not edit below this line
module.exports = fibonacci;
