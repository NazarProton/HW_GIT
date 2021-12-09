import "./index.css";
import JS_IMAGE from "./assets/javascript-736400_960_720.png";

console.log("Hello world!");

const jsImageHTML = document.createElement('img')
jsImageHTML.className = 'js-image'
jsImageHTML.src = JS_IMAGE;
;

document.body.append(jsImageHTML)