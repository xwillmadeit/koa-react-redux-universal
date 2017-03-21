# Server Side Rendering React w/ Koa

## 开发模式

```js 
npm run dev
```

## 前后端分离／react 同构资料
* https://feclub.cn/post/content/qudian_koa
* https://ruby-china.org/topics/29835
* http://www.aliued.com/?p=3077

## 遇到的一些问题

* 使用 webpack-isomorphic-tools 时，不能在开发模式使用 extract-text-webpack-plugin，否则 webpack-isomorphic-tools 会找不到 styles 文件

* 使用 Class properties transform 时候，eslint 报错 Parsing error: Unexpected token =
解决：使用 babel-eslint

## Something important

* 在服务端启动时指定 NODE_ENV=prodction 可以避免 react 在开发模式下的各种错误检查，提高性能
https://www.youtube.com/watch?v=PnpfGy7q96U&t=341s
