import React,{ Component } from 'react';
import { Input, Button } from 'antd';

class AntdUi extends Component{
    render(){
        return (
            <div>
                <Input placeholder='todoinfo' style={{"width":"300px","marginRight":"10px"}} />
                <Button type="primary">Primary</Button>
            </div>
        )
    }
}
export default AntdUi;