import React,{Component} from 'react';
// 引入prop-types
// import PropTypes from 'prop-types';
import "./index.css";

export default class Person extends Component {

   // 对标签属性进行类型、必要性的限制
   /* static propTypes = {
        name:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired
    }*/

    // 指定默认标签属性值
    /*static defaultProps = {

    }*/

    state={
        updateTime:new Date()
    }

    render() {
        console.log(this);
        const {updateTime} = this.state;
        const {name,email} = this.props;
        return (
            <ul className="person" >
                <h3>Person</h3>
                <li>name: {name}</li>
                <li>email: {email}</li>
                <li>creatTime: {updateTime.toLocaleString()}</li>
                <Person2 name={'morgan'} sex={'male'} age={25}/>
            </ul>
        );
    }
};

// Person.propTypes = {
//     name:PropTypes.string.isRequired,
// }

// 函数式组件使用props
function Person2(props) {
    const {name,age,sex} = props;
    return (
        <ul className="person2">
            <h3>Person2</h3>
            <li>name:{name}</li>
            <li>sex:{sex}</li>
            <li>age:{age}</li>
        </ul>
    );
}

