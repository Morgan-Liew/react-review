import React, { Component } from 'react'
import "./index.css";

// 创建类式组件
export default class ClassDemo extends Component {
    
    // render => 类的原型对象上，供实例使用，由React虚拟DOM创建
    render() {
        console.log(this); // this => 该组件的实例对象
        return (
            <div className='classdemo'>
                <h3>这是一个类式组件</h3>
            </div>
        )
    }
}

/* ReactDOM.render
    1.解析组件标签，找到ClassDemo组件
    2.发现组件是类式组件，随后new出该类实例，并通过实例调用到原型的render方法
    3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中
*/

/* 类相关概念复习
   1.类中的构造器不是必须写的，要对实例进行一些初始化操作，如添加指定属性时才写
   2.关于super：
        如果A继承B，且A中写了构造器中，那么A中super必须调用
   3.类中所定义的方法，都是放在类的原型对象上，供实例使用
*/