import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import TodoHeader from "../TodoHeader";
import Todolist from "../TodoList/Todolist";
import TodoFooter from "../TodoFooter/TodoFooter";
import './App.css';

class App extends Component {
    #lastKey = 100;

    state = {
        todos: [],
        search: '',
    };

    addToTodoList = (text) => {
        this.setState((state) => {
            const todos = [...state.todos];
            todos.push({id: this.#lastKey++, text});
            localStorage.setItem('todolist', JSON.stringify(todos));
            localStorage.setItem('lastkey', this.#lastKey);
            return {todos};
        });
    };

    onSearch = (search) => {
        this.setState({search: search.toLowerCase()});
    };

    componentDidMount() {
        const todos = JSON.parse(localStorage.getItem('todolist'));
        this.#lastKey = localStorage.getItem('lastkey');
        this.setState({todos});
    };

    deleteTodoItem = (deleteId) => {
        this.setState(state => {
            const todos = [...state.todos].filter(({id}) => id !== deleteId);
            return {todos};
        })
    };

    render() {
        const {todos, search} = this.state;
        const todolist = todos.filter(todo => todo.text.toLowerCase().includes(search));
        return (
            <div className="container mt-3">
                <div className="card">
                    <header className="card-header">
                        <TodoHeader onSearch={this.onSearch}/>
                    </header>
                    <main className="card-body">
                        <Todolist todoList={todolist} deleteTodoItem={this.deleteTodoItem}/>
                    </main>
                    <footer className="card-footer">
                        <TodoFooter onAddItem={this.addToTodoList}/>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;