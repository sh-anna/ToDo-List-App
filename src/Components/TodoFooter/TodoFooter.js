import React, {Component} from 'react';

class TodoFooter extends Component {
    state = {
        todoText: '',
    };

    onChangeInputTodoList = ({target: {value}}) => {
        this.setState({todoText: value});
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const {todoText} = this.state;
        this.props.onAddItem(todoText);
        this.setState({todoText: ''});
    }

    render() {
        const {todoText} = this.state;
        return (
            <form className="input-group my-2" onSubmit={this.onSubmitForm}>
                <input type="text" className="form-control" placeholder="הקלד את המשימה" value={todoText}
                       onChange={this.onChangeInputTodoList}/>
                <button className="btn btn-outline-primary" type="submit">הוסף</button>
            </form>
        );
    }
}

export default TodoFooter;