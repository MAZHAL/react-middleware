import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
    static propTypes = {
        test:PropTypes.string.isRequired,
        item:PropTypes.string,
        deleteItem:PropTypes.func,
        index:PropTypes.number
    };

    static defaultProps ={
        test:'ssss'
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content) {
            return true;
        }
            return false;
    }

    render() {
        return (
            <li onClick={() => this.handleClick()}>{this.props.item}</li>
        )
    }
}

export default TodoItem;