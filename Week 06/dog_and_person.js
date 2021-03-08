class Dog {
  constructor(name, sex, hp, mp) {
    this.name = name || 'daoge';
    this.sex = sex || 'mail';
    this.hp = hp || 100;
    this.mp = mp || 100;
    this.life=true;
  }
  eat() {
    console.log('eat');
  }
  bite(obj) {
    return obj.hurt(100);
  }
  hurt(damage) {
    if (typeof damage === 'number');
    this.hp=this.hp - damage;
    return this.hp <= 0 ? this.life = false : this.hp;
  }

}
class Person {
  constructor(name, sex, hp, mp) {
    this.name = name || "mabaoguo";
    this.sex = sex || 'mail';
    this.hp = hp || 100;
    this.mp = mp || 100;
    this.life = true;
  }
  shandianbian(obj) {
    return obj.hurt(1);
  }
  hurt(damage) {
    if (typeof damage === 'number');
    this.hp=this.hp - damage;
    return this.hp <= 0 ? this.life = false : this.hp;
  }
}

let mbg=new Person();
let dog=new Dog();

mbg.shandianbian(dog);
if(!dog.life){
  console.log('马保国牛逼！');
}
dog.bite(mbg);
if(!mbg.life){
  console.log('我大意了啊，我没有闪，年轻人怎么不讲武德');
}