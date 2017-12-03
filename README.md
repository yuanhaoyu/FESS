# FESS
一款在线前端错误监控的插件

## 功能
1. 接口传参监控
2. 接口返回监控
3. 报错信息收集

## How to use

1. 实例化
```
var fess = new FESS(url, rules, yourApiLists)
```
url: 为字符串，即你要监控的网址接口

rules: 为数组，里面存放你要监听的api函数名

yourApiLists: 为对象，即你所有的api

2. $install
```
var api = fess.$install(callback)
```
callback为可选，使用则按照你自己的方式对所有api的参数做统一处理，否则就使用默认的处理

3. $send
```javascript
fess.$send(data)
```

4. $sendErr
```javascript
fess.$sendErr(kind, lv, contents)
```