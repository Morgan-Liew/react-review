import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./index.css";

export default class Life extends Component {

    state = {opacity:1}

    death = () =>{
        // 卸载组件
        ReactDOM.unmountComponentAtNode(document.getElementById('text'))
    }

    // 组件挂载完毕
    componentDidMount() {
        this.timer = setInterval(() => {
            let { opacity } = this.state;
            opacity -= 0.1;
            if(opacity <= 0) opacity = 1;
            this.setState({opacity})
        },200)
    }

    // 组件将要卸载
    componentWillUnmount() {
        // 清除定时器
        clearInterval(this.timer);
    }

    render() {
        return (
            <div id='text' className="life">
                <h2 style={{opacity: this.state.opacity}}>React</h2>
                <button onClick={this.death}>click</button>
            </div>
        );
    }
};

