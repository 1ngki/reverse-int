module.exports = function reverse(n) {
    let result = String(n).split("").reverse().join("");
    return parseInt(result);
};
