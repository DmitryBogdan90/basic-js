module.exports = function transform(arr) {
    if (!(arr instanceof(Array))) {
      throw 'THROWN';
    }
    let i = 0;
    let result = [];
    while (i < arr.length) {
        switch (arr[i]) {
          case '--discard-next':
            i++;
            break;
          case '--double-next':
            if (i + 1 < arr.length) {
              result.push(arr[i+1]);
            }
            break;
          case '--discard-prev':
            if ((i >= 1) && (arr[i-2] !== '--discard-next')) {
              result.splice(-1, 1);
            }
            break;
          case '--double-prev':
            if ((i >= 1) && (arr[i-2] !== '--discard-next')) {
              result.push(arr[i-1]);
            }
            break;
          default:
            result.push(arr[i]);
          }
      i++;
    }
    return result;
};
