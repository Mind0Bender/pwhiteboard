require("dotenv").config();
const { LazyBrush } = require("lazy-brush");

window.LazyBrush = LazyBrush;

window.myprocess = process;

console.log(myprocess);
