# js 部分

## 节流器

```js
/**
 * 节流器1：先执行再延时，“相对实时”效果最好，但是最后一次关键点触发可能会被节流掉
 * fn：执行函数
 * wait：等待时间
 */
function throttle(fn, wait) {
  let timer = null;
  return function () {
    if (!timer) {
      fn && fn.apply(this, arguments);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  };
}
/**
 * 节流器2：先延时再执行，有较好的“相对实时”的效果，并且最后一次触发不会被节流掉
 * fn：执行函数
 * wait：等待时间
 */
function throttle2(fn, wait) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        // 这里的this和arguments就是return function这个函数的this和arguments
        //（箭头函数没有自己的this，arguments，super或new.target）
        fn && fn.apply(this, arguments);
        timer = null;
      }, wait);
    }
  };
}
/**
 * 节流器3：先延时后执行，“相对实时”的效果很差（定时器一直会被覆盖），但最后一次触发不会被节流
 * fn：执行函数
 * wait：等待时间
 */
const throttle3 = function (fn, wait) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn && fn.apply(this, arguments);
    }, wait);
  };
};
```

## 中文和 unicode 互转

```js
// 汉字转unicode
export function escapeCode(str: string) {
  if (!str) {
    return "";
  }
  return str.replace(/[^\u0000-\u00FF]/g, function ($0) {
    return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;");
  });
}

// unicode转换为汉字
export function unescapeCode(str: string) {
  if (!str) {
    return "";
  }
  return unescape(str.replace(/&#x/g, "%u").replace(/;/g, ""));
}
```

## 判断引用指向的对象是否相同

Object.is(a, b)是用于判断 a 和 b 是否指向同一个对象，也就是地址值相同（引用不是同一个，是两个引用）。

```js
const a = { x: 100 };
const b = a; // 把a的地址值复制给了b，它们指向同一个对象 { x: 100 }
console.log(Object.is(a, b)); // true

const c = { x: 200 };
const d = { x: 200 };
console.log(Object.is(c, d)); // false，虽然对象内容一样，但是对象不是同一个，随之地址值也不一样
```
