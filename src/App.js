import React, {Component, Fragment} from 'react';
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import  './css/index.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleAddToggle =  this.handleAddToggle.bind(this);
    }
    handleAddToggle(){
        this.setState((prevState) => ({
            list:[...prevState.list,'item']
        }))
    }
    render(){
        return (
            <Fragment>
                {/*<CSSTransition
                    in={this.state.show}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                    appear={true}
                    onEntered={(el)=>{el.style.color='blue'}}
                >*/}
                <TransitionGroup>
                    {this.state.list.map((item, index)=>{
                        return(
                            <CSSTransition
                                in={this.state.show}
                                timeout={300}
                                classNames="fade"
                                unmountOnExit
                                appear={true}
                                onEntered={(el)=>{el.style.color='blue'}}
                                key={index}
                            >
                                <div >{item}</div>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>

                    <button onClick={this.handleAddToggle}>toggle</button>
            </Fragment>
        )
    }
}
export default App;