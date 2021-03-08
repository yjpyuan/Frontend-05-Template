{
  let findState = false;

  function match(string) {
    console.log(`********my demo find abcabx from ${string} use Mealy *********`);

    let state = start;
    for (let c of string) {
      state = state(c);
    }
    return state === end;
  };

  function start(c) {
    if (c === 'a')
      return findA;
    else
      return start;
  };

  function end(c) {
    //trap函数
    return end;
  };



  function findA(c) {
    if (c === 'b')
      return findB;
    else {
      //re conso
      return start(c);
    }
  };

  function findB(c) {
    if (!findState) {
      if (c === 'c') {
        findState = !findState;
        return start(c);
      } else {
        return start(c);
      }
    } else {
      if (c === 'x') {
        return end;
      } else {
        return start(c);
      }
    }

  };
}
console.log(match('I aabcdefm groot'));
console.log(match('I aabcabxm groot'));
console.log(match('I aabcabem groot'));