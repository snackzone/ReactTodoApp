var React = require('react');
var TodoStore = require('../stores/todo_store');
var StepList = require('./step_list.jsx');


var TodoDetailView = React.createClass({
  getInitialState: function () {
    return (
      { steps: StepStore.all(this.props.todo.id) }
    );
  },

  stepsChanged: function () {
    this.setState({steps: StepStore.all(this.props.todo.id)});
  },

  componentDidMount: function () {
    StepStore.addChangedHandler(this.stepsChanged);
    StepStore.fetch(this.props.todo.id);
  },

  handleDestroy: function (e) {
    e.preventDefault();
    TodoStore.destroy(this.props.todo.id);
  },

  render: function () {
    return (
      <div className="todo-details">
        <div className="body">
          {this.props.todo.body}
        </div>
        <button className="button delete-button"
                onClick={this.handleDestroy}>
                  Delete Todo
        </button>
        <StepList todo_id={this.props.todo.id} steps={this.state.steps} />
      </div>
    );
  }
});

module.exports = TodoDetailView;
