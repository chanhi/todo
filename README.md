# todo

## todo V.2!!! by.21.11.29

### Bring css, js in HTML

### What is JavaScript??!?

1. only programming languages can use on the Frontend

2. it comes installed with all the browsers

3. it was created in 10days

CSS : commonly in head
```HTML
    <link rel="stylesheet" href="file.css" />
```
js : commonly in body
```HTML
    `<script src="file.js"><script>`
```

### Variables
make Variables by js
```javascript
    const variablesNameBlabla = "values";
    let variablesNameBlabla = "values";
```
const : constant variable   
let : changeable variable

null : nothing in variable
undefined : not creating variable

tip! commonly use const and if you need to changeable variable then you can use let

### Datatype
number : 1, 10, 13.1 ...    
string : "text", "lalalal", "name" ...  
boolean : true, null, (undefined) ...   
array
```javascript
    array = [n1, n2, n3,...];
    console.log(array[2]);
    array.push("n");
```
object
```javascript
    const object = {
      object1 : 2,
      object2 : "n",
    };
    console.log(object.object1);
    //equal-> console.log(object["object1"]);
    object.object3 = true;
    console.log(object);
    //{object1:.., object2:.., object3:..}
```

### Function
```javascript
    function functionName1(arg){ //arg1, arg2, ...
      console.log(arg + "blabla");
    }
    const object = {
      object1: "ex",
      functionName2: function (arg){
        return arg + 2;
      },
      object2: true
    };
```
give a result when use  return  

### Conditionals
input value
``` const v = prompt("입력하세요");```    
check type (NaN: Not a Number)
``` console.log(typeof v); ```    
change type 
``` vInt = parseInt(v); ```   
check NaN
``` console.log(isNaN(v)); ``` return true or false

```javascript
  if(true){
    console.log("if true print");
  } else if(v < 10){
    console.log("else if print");
  } else {
    console.log("else print");
  }
```

condition list    
``` <, >, <=, >=, ===, !==, &&(and), ||(or), true, false ```

### javascript on the browser

html -> document

```document.getElementById("ID");```

-> document -> find id = "ID" element

```document.querySelector(".className h1");```

->class = "className" -> tag = h1 element (return first one element)    
if want to return all h1 element use

```document.querySelectorAll(".className h1");```

#### event
starting on- is event element

.addEventListener("click", "what you want to do if click");

```javascript
  function handleWindowResize(){
    document.body.style.backgroundColor = "red";
  }
  window.addEventListener("resize", handleWindowResize);
```
-> if resize window function handleWindowResize is run    
window event: resize, copy, paste etc...

- with condition
```javascript
  function handleColorClick() {
    if(h1.style.color === "blue"){
      h1. style.color = "tomato";
    }else {
      h1.style.color = "blue";
    }
  }
  h1.addEventListener("click", handleColorClick);

  function handleColorClickSecond() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass) {
      h1.classList.remove(clickedClass);
    }else {
      h1.classList.add(clickedClass);
    }
  }
  h1.addEventListener("click", handleColorClickSecond());

  function handleColorClickThird() {
    h1.classList.toggle("clicked");
  }
  h1.addEventListener("click", handleColorClickThird());
```
-> three code is same function    
-> second function is using DOMList()   
-> third function is classList.toggle(). this is amazing(?)
