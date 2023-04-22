# jQueryNote

## 1. 基础

### 1.1 安装

&nbsp;&nbsp;&nbsp;&nbsp;下载：下载到本地引用，

```html
<script src="jquery-1.10.2.min.js"></script>
```

&nbsp;&nbsp;&nbsp;&nbsp;CDN：内容分发网络，

```html
<script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
```

### 1.2 语法

```javascript
// 基本写法：
$(document).ready(function () {});
// 简洁写法：
$(function () {});
```

### 1.3 jQuery 选择器

&nbsp;&nbsp;&nbsp;&nbsp;jQuery 选择器基于元素的 id、类、类型、属性、属性值等"查找"（或选择）HTML 元素  
&nbsp;&nbsp;&nbsp;&nbsp;jQuery 中所有选择器都以美元符号开头：$()。

```js
$("p") \\ 选取所有 <p> 元素
$("#test") \\ 选取id 为test的元素
$(".test") \\ 选取class为test的元素
$("*") \\ 选取所有元素
$(this) \\ 选取当前 HTML 元素
$("p.intro") \\ 选取 class 为 intro 的 <p> 元素
$("p:first") \\ 选取第一个 <p> 元素
$("ul li:first") \\ 选取第一个 <ul> 元素的第一个 <li> 元素
$("ul li:first-child") \\ 选取每个 <ul> 元素的第一个 <li> 元素
$("[href]") \\ 选取带有 href 属性的元素
$("a[target='_blank']") \\ 选取所有 target 属性值等于 "_blank" 的 <a> 元素
$("a[target!='_blank']") \\ 选取所有 target 属性值不等于 "_blank" 的 <a> 元素
$(":button") \\ 选取所有 type="button" 的 <input> 元素 和 <button> 元素
$("tr:even") \\ 选取偶数位置的 <tr> 元素
$("tr:odd") \\ 选取奇数位置的 <tr> 元素
$("p").css("background-color","red") \\ 把所有 p 元素的背景颜色更改为红色
```

### 1.4 事件

&nbsp;&nbsp;&nbsp;&nbsp;页面对不同方式访问的响应叫做事件。  
&nbsp;&nbsp;&nbsp;&nbsp;\$(document).ready() 方法允许我们在文档完全加载完后执行函数。  
&nbsp;&nbsp;&nbsp;&nbsp;鼠标事件：click(单击)、dblclick(双击)、mouseenter(移入)、mouseleave(移出)、mousedown(按下)、mouseup(放开)、hover(按下触发第一个函数，放开触发第二个函数)。  
&nbsp;&nbsp;&nbsp;&nbsp;表单事件：submit(提交)、change(改变)、focus(获得焦点)、blur(失去焦点)。  
&nbsp;&nbsp;&nbsp;&nbsp;键盘事件：keydown(按住)、keypress(按下放开)、keyup(放开)。  
&nbsp;&nbsp;&nbsp;&nbsp;文档/窗口事件：load(加载)、resize(尺寸改变)、scroll(滑动)、unload(退出)

## 2. 基础效果

### 2.1 隐藏和显示

```javascript
$(selector).hide(speed, callback); //speed参数可选，代表速度可取"slow"、"fast" 或毫秒值；callback参数可选
$(selector).show(speed, callback); //speed参数可选，代表速度可取"slow"、"fast" 或毫秒值；callback参数可选
$(selector).toggle(speed, callback); //隐藏和显示效果切换，speed和callback同上
```

### 2.2 淡入淡出

```javascript
$(selector).fadeIn(speed, callback); //淡入。speed参数可选，代表速度可取"slow"、"fast" 或毫秒值；callback参数可选
$(selector).fadeOut(speed, callback); //淡出。speed参数可选，代表速度可取"slow"、"fast" 或毫秒值；callback参数可选
$(selector).fadeToggle(speed, callback); //淡入和淡出效果切换，speed和callback同上
$(selector).fadeTo(speed, opacity, callback); //渐变，speed参数必须，代表速度可取"slow"、"fast" 或毫秒值；opacity参数必须，代表透明度可取介于 0 与 1 之间的值；callback参数可选
```

### 2.3 滑动

```javascript
$(selector).slideDown(speed, callback); //向下滑动元素。speed参数可选，代表速度可取"slow"、"fast" 或毫秒值；callback参数可选
$(selector).slideUp(speed, callback); //向上滑动元素。speed参数可选，代表速度可取"slow"、"fast" 或毫秒值；callback参数可选
$(selector).slideToggle(speed, callback); //向上滑动元素和向下滑动元素切换。speed参数可选，代表速度可取"slow"、"fast" 或毫秒值；callback参数可选
```

### 2.4 动画

```javascript
$(selector).animate({ params }, speed, callback); //params 参数必须，代表要定义形成动画的CSS 属性；speed参数可选，代表速度可取"slow"、"fast" 或毫秒值；callback参数可选
//例子：
$("button").click(function () {
  $("div").animate({
    left: "250px",
    opacity: "0.5",
    height: "150px",
    width: "150px",
  });
});
//逐一执行，动态的
$(document).ready(function () {
  $("button").click(function () {
    var div = $("div");
    div.animate({ height: "300px", opacity: "0.4" });
    div.animate({ width: "300px", opacity: "0.8" });
    div.animate({ height: "100px", opacity: "0.4" });
    div.animate({ width: "100px", opacity: "0.8" });
  });
});
```

