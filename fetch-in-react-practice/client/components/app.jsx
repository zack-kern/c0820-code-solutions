import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  addTodo(newTodo) {
    /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * add the created todo to the state array.
     *
     * TIP: Be sure to SERIALIZE the todo in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        // get a copy of the original array in state
        const updatedTodos = [...this.state.todos];
        // add the created todo to it
        updatedTodos.push(data);
        // setState to trigger re-render
        this.setState({ todos: updatedTodos });
      });
  }

  toggleCompleted(todoId) {
    /**
       * Find the index of the matching todo in the state array.
       * Find its "isCompleted" status.
       * Make a new Object containing the opposite "isCompleted" status.
       * Use fetch to send a PATCH request to `/api/todos/${todoId}`
       * Then 😉, once the response JSON is received and parsed,
       * replace the old todo in state.
       *
       * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
       * And specify the "Content-Type" header as "application/json"
       *
       */
    var mySpecificItem = this.state.todos;
    var myNewSpecificItem = [...mySpecificItem];
    myNewSpecificItem = myNewSpecificItem.find(myNewSpecificItem => myNewSpecificItem.id === todoId);
    // var stat = mySpecificItem.isCompleted;
    var daId = myNewSpecificItem.isCompleted;
    if (daId) {
      daId = false;
    } else {
      daId = true;
    }
    myNewSpecificItem.isCompleted = daId;
    mySpecificItem.map(x => x);
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isCompleted: daId
      })
    })
      .then(response => response.json())
      .then(data => this.setState({ data, toggleCompleted: true }))
      .catch(error => {
        console.error('Errz', error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
