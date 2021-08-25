import React, {Component} from 'react';
import "./index.css";

// 1.创建组件
export default class Weather extends Component {

    constructor(props) {
        super(props);
        // 初始化状态
        this.state = {isHot: false}
    }

    demo = () => {
        alert('The Weather Component is clicked!!!')
    }

    changeWeather = () => {
        console.log('isHot: ' + this.state.isHot)
    }

    render() {
        console.log(this);
        // 读取状态
        const {isHot} = this.state;
        return (
            <div className="weather" onClick={this.changeWeather}>
                <h3>Today is {isHot ? 'Hot' : 'Cold'}!</h3>
            </div>
        );
    }
}

