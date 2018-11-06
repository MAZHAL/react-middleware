import React, {Component, Fragment} from 'react';
import TodoItem from './TodoList/TodoItem';
import Header from './TodoList/Header';
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import { DatePicker } from 'antd';
import axios from 'axios';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            list: [],
        };
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleListChange = this.handleListChange.bind(this);
        this.handleList = this.handleList.bind(this);
    }
    handleInputChange(e) {
       const value = e.target.value;
       this.setState((e)=>({inputVal:value}));
    }
    handleListChange(){
        this.setState(
            (prevState)=>({
                list:[...prevState.list, prevState.inputVal],
                inputVal:''
            })
        );
    }
    handleList(){
        return this.state.list.map((value, index) =>
            <CSSTransition
                timeout={300}
                classNames="fade"
                unmountOnExit
                appear={true}
                onEntered={(el)=>{el.style.color='blue'}}
                key={index}
            >
            <TodoItem
                deleteItem={this.handleDeleteItem}
                key={index}
                index={index}
                item={value}/>
            </CSSTransition>
        );
    }
    handleDeleteItem(index){
        this.setState((prevState) => {
            const list =[...prevState.list];
            list.splice(index,1);
            return { list }
        })
    }
    componentDidMount(){
       /* axios.get('api/todolist').then((res) => {
            console.log(res);
        }).catch(function(res){
            console.log(res)
        });
        console.log(axios);*/
    }

    render() {
        return (
            <Fragment>
                <header>
                    <Header
                        listChange={this.handleListChange}
                        inputChange={this.handleInputChange}
                        value={this.state.inputVal} />
                </header>
                <ul>
                    <TransitionGroup>
                        { this.handleList() }
                    </TransitionGroup>
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
