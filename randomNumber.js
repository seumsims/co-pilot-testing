// random number generator
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(1, 1000000));