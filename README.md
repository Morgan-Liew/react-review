# <img src="./src/assets/react.png" alt="react" style="zoom: 16%;" /> **React 复习**

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

+ ### state
  #### 理解
  
      1).state是组件对象最重要的属性，值是对象(可包含多个key-value的组合)
      2).组件被称为状态机，通过更新组件的state来更新对象的页面显示(重新渲染组件)
  
  #### 注意
      1.组件中render方法中的this为组件实例对象
      2.组件自定义的方法中this为undefined
        解决 => 
            a.强制绑定this => 通过函数对象的bind()
            b.箭头函数
      3.状态数据，不能直接修改或更新，要用setState

+ ### props
  #### 理解
  
       1).每个组件对象都会有props属性
       2).组件标签的所有属性都保存在props中

  #### 作用
       1). 通过标签属性从组件外箱组件内传递变化的数据
       2). 注意 组件内部不要修改props

  #### 编码操作 
       1).内部读取某个属性值
      
          this.props.name
       
       2).对props中的属性值进行类型限制和必要性限制
          
          Person.propTypes = {
            name:React.PropTypes.string.isRequired
          }
      
       3).扩展属性 : 将对象的所有属性通过props传递
          
          <Person {...person}/>
      
       4).默认属性值
      
          Person.defaultProps = {
            age:18,
            sex:'male'
          }
      
       5).组件类构造函数
          
          constructor(props){
            super(props); // 有构造器必填
            ...
          }
  
+ ### refs 与 事件处理
  #### 理解
      组件内的标签可以定义ref属性来标识自己

  #### 编码
      1) 字符串形式的 ref  =>  存在效率问题，且过时
      
           <input ref="input1" />
      
      2) 回调形式的 ref
      
           <input ref={(c) => {this.input1 = c}} />
         
         产生问题：
            更新过程中会被执行两次，第一次传入参数null，第二次会传入参数DOM元素
            通过将ref的回调函数定义成class的绑定函数的方式可避免该问题
      
      3) createRef 创建 ref 容器
      
            myRef = React.createRef()
            <input ref={this.myRef} />

  #### 事件处理
      1) 通过 onXxx 属性指定事件处理函数（注意大小写）
         
         a. React 使用的是自定义（合成）事件，而不是使用的原生DOM事件
         b. React 中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
      
      2) 通过 event.target 得到发生事件的DOM元素对象
### 受控和非受控组件

#### 受控组件
    数据输入改变状态
#### 非受控组件
    数据自取自用，无状态上改变

### 生命周期函数
#### 理解
    1.组件对象从创建到死亡会经历特定阶段
    2.React组件包含一系列钩子函数(生命周期回调函数)，在特定的时刻调用
    3.在定义组件时，在特定的生命周期回调函数中做特定的工作


#### 组件生命周期 (旧)
![alt 组件生命周期 (旧)](./src/assets/组件生命周期%20(旧).png)
1. **初始化阶段：** 由ReactDOM.render触发---初次渲染

   
      1.constructor  
      2.componentWillMount  
      3.render   
      4.componentDidMount

2. **更新阶段：** 由组件内部this.setState或父组件重新render触发


      1.shouldComponentUpdate
      2.componentWillUpdate
      3.render
      4.componentDidUpdate

3. **卸载组件：** 由ReactDOM.unmountComponentAtNode触发


      componentWillUnmount

#### 组件生命周期 (新)
![alt 组件生命周期 (新)](./src/assets/组件生命周期%20(新).png)

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
> **Author :**  Morgan.Liew   
> **Email :**  morgan_liew@qq.com   
> **CreateTime :**  2021-08-18 15:34
> **Last UpdateTime :**  2021-08-27 16:48
> **Lastest UpdateTime :**  2021-08-30 17:11

---
---

## React Cli init content

---
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
