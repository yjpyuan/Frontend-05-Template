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
    return findB;
  else {
    //re conso
    return start(c);
  }
};

function findB(c) {
  if (c === 'c')
    return findC;
  else {
    return start(c);
  }
};

function findC(c) {
  if (c === 'a')
    return findA2;
  else {
    return start(c);
  }
};

function findA2(c) {
  if (c === 'b')
    return findB2;
  else {
    return start(c);
  }
};
function findB2(c) {
  if (c === 'x')
    return end;
  else {
    return findB(c);
  }
};

// console.log(match('I acbm groot'));
// console.log(match('I abm groot'));
console.log(match('I aabcabcabx groot'));