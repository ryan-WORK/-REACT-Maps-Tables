import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class TodoRows extends Component {
    constructor(props){
        super(props);
        this.state = {
            getItem: props.id,
        }
    }
    render() {
        return (
            <div className="row" key={this.props.k}>
                <div>{this.props.id} link: <Link to={`read/todo/${this.state.getItem}`}> Here</Link> </div>
    <div>{this.props.title} <br/> </div>
    <div>{this.props.body}</div>
            </div>
        );
    }
}



