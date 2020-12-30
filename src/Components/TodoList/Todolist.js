import React, {Component} from 'react';
import TodoListItem from "../TodoListItem";

class Todolist extends Component {
    render() {
        const {todoList, deleteTodoItem} = this.props;
        return (
            <ul className="list-group">
                {todoList.map(({id, text}) => <TodoListItem key={id} todo={text} deleteTodoItem={() => {
                    deleteTodoItem(id);
                }}/>)}
            </ul>
        );
    }
}

export default Todolist;