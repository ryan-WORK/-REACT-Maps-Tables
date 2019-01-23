import React, {Component} from 'react';
import '../assets/Todo.css';
import axios from "axios";
import TodoRows from "./TodoRows";


export default class TodosTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [],
    };


    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/`)
      .then(res => {
        const todos = res.data;
        this.setState({ todos });
          console.log(this.state);
      })
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.todos];
    arrayCopy.sort(this.compareBy(key));
    this.setState({todos: arrayCopy});
  }

  render() {
    const todoRows = this.state.todos.map((rowInfo, k)=> {
        return (
            <TodoRows key={k} id={rowInfo.id} title={rowInfo.title} body={rowInfo.body}/>
        )
    });

    return (
      <div className="table">
        <div className="header">
          <div onClick={() => this.sortBy('id')} ><a href="#project" className="btn btn--svg js-animated-button"><span
              className="btn---svg__label">ID!</span>
              <svg width="190" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60"
                   className="btn---svg__circle">
                  <circle fill="#FFFFFF" cx="30" cy="30" r="28.7" className="js-discover-circle"/>
              </svg>
              <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="2 29.3 56.9 13.4"
                   enableBackground="new 2 29.3 56.9 13.4" width="190" className="btn--svg__border">
                  <g id="Calque_2" className="btn--svg__border--left js-discover-left-border">
                      <path fill="none" stroke="#FFF" strokeWidth="0.5" strokeMiterlimit="1"
                            d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"/>
                  </g>
                  <g id="Calque_3" className="btn--svg__border--right js-discover-right-border">
                      <path fill="none" stroke="#FFF" strokeWidth="0.5" strokeMiterlimit="1"
                            d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"/>
                  </g>
              </svg>
          </a>
          </div>
          <div onClick={() => this.sortBy('title')}>
              <a href="#project" className="btn btn--svg js-animated-button"><span
              className="btn---svg__label">Title !</span>
              <svg width="190" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60"
                   className="btn--svg__circle">
                  <circle fill="#FFFFFF" cx="30" cy="30" r="28.7" className="js-discover-circle"/>
              </svg>
              <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="2 29.3 56.9 13.4"
                   enableBackground="new 2 29.3 56.9 13.4" width="190" className="btn--svg__border">
                  <g id="Calque_2" className="btn--svg__border--left js-discover-left-border">
                      <path fill="none" stroke="#FFF" strokeWidth="0.5" strokeMiterlimit="1"
                            d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"/>
                  </g>
                  <g id="Calque_3" className="btn--svg__border--right js-discover-right-border">
                      <path fill="none" stroke="#FFF" strokeWidth="0.5" strokeMiterlimit="1"
                            d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"/>
                  </g>
              </svg>
          </a>
          </div>
          <div onClick={() => this.sortBy('body')}>
              <a href="#project" className="btn btn--svg js-animated-button"><span
              className="btn---svg__label">Body!</span>
              <svg width="190" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60"
                   className="btn--svg__circle">
                  <circle fill="#FFFFFF" cx="30" cy="30" r="28.7" className="js-discover-circle"/>
              </svg>
              <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="2 29.3 56.9 13.4"
                   enableBackground="new 2 29.3 56.9 13.4" width="190" className="btn--svg__border">
                  <g id="Calque_2" className="btn--svg__border--left js-discover-left-border">
                      <path fill="none" stroke="#FFF" strokeWidth="0.5" strokeMiterlimit="1"
                            d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"/>
                  </g>
                  <g id="Calque_3" className="btn--svg__border--right js-discover-right-border">
                      <path fill="none" stroke="#FFF" strokeWidth="0.5" strokeMiterlimit="1"
                            d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"/>
                  </g>
              </svg>
          </a>
          </div>
        </div>
        <div className="body">
          {todoRows}

        </div>
        <h1>Simple Read And Sort From The API!</h1>
      <h1>Click The Titles To Sort!</h1>
      </div>
    );

  }
}