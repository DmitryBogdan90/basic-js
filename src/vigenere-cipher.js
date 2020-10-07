class VigenereCipheringMachine {
  constructor(typeMachine = true) {
    this.typeMachine = typeMachine;
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw 'THROWN';
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let i = 0;
    let result = [];
    let count = 0;
    while (key.length < message.length) {
      key += key;
    }
    while (i < message.length) {
      let m = message[i].charCodeAt(0) - 65;
      let k = key[count].charCodeAt(0) - 65;
      if (m >= 0 && m <= 25) {
        let c = (m + k) % 26 + 65;
        result.push(String.fromCharCode(c));
      } else {
        result.push(message[i]);
        count--;
      }
      count++;
      i++;
    }
    if (!this.typeMachine) {
      return result.reverse().join('');
    }
    return result.join('');
  }

  decrypt(cryptoWord, key) {
    if(!cryptoWord || !key) {
      throw 'THROWN';
    }
    cryptoWord = cryptoWord.toUpperCase();
    key = key.toUpperCase();
    let i = 0;
    let result = [];
    let count = 0;
    while (key.length < cryptoWord.length) {
      key += key;
    }
    while (i < cryptoWord.length) {
      let c = cryptoWord[i].charCodeAt(0) - 65;
      let k = key[count].charCodeAt(0) - 65;
      if (c >= 0 && c <= 25) {
        let m = (c + 26 - k) % 26 + 65;
        result.push(String.fromCharCode(m));
      } else {
        result.push(cryptoWord[i]);
        count--;
      }
      count++;
      i++;
    }
    if (!this.typeMachine) {
      return result.reverse().join('');
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
