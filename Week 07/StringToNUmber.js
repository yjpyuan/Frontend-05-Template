const StingToNumber = (str,system) => {
  let systems=['2','8','10','16'];
  let result='';
 
  system==systems[0]?result=parseInt(str,2)
  :system==systems[1]?result=parseInt(str,8)
  :system==systems[2]?result=parseInt(str,10)
  :system==systems[3]?result=parseInt(str,16)
  :result='system is not set';
  return result;
};
console.log(StingToNumber('10','2'));
console.log(StingToNumber('10','8'));
console.log(StingToNumber('10','16'));
console.log(StingToNumber('10','19'));