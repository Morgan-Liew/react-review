import React, {Component} from 'react';
import "./index.css";

export default class Person extends Component {

    state={
        updateTime:new Date()
    }



    render() {
        console.log(this);
        const {updateTime} = this.state;
        return (
            <ul className="person" >
                <li>name: {this.props.name}</li>
                <li>email: {this.props.email}</li>
                <li>creatTime: {updateTime.toLocaleString()}</li>
            </ul>
        );
    }
}

