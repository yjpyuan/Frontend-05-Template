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
  if (c === 'd')
    return findD;
  else {
    return start(c);
  }
};

function findD(c) {
  if (c === 'e')
    return findE;
  else {
    return start(c);
  }
};

function findE(c) {
  if (c === 'f')
    return end;
  else {
    return start(c);
  }
};



// console.log(match('I acbm groot'));
// console.log(match('I abm groot'));
console.log(match('I aabcdefm groot'));