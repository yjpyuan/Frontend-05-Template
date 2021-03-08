import {Component,createElement} from "./framework.js";
class Carousel extends Component {
  constructor() {
    super();
    this.attribute = Object.create(null);
  }
  setAttribute(name, value) {
    this.attribute[name] = value;
  }
  render() {
    this.root = document.createElement("div");
    this.root.classList.add("carouse");
    for (let record of this.attribute.src) {
      let child = document.createElement("div");
      child.style.backgroundImage = `url('${record}')`;
      //  child.style.display="none";
      this.root.appendChild(child);
    }

    let position=0;
    this.root.addEventListener('mousedown',event=>{
      let children=this.root.children;
      console.log('mousedown');
      let startX=event.clientX;
      // let startY=event.clientY; 用不到Y轴
      let move =event =>{
        console.log("mousemove");
        let x=event.clientX-startX;
        // let y=event.clientY-startY; 用不到Y轴

        let current=position-((x-x%500)/500);

        for(let offset of [-1,0,1]){
          let pos=current+offset;
          pos=(pos+children.length)%children.length;
          children[pos].style.transition="none";
          children[pos].style.transform=`translateX(${-pos*500+offset*500+ x%500}px)`;
        }
      };
      let up =event=>{
        console.log("mouseup");
        let x=event.clientX-startX;
        position=position-Math.round(x/500);
        for(let offset of [0,-Math.sign(Math.round(x/500)-x+250*Math.sign(x))]){
          let pos=position+offset;
          pos=(pos+children.length)%children.length;
          children[pos].style.transition="none";
          children[pos].style.transform=`translateX(${-pos*500+offset*500}px)`;
        }
        document.removeEventListener("mousemove",move);
        document.removeEventListener("mouseup",up);
      };
      document.addEventListener("mousemove",move);
      document.addEventListener("mouseup",up);

    });
   /* let currentIndex=0;
    setInterval(() => {
      let children = this.root.children;
      let nextIndex=(currentIndex + 1) %children.length;

      let current =children[currentIndex];
      let next=children[nextIndex];
      
      next.style.transition ='none';
      next.style.transform=`translateX(${100 - nextIndex * 100}%)`;
      setTimeout(()=>{
        next.style.transition='';
        current.style.transform=`translateX(${-100 - currentIndex * 100}%)`;
        next.style.transform=`translateX(${- nextIndex * 100}%)`;

        currentIndex=nextIndex;
      },16);
    }, 3000);*/
    return this.root;
  }
  mountTo(parent) {
    parent.appendChild(this.render());
  }
}

let d = [
  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254230662,1479924568&fm=26&gp=0.jpg",
  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1828617116,965098140&fm=26&gp=0.jpg",
  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2135378476,4132922244&fm=26&gp=0.jpg",
  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1228962689,1071890439&fm=11&gp=0.jpg"
];

let a = <Carousel src = {d}/>;
a.mountTo(document.body);