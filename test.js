// A - items 原版
let items=["APPLE" , "ORANGE","香蕉","TOMATO"]
console.log("(A)");
console.log(items);
// B - items2 = items (會連結)
let items2 = items;
items2.push("葡萄");
console.log("(B)同步修改了");
console.log(items);
console.log(items2);
// C - items3 = ...items (...展開內容)(複製)
let items3 = [...items];
items3.push("西瓜");
console.log("(C)個別修改了");
console.log(items);
console.log(items3);
// D - items4 
let items4 = [...items,"草莓"];
console.log(items4);
let items5 = ["鳳梨",...items];
console.log(items5);