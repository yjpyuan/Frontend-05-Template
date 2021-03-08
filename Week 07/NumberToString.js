const NumberToString = (num, system) => {
  return system <= 36 && system >= 2 ? num.toString(system) : 'system is beturn 2 to 36';
};

console.log(NumberToString(10,2));
console.log(NumberToString(10,8));
console.log(NumberToString(10,10));
console.log(NumberToString(10,16));