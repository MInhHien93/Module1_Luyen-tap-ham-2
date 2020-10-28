function checkNumber(number) {
    if (Number.isInteger(number)) {
        if (number > 0)
            return true;
    }
    return false;
}
console.log(checkNumber(-1));