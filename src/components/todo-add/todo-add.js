import React from "react";

import './todo-add.css';

class TodoAdd extends React.Component {
    state ={
        text:''
    }
    render() {
    return (
        <form id='form' onSubmit={(event) => {
            const {onAdd} = this.props;

            onAdd(this.state.text)
            this.setState({text:''})
            event.preventDefault()
        }}>
            <input
                id='btn'
                className='form-control search-input'
                onChange={(event) =>
                    this.setState({text: event.target.value})}
                type="text"
                value={this.state.text}
            />
            <input id="btn2" type="submit" value='Send'/>
        </form>
    )}
}


export default TodoAdd;