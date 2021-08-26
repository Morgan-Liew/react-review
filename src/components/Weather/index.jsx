import React, { Component } from "react";
import "./index.css";

// 1.创建组件
export default class Weather extends Component {
  /*只调用1次 
    constructor(props) {
    super(props);
    // 初始化状态
    this.state = { isHot: true };
  } */
  state = {
    isHot: true,
  };

  demo = () => {
    alert("The Weather Component is clicked!!!");
  };

  changeWeather = () => {
    // console.log('isHot: ' + this.state.isHot)
    let isHot = this.state.isHot;
    this.setState({isHot:!isHot} );
    /* 
        状态state不可直接更改，要用setState更新
        是一种合并，不是替换
    */
  };

  // render调用 1 + n 次，1为初始化，n为状态更新次数
  render() {
    console.log(this);
    // 读取状态
    let { isHot } = this.state;
    return (
      <div className="weather" onClick={this.changeWeather}>
        <h3>Today is {isHot ? "Hot" : "Cold"}!</h3>
      </div>
    );
  }
}
