// generate random value
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomValue(1, 1000000));
