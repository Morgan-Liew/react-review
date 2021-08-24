import React from "react";
import "./index.css";

// 创建函数式组件

export default function Function() {
  console.log(this); // this - undefined，因为babel编译后执行严格模式
  // 必须有返回值
  return (
    <div className="function">
      <h3>这是一个函数式组件</h3>
    </div>
  );
}

/* ReactDOM.render
    1.解析组件标签，找到Function组件
    2.发现组件是函数式组件，调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中
*/
