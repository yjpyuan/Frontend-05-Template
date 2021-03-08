{
  const findStr = (str, word) => {
    if (typeof str !== 'string' || typeof word !== 'string')
      return 'str or word is not a string';
    // if (str.length <= 10) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === word) {
        return `this word at str ${i+1} index`;
      }
      // }
    }

    // console.log(str.indexOf(word));

    return `this string not find this word`;
  };
  console.log(findStr('123', '3'));
}

//老师的办法
{
  function match(string) {
    for (let c of string) {
      if (c == 'a')
        return true;
    }
    return false;
  }

  match('i am groot');
}
/* 在一个字符串中找到字符串AB */
{
  const findStr = (str) => {
    console.log(`********my find ab from ${str} *********`);
    if (typeof str !== 'string')
      return 'str or word is not a string';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        if (str[i + 1] === 'b')
          return true;
      }
    }
    return false;
  };
  console.log(findStr('acadc'));

} {
  function match(string) {
    console.log(`********demo find ab from ${string} *********`);
    let foundA = false;
    for (let c of string) {
      if (c == "a")
        foundA = true;
      else if (foundA && c == "b")
        return true;
      else
        foundA = false;
    }
    return false;
  }

  console.log(match('I acbm groot'));
  console.log(match('I abm groot'));

}

/* 在一个字符串中找到字符串ABcdef */
{
  const findStr = (str) => {
    console.log(`********my find abcdef from ${str} *********`);
    if (typeof str !== 'string')
      return 'str or word is not a string';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        if (str[i + 1] === 'b')
          if (str[i + 2] === 'c')
            if (str[i + 3] === 'd')
              if (str[i + 4] === 'e')
                if (str[i + 5] === 'f')
                  return true;
      }
    }
    return false;
  };
  console.log(findStr('aaaaaaabcdef'));
  console.log(findStr('aaaaaaabcdf'));

}

/* 在一个字符串中找到字符串ABcdef */
/* 在一个字符串中找到字符串ABcdef  第二种办法*/
{
  const findStr = (str) => {
    console.log(`********my2 find abcdef from ${str} *********`);
    let findLenth = 6;
    let findStr = 'abcdef';
    if (typeof str !== 'string' && str.length <= findLenth)
      return 'str or word is not a string or str is min';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        if (str.substr(i, findLenth) === findStr)
          return true;
      }
    }
    return false;
  };
  console.log(findStr('abcdef'));
  console.log(findStr('acadcabcdef'));
  console.log(findStr('acadcabcde'));

}