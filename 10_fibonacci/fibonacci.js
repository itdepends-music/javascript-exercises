const fibonacci = function(n) {
    if (n <= 0) {
        return "OOPS";
    }

    let fib1 = 1;
    let fib2 = 1;
    for (let i = 0; i < n - 2; i++) {
        let temp = fib1;
        fib1 = fib1 + fib2;
        fib2 = temp;
    }
    return fib1;
};

// Do not edit below this line
module.exports = fibonacci;
