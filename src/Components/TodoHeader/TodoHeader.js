import React, {Component} from 'react';
import './TodoHeader.css';

class TodoHeader extends Component {
    state = {
        search: '',
    }

    onSearchInputChange = ({target: {value}}) => {
        this.setState({search: value});
        this.props.onSearch(value);
    }

    render() {
        const {search} = this.state;
        return (
            <div className="row py-2">
                <div className="col-6">
                    <h1 className="text-primary">רשימה משימות</h1>
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="חיפוש" value={search}
                           onChange={this.onSearchInputChange}/>
                </div>
            </div>
        );
    }
}

export default TodoHeader;