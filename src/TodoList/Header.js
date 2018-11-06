import React, {Component, Fragment} from 'react';
import { Input, Button } from 'antd';
class Header extends Component{
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.listChange = this.listChange.bind(this);
    }
    inputChange(e) {
       this.props.inputChange(e)
    }
    listChange(e) {
        this.props.listChange(e)
    }
    render (){
        return (
                <Fragment>
                    <label htmlFor="aaa">请输入密码</label>
                    <input id={'aaa'} type="text"
                           onChange={this.inputChange}
                           value={this.props.value}
                    />
                    <button onClick={this.listChange}>提交</button>
                </Fragment>
        );
    }
}
export default Header;