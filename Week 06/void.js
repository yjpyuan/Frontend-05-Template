let a = function () {
  console.log(1);
};
function sleep(t) {
 return new Promise((resolve, reject) => {
   setTimeout(resolve, t);
 });
}

void sleep(4);
void a();
//void 跟什么值都会返回undefined
//为什么void a()会执行 a的执行结果？

for(let item of window){
  console.log(item.toString())
}