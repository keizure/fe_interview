## POST\GET的区别
### GET
- 受URL最大长度限制（2048）
### POST
- 参数长度有限制

## 同源策略
> [浏览器同源策略及规避方法](https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)  

如果两个URL的 **协议**,**端口**,**host**(包括一二三级域名) 都相同的话，则这两个URL同源。
### 受限制的行为
1. Cookie、LocalStorage 和 IndexDB 无法读取
2. DOM 无法获得
3. Ajax 请求不能发送

### Cookie
Cookies 使用不同的源定义方式。一个页面可以为本域和其父域设置 cookie，只要是父域不是公共后缀（public suffix）即可。
两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置document.domain共享 Cookie。(同样适用于iframe)
```js
// site A http://w1.example.com/a.html
document.domain = 'example.com'
// site B http://w2.example.com/a.html
document.domain = 'example.com'
```
### 解决跨域窗口通信问题
- 片段识别符（fragment identifier）
- window.name
- 跨文档通信API（Cross-document messaging）
#### 1. 片段识别符
及URL `#` 后面的部分，可以通过改变对应窗口的hash部分，同时监听haschange时间，就可以传递消息。
#### 2. window.name
#### 2. window.postMessage

### AJAX
跨域方法主要有：
- JSONP
- WebSocket
- CORS
#### 1. JSONP
#### 2. WebSocket
#### 3. CORS

## HTTP/2
### server push
## HTTPS