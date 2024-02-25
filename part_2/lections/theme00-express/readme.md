# requests  

[Список кодов состояния сервера - response](
https://ru.wikipedia.org/wiki/список_кодов_состояния_HTTP)  

Где можно тестировать приложение:  

- Thunder client (VSCode), (в некоторых системах localhost требуется заменить на [::1] - http://[::1]:3000/abiturs)  
- Browser  
- PostMan  

---  

https://developer.mozilla.org/ru/docs/Web/HTTP/Methods  

**Http-Methods:**  

```txt
Get Requests
-- Route Params
-- Query Params
Post Requests
Put Requests
Patch Requests
Delete Requests
Head Requests (только загловки)  
Options (узнать параметры соединения)  
Trace (для тестирования)  
```

Безопасные методы: Get и Head.  
Идемпотентные: Get, Head, Put и Delete.  
(при повторном применении тот же результат)  

---  

Middleware

---  

validator  
https://express-validator.github.io/docs/  

---  

cookies  
F12 / Dev Panel / Application / Cookies  

---  

```js
const log = console.log; 
const jsonData = pm.response.json(); 
 
pm.test("test_", function () { 
    let limit = 100_000; 
    let new_json = jsonData.filter(obj => obj.number < limit); 
    log(new_json); 
 
    let numbers = JSON.parse(JSON.stringify(jsonData,['number'])); 
    numbers 
        .sort((a,b) => a.number-b.number) 
        .forEach(obj => log(obj.number)); 
 
    pm.response.to.have.status(200); 
});
```

---  
