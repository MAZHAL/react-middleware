import React, {Component} from 'react';
import store from './store/store';
import {
    getInputChangeAction,
    addListItemAction,
    delListItemAction,
    getListData,
    initListAction,
    getInitList
} from './store/actionCreators';
import ReduxUi from './reduxUi/ReduxUi';

class ReactRedux extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        store.subscribe(this.handleInputChange);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
    }
    handleInputValue(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleInputChange(){
        this.setState(() =>(store.getState()))
    }
    handleClick() {
        const action = addListItemAction([...this.state.list, this.state.inputValue]);
        store.dispatch(action);
    }
    handleClickItem(index){
        const state = [...this.state.list];
        state.splice(index,1);
        const action = delListItemAction(state);
        store.dispatch(action);
    }
    componentDidMount(){
        // const action =  getListData();
        // store.dispatch(action);

       const action = getInitList();
       store.dispatch(action);
    }
    render(){
        return(
            <ReduxUi
                inputValue={ this.state.inputValue}
                handleClick={this.handleClick}
                handleInputValue={this.handleInputValue}
                list={this.state.list}
                handleClickItem={this.handleClickItem}
            />
        )
    }
}

export default ReactRedux;
