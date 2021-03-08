function UTF8_Encodeing(string) {
  let result = [];
  for (let i = 0; i <= string.length; i++) {
    let codePoint = string.codePointAt(string);
    if (codePoint < 128) {
      result.push(codePoint);
      continue;
    }
    let tmpArary = [];
    while (codePoint > 0) {
      let bitLength = Math.ceil(Math.log2(codePoint - 1));
      if (bitLength + tmpArary.length + 1 > 8) {
        tmpArary.unshift((codePoint & 0b00111111) | 0b10000000);
      } else {
        tmpArary.unshift(codePoint | ((0b11111111 << (7 - tmpArary.length)) & 0b11111111));
      }
      codePoint = codePoint >> 6;
    }
    result = {...result,...tmpArary};
  }
  return result;
}

// Math.log2() 函数返回一个数字以 2 为底的对数.