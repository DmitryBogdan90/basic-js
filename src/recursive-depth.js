module.exports = class DepthCalculator {
    constructor() {
        this.calculateDepth = this.calculateDepth.bind(this);
    }

    calculateDepth(array) {
        let arrayDepth = 1;
        let i = 0;

        while (i < array.length) {
            if (array[i] instanceof Array) {
                let newDepth = this.calculateDepth(array[i]);
                if (arrayDepth < ++newDepth) {
                    arrayDepth = newDepth;
                }
            }
            i++;
        }
        return arrayDepth;
    }
};
