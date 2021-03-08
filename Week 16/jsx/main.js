import {Component,createElement} from "./framework.js";
import {Carousel} from "./carousel.js";
import {Timeline,Animation} from "./animation.js";

let d = [
  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254230662,1479924568&fm=26&gp=0.jpg",
  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1828617116,965098140&fm=26&gp=0.jpg",
  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2135378476,4132922244&fm=26&gp=0.jpg",
  "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1228962689,1071890439&fm=11&gp=0.jpg"
];

let a = <Carousel src = {d}/>;
a.mountTo(document.body);

let tl=new Timeline();
window.tl=tl;
window.animation=new Animation({set a(v){console.log(v)}},'a',0,100,1000,null);

tl.start();