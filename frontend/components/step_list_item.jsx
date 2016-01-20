var React = require('react');
var StepDoneButton = require('./step_done_button');

var StepListItem = React.createClass({
  render: function () {
    return (
      <div className="step-list-item">
          <p>{this.props.step.description}</p>
          <StepDoneButton step={this.props.step} todo_id={this.props.todo_id}/>
      </div>
    );
  }
});

module.exports = StepListItem;
