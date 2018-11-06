import React, {Fragment} from 'react';
import {Input, Button, List} from 'antd';

const ReduxUi = (props) => {
    return(
        <Fragment>
            <div style={{"padding": "10px"}}>
                <Input value={props.inputValue}
                       placeholder={'请输入内容'}
                       style={{"width": "300px", "marginRight": "10px"}}
                       onChange={props.handleInputValue}
                />
                <Button type="primary" onClick={props.handleClick}>确定</Button>
            </div>
            <div style={{"padding": "10px"}}>
                <List
                    bordered
                    dataSource={props.list}
                    style={{"width":"300px"}}
                    renderItem={(item, index) => (
                        <List.Item onClick={
                            () => {props.handleClickItem(index)}
                        }>{item}</List.Item>
                    )}
                />
            </div>
        </Fragment>
    );
};

export default ReduxUi;