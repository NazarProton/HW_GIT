import "./index.css";
import JS_IMAGE from "./assets/javascript-736400_960_720.png";

console.log("Hello world!");

const jsImageHTML = document.createElement('img')
const jsImageHTMLL = document.createElement('img')
jsImageHTML.className = 'js-image'
jsImageHTMLL.className = 'js-image'
jsImageHTML.src = JS_IMAGE;
jsImageHTMLL.src = JS_IMAGE;

document.body.append(jsImageHTML ,jsImageHTMLL)