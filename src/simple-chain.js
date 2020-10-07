const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!position || typeof (position) !== "number") {
      this.chain = []
      throw 'THROWN'
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString = '';
    let i = 0;
    while (i < this.chain.length) {
      if(i === 0) {
        chainString += `( ${this.chain[i]} )`;
      } else {
        chainString += `~~( ${this.chain[i]} )`;
      }
      i++;
    }
    this.chain = []
    return chainString;
  },
};

module.exports = chainMaker;
