# Next.js

> [Next.js](https://nextjs.org/learn/basics/getting-started) --- 是一个流行的、轻量级的框架，用于配合 React 打造静态化和服务端渲染应用。它包括开箱即用的样式和路由方案，并且假定你使用 Node.js 作为服务器环境。

## 资料

* [learnnextjs-cn-docs](https://github.com/developerworks/learnnextjs-cn-docs) --- 中文文档
* [Express](http://www.expressjs.com.cn/4x/api.html)

## Demo

#### Demo1: 学习官方文档

```bash
cd ./01-hello-next
npm install

# 启动
npm run dev

# 部署
npm run build

# 修改 package.json
"scripts": {
  "start": "next start -p $PORT"
}

# Start
PORT 8000 npm start
```

- [x] 入门
- [x] 页面之间的导航
- [x] 使用共享组件
- [x] 创建动态页面
- [x] 使用路由掩码创建干净的URL
- [x] 干净URL的服务器端支持
- [x] 为页面获取数据 --- 特性：**通用数据获取**和**服务端渲染（SSR）**
- [x] 组件样式
- [x] 部署