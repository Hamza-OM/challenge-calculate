// calculateSum.js
function calculateSum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

module.exports = calculateSum;
