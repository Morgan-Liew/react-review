import React, {Component} from 'react';
import "./index.css";


export default class Login extends Component {

    // 初始化状态
    state = {
        username:'',
        password:''
    }

    // 保存用户名到状态中
    saveUsername = (event) =>{
        this.setState({username:event.target.value});
    }
    // 保存密码到状态中
    savePassword = (event) =>{
        this.setState({password:event.target.value});
    }


    handleSubmit = (event) => {
        event.preventDefault(); // 阻止表单提交
        // 非受控组件
        // const {username,password} = this;
        // alert(`输入用户名： ${username.value},输入密码为：${password.value}`)

        // 受控组件
           const {username,password} = this.state;
           alert(`输入用户名： ${username},输入密码为：${password}`)
    }

    render() {
        return (
            <div className="login">
                <h3>Login component</h3>
                <form onSubmit={this.handleSubmit}>
                    {/*用户名：<input type="text" ref={c => this.username = c} name="username"/> &nbsp;*/}
                    {/*密 码：<input type="password" ref={c => this.password = c} name="password"/> &nbsp;*/}
                    用户名：<input type="text" onChange={this.saveUsername} name="username"/> &nbsp;
                    密 码：<input type="password" onChange={this.savePassword} name="password"/> &nbsp;
                    <button>登录</button>
                </form>
            </div>
        );
    }
}

