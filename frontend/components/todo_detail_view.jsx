var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoStep = require('./todo_step.jsx');
var StepStore = require('../stores/step_store');


var TodoDetailView = React.createClass({
  getInitialState: function () {
    return (
      { todoSteps: StepStore.all(this.props.todo.id) }
    );
  },

  handleDestroy: function (e) {
    e.preventDefault();
    TodoStore.destroy(this.props.todo.id);
  },

  componentDidMount: function () {
    StepStore.addChangedHandler(this.stepsChanged);
    StepStore.fetch(this.props.todo.id);
  },

  stepsChanged: function () {
    this.setState({todoSteps: StepStore.all(this.props.todo.id)});
  },

  render: function () {
    var steps = [];

    return (
      <div className="todo-details">
        <div className="body">
          {this.props.todo.body}
        </div>
        <button className="button delete-button"
                onClick={this.handleDestroy}>
                  Delete Todo
        </button>
        <ul>
          {steps}
        </ul>
      </div>
    );
  }
});

module.exports = TodoDetailView;
