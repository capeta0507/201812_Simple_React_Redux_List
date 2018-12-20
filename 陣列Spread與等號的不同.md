# 陣列Spread與等號的不同
###### tags: `JavaSript` `Array`
* items 原版
```javascript=
let items=["APPLE" , "ORANGE","香蕉","TOMATO"]
console.log("(A)");
console.log(items);
```
上述的items console.log的結果會秀出原預設的內容

---

* items2 = items (會連結)
```javascript=
let items2 = items;
items2.push("葡萄");
console.log(items);
console.log(items2);
```
當items2與items相等時，不論是在items2或是在items推上新的物件，兩個陣列會同步修改，因此兩個陣列console.log秀出的結果會一樣。

---

* items3 = [...items] (...展開內容)(複製)
```javascript=
let items3 = [...items];
items3.push("西瓜");
console.log(items);
console.log(items3);
```
將items的陣列展開([...items])並放到items3，雖然兩個陣列會相同，但並不會同步更新，若在items3推上新的物件，items則不會新增。因此兩個陣列console.log的結果並不相同。

---

* 陣列新增 (items4、items5)
```javascript=
let items4 = [...items,"草莓"];
console.log(items4);
let items5 = ["鳳梨",...items];
console.log(items5);
```
將展開的items放到items4並在後面接上新的物件，而新的物件會接在原items的最後面。不過若是順序相反，先放新物件並在後面接上展開的items，新放的物件會接在原items的最前面。