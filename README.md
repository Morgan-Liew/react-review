# React 复习

### 简介
    用于构建用户界面的JavaScript库
    由Facebook开发，且开源

### 原生JS痛点
    操作DOM繁琐，效率低
    直接操作DOM，浏览器会进行大量重绘重排
    没有组件化编码方案，代码复用率低2

### React特点
    采用组件化模式，声明式编码，提高开发效率和组件复用率
    在React Native中可以使用React进行移动端开发
    使用虚拟DOM和优秀的diffing算法，尽量减少与真实DOM的交互

### 虚拟DOM 
    本质是Object类型的对象
    虚拟DOM较轻，真实DOM较重
    最终会转化为真实DOM，呈现在页面中

### JSX -> JavaScript XML
    一种类似于XML的JS的扩展语法
    本质 是React.createElement(components,props.,..children)方法 的一个语法糖
    作用：用来简化创建虚拟DOM
    
    语法规则
        定义DOM时，不要写引号
        标签中混入JS表达式要用 { }
        样式类名用 className
        内联样式 style = {{ }}
        只能有一个根标签
        标签必须闭合
        组件开头字母大写

### 模块和组件定义
#### 模块
    向外提供特定的JS程序，一般就是一个JS文件
    作用：复用JS，简化JS编写，提高JS运行效率
#### 模块化
    当应用都是由JS编写的
#### 组件
    用来实现局部功能的代码和资源的集合
    作用：复用编码，简化项目编码，提高运行效率
#### 组件化
    当应用以多组件方式实现

### 组件
#### 函数式组件
     当应用以多组件方式实现
     必须有返回值
     首字母必须大写
     this -> undefined，因为babel编译后执行严格模式

#### 类式组件
     必须继承Component
     必须有render
     必须有返回值
     this => 该组件的实例对象
     
### State & Props & Refs 

### 生命周期函数

### React Cli
    start： 开启服务器
    build： 生成静态产品
    test：测试
    eject：暴露原配置，无法回退

#### 项目结构
    public --- 静态资源文件夹
        favicon.icon 网站页签图标
        index.html   主页面
        logo192/logo512
        manifest.json 应用加壳的配置文件
        robots.txt    爬虫协议文件

    src --- 源码文件夹
        App.css      App组件的样式
        App.js       App组件
        App.test.js  用于给App做测试
        index.css    样式
        index.js     入口文件

### React.Router 

### Redux

### Ant-design（antd） 
    由蚂蚁金服开发的免费的React UI组件库

### Hooks 

### Fragments

### Context 

### PureComponent 

### renderProps 

### ErrorBoundary 

---
    Author:Morgan.Liew 
    Email:morgan_liew@qq.com
    CreateTime: 2021-08-18
---
## React Cli init content
### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