### 2.5 停止效果/动画

```javascript
$(selector).stop(stopAll, goToEnd); //可以停止正在滑动、淡入淡出和自定义动画等效果。stopAll参数可选，代表是否应该清除动画队列，默认是false；goToEnd参数可选，代表是否立即完成当前动画，默认是 false；
$("#start").click(function () {
  //开始动画
  $("div").animate({ left: "100px" }, 5000);
  $("div").animate({ fontSize: "3em" }, 5000);
});
$("#stop").click(function () {
  $("div").stop(); //不清除队列动画、不立即完成当前动画，也就是停止当前动画但可以继续执行队列后面的动画
});
$("#stop2").click(function () {
  $("div").stop(true); //清除队列动画、不立即完成当前动画，也就是停止当前动画也不可以继续执行队列后面的动画
});
$("#stop3").click(function () {
  $("div").stop(true, true); //清除队列动画、立即完成当前动画，也就是立即完成当前动画但不可以继续执行队列后面的动画
});
```

### 2.6 Chaining

&nbsp;&nbsp;&nbsp;&nbsp;链接（chaining）技术，允许我们在相同的元素上运行多条 jQuery 命令，一条接着另一条。

```javascript
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```

## 3. HTML

### 3.1 获取和设置

&nbsp;&nbsp;&nbsp;&nbsp;text()设置或返回所选元素的文本内容，不包括 html 标签  
&nbsp;&nbsp;&nbsp;&nbsp;html()设置或返回所选元素的内容，包括 html 标签  
&nbsp;&nbsp;&nbsp;&nbsp;val()设置或返回表单字段的 value 值  
&nbsp;&nbsp;&nbsp;&nbsp;三个方法没有入参时是获取，有参数时是设置。  
&nbsp;&nbsp;&nbsp;&nbsp;三个方法同样拥有回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值

```javascript
$(document).ready(function () {
  $("#btn1").click(function () {
    $("#test1").text(function (i, origText) {
      alert("旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")");
    });
  });
  $("#btn2").click(function () {
    $("#test2").html(function (i, origText) {
      alert("旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")");
    });
  });
});
```

&nbsp;&nbsp;&nbsp;&nbsp;用 atr()设置属性值，可以设置多个属性，也可以只设置一个属性并给予回调函数

```javascript
$("button").click(function () {
  $("#w3s").attr({
    href: "//www.w3cschool.cn/jquery",
    title: "jQuery 教程",
  });
});
$("button").click(function () {
  $("#w3cschool").attr("href", function (i, origValue) {
    return origValue + "/jquery";
  });
});
```

### 3.2 添加元素

&nbsp;&nbsp;&nbsp;&nbsp;ppend()在被选元素内部的结尾插入指定内容  
&nbsp;&nbsp;&nbsp;&nbsp;prepend()在被选元素内部的开头插入指定内容  
&nbsp;&nbsp;&nbsp;&nbsp;append()和 prepend()可以插多个

```javascript
function appendText() {
  var txt1 = "<p>文本。</p>"; // 使用 HTML 标签创建文本
  var txt2 = $("<p></p>").text("文本。"); // 使用 jQuery 创建文本
  var txt3 = document.createElement("p");
  txt3.innerHTML = "文本。"; // 使用 DOM 创建文本 text with DOM
  $("body").append(txt1, txt2, txt3); // 追加新元素
}
```

&nbsp;&nbsp;&nbsp;&nbsp;after()在被选元素之后插入指定内容
&nbsp;&nbsp;&nbsp;&nbsp;before()在被选元素之前插入指定内容
&nbsp;&nbsp;&nbsp;&nbsp;after()和 before()可以插多个

```javascript
function afterText() {
  var txt1 = "<b>I </b>"; // 使用 HTML 创建元素
  var txt2 = $("<i></i>").text("love "); // 使用 jQuery 创建元素
  var txt3 = document.createElement("big"); // 使用 DOM 创建元素
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3); // 在图片后添加文本
}
```

### 3.3 删除元素

&nbsp;&nbsp;&nbsp;&nbsp;remove() - 删除被选元素（及其子元素）  
&nbsp;&nbsp;&nbsp;&nbsp;empty() - 从被选元素中删除子元素

### 3.4 CSS 类

&nbsp;&nbsp;&nbsp;&nbsp;addClass() - 向被选元素添加一个或多个类  
&nbsp;&nbsp;&nbsp;&nbsp;removeClass() - 从被选元素删除一个或多个类  
&nbsp;&nbsp;&nbsp;&nbsp;toggleClass() - 对被选元素进行添加/删除类的切换操作

### 3.5 css()方法

