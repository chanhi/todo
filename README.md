# todo

## todo V.2!!! by.21.11.29

### Bring css, js in HTML

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
let : changealble variable

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
      object1 = 2,
      object2 = "n",
    };
    console.log(object.object1)
    object.object3 = true;
```

### Function
```javascript
    function functionName(arg){
      console.log(arg + "blabla");
    }
    const object = {
      object1: "ex",
      functionName: function (arg){
        return arg + 2;
      },
      object2: true
    };
```

### Conditionals
input value
``` const v = prompt("입력하세요");```    
check type
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
``` <, >, <=, >=, ===, !==, &&, ||, true, false ```
