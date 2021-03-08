function match(string) {
  console.log(`********demo find abcdef from ${string} use Mealy *********`);

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
    return findA2;
  else {
    //re conso
    return start(c);
  }
};

function findA2(c) {
  if (c === 'a')
    return findB2;
  else {
    //re conso
    return start(c);
  }
};

function findB2(c) {
  if (c === 'b')
    return findA3;
  else {
    //re conso
    return findA(c);
  }
};

function findA3(c) {
  if (c === 'a')
    return findB3;
  else {
    //re conso
    return findA2(c);
  }
};

function findB3(c) {
  if (c === 'b')
    return findA4;
  else {
    //re conso
    return findB2(c);
  }
};

function findA4(c) {
  if (c === 'x')
    return end;
  else {
    //re conso
    return findA3(c);
  }
};

// console.log(match('I acbm groot'));
// console.log(match('I abm groot'));
console.log(match('abce','abcdabce'));
// console.log('abce',kmp('abce', 'abcdabce'));