&nbsp;&nbsp;&nbsp;&nbsp;css()方法可以获取或者设置多个样式值
&nbsp;&nbsp;&nbsp;&nbsp;css("propertyname");//获取元素的 propertyname 的 value
&nbsp;&nbsp;&nbsp;&nbsp;css("propertyname","value");//为元素设置 propertyname 为 value 的样式

### 3.6 尺寸

&nbsp;&nbsp;&nbsp;&nbsp;width()获取元素的宽度  
&nbsp;&nbsp;&nbsp;&nbsp;height()获取元素的高度  
&nbsp;&nbsp;&nbsp;&nbsp;innerWidth()获取元素加内边距的宽度  
&nbsp;&nbsp;&nbsp;&nbsp;innerHeight()获取元素加内边距的高度  
&nbsp;&nbsp;&nbsp;&nbsp;outerWidth()获取元素加内边距加外边距的宽度  
&nbsp;&nbsp;&nbsp;&nbsp;outerHeight()获取元素加内边距加外边距 的高度

## 4. 遍历

### 4.1 祖先

&nbsp;&nbsp;&nbsp;&nbsp;parent()返回被选元素的直接父元素  
&nbsp;&nbsp;&nbsp;&nbsp;parents()返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (\<html>)  
&nbsp;&nbsp;&nbsp;&nbsp;parentsUntil()返回介于两个给定元素之间的所有祖先元素

### 4.2 后代

&nbsp;&nbsp;&nbsp;&nbsp;children()返回被选元素的所有直接子元素  
&nbsp;&nbsp;&nbsp;&nbsp;\$("div").find("span");//返回 div 的后代中所有的 span  
&nbsp;&nbsp;&nbsp;&nbsp;\$("div").find("\*");//返回 div 所有后代

### 4.3 同胞

&nbsp;&nbsp;&nbsp;&nbsp;siblings()返回被选元素的所有同胞元素，但不包括这个被选元素  
&nbsp;&nbsp;&nbsp;&nbsp;next()返回被选元素的下一个同胞元素  
&nbsp;&nbsp;&nbsp;&nbsp;nextAll()返回被选元素的所有跟随的同胞元素，但不包括这个被选元素  
&nbsp;&nbsp;&nbsp;&nbsp;nextUntil()返回介于两个给定参数之间的所有跟随的同胞元素，但不包括这两个元素  
&nbsp;&nbsp;&nbsp;&nbsp;prev()返回被选元素的上一个同胞元素  
&nbsp;&nbsp;&nbsp;&nbsp;prevAll()返回被选元素的所有上方的同胞元素，但不包括这个被选元素  
&nbsp;&nbsp;&nbsp;&nbsp;prevUntil()返回介于两个给定参数之间的所有跟随的同胞元素，但不包括这两个元素

### 4.4 过滤

```js
first(); // 返回第一个元素，类似$("ul li:first")
last(); // 返回最后一个元素
eq(); // 返回指定第几个元素，first()和last()都没有入参，但eq()有入参，就是返回指定位置参数
$("p").filter(".intro"); //返回带有类名"intro"的所有 <p> 元素
$("p").not(".intro"); //返回不带有类名 "intro" 的所有 <p> 元素
```

## 5. jQuery Ajax

### 5.1 load()方法

&nbsp;&nbsp;&nbsp;&nbsp;load() 方法从服务器加载数据，并把返回的数据放置到指定的元素中  
&nbsp;&nbsp;&nbsp;&nbsp;\$(selector).load(url,data,function(response,status,xhr)) //URL 必须，data 可选代表入参，回调函数可选

```javascript
$("button").click(function () {
  $("#div1").load("demo_test.txt", function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success") alert("External content loaded successfully!");
    if (statusTxt == "error") alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});
```

### 5.2 get()和 post()方法

&nbsp;&nbsp;&nbsp;&nbsp;\$.get(URL,data,function(data,status,xhr),dataType)//URL 必须，data 可选

1. dataType 规定预期的服务器响应的数据类型，如下几种：

   - "xml" - 一个 XML 文档
   - "html" - HTML 作为纯文本
   - "text" - 纯文本字符串
   - "script" - 以 JavaScript 运行响应，并以纯文本返回
   - "json" - 以 JSON 运行响应，并以 JavaScript 对象返回
   - "jsonp" - 使用 JSONP 加载一个 JSON 块，将添加一个 "?callback=?" 到 URL 来规定回调

2. function(data,status,xhr)当请求成功时运行的函数

- data - 包含来自请求的结果数据
- status - 包含请求的状态（"success"、"notmodified"、"error"、"timeout"、"parsererror"）
- xhr - 包含 XMLHttpRequest 对象
- \$(selector).post(URL,data,function(data,status,xhr),dataType) //参数同 get()方法

### 5.3 ajax()方法

&nbsp;&nbsp;&nbsp;&nbsp;ajax()方法用于执行 AJAX（异步 HTTP）请求，所有的 jQuery AJAX 方法都使用 ajax() 方法，\$.ajax({name:value, name:value, ... })

```javascript
$(document).ready(function () {
  $("button").click(function () {
    $.ajax({
      url: "demo_ajax_load.txt",
      async: false,
      success: function (result) {
        $("div").html(result);
      },
    });
  });
});
```
