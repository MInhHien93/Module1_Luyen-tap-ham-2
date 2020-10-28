let factorial = 1;
function calculate(num) {
    for (let i=1;i<=num;i++) {
        factorial *= i;
    }
}
calculate(10);
console.log(factorial);