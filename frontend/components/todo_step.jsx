var React = require('react');
var TodoStore = require('../stores/todo_store');


var TodoStep = React.createClass({
  render: function () {
    return(
      <li>
        {this.props.step.description}
      </li>
    )
  }
});





module.exports = TodoStep;
