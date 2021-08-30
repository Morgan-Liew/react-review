import React, {Component} from 'react';
import "./index.css";

export default class RefDemo extends Component {

    /*
    *  React.createRef 调用后可以返回一个容器，该容器可以存储被ref所标识的节点
    * */
    myRef = React.createRef()

    // 展示左侧输入框的数据
    showData = () => {
        // console.log('@');
        // console.log(this);

        // const {input1} = this.refs;
        // const {input1} = this;
        // alert(input1.value);
        alert(this.myRef.current.value);
    }

    // 展示右侧输入框的数据
    showData2 = () => {
        // const {input2} = this.refs;
        const {input2} = this;
        alert(input2.value);
    }

    /*input1 = (ref) => {
        this.input1 = ref;
    }*/

    render() {
        return (
            <div className="ref-demo">
                <h2>RefDemo</h2>
                {/*字符串类型ref*/}
                {/*<input ref="input1" type="text" placeholder="点击按钮提示数据"/>&nbsp;*/}

                {/*回调函数形式ref*/}
                {/*<input ref={(ref) => {this.input1 = ref}} type="text" placeholder="点击按钮提示数据"/>&nbsp;*/}
                {/*<input ref={this.input1} type="text" placeholder="点击按钮提示数据"/>&nbsp;*/}

                {/*createRef形式创建ref*/}
                <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;

                {/**/}
                <button onClick={this.showData}>click me</button>&nbsp;
                {/*<input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>*/}
                <input ref={ref => this.input2 = ref} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
            </div>
        );
    }
};

