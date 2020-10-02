module.exports = function countCats(matrix) {
    let backyard = matrix.flat();
    let i = 0;
    let cats = 0;
    while (backyard.length > i) {
        if (backyard[i] === '^^') {
            cats++;
        }
        i++;
    }
    return cats;
}
