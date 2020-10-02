module.exports =function repeater(str, options) {
      let string = str;
      let {
          repeatTimes = 1,
          separator = '+',
          addition,
          additionRepeatTimes = 1,
          additionSeparator,
      } = options;

      if(additionRepeatTimes) {
        if(additionSeparator) {
          string += (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
        } else {
          if(addition) {
            string += addition
          }
        }
      }

      if(repeatTimes) {
        if (separator) {
          string = (string + separator).repeat(repeatTimes).slice(0, -separator.length);
        } else {
          string = string.repeat(repeatTimes)
        }
      }

      return string;
};
