var React = require('react');
var TodoStore = require('../stores/todo_store.js');


var TodoForm = React.createClass({
  getInitialState: function () {
    return ({
      title: "",
      body: ""
    });
  },

  titleDidChange: function (e) {
    this.setState({title: e.target.value});
  },

  bodyDidChange: function (e) {
    this.setState({body: e.target.value});
  },

  submit: function(e) {
    e.preventDefault();
    var todo = {
      todo: {
        title: this.state.title,
        body: this.state.body
      }
    };
    TodoStore.create(todo);
  },

  render: function () {
    return (
      <form onSubmit={this.submit}>
        <label>Title
          <input className="form-title"
                 onChange={this.titleDidChange}
                 value={this.state.title} />
        </label>
        <label>Body
           <input className="form-body"
                  onChange={this.bodyDidChange}
                  value={this.state.body} />
        </label>

        <button>Submit</button>
      </form>
    );
  }
});

module.exports = TodoForm;
