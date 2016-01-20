var React = require('react');
var StepListItem = require('./step_list_item');

var StepList = React.createClass({
  render: function () {
    var steps = [];
    Object.keys(this.props.steps).forEach(function(id) {
      var step = <StepListItem key={id}
                               step={this.props.steps[id]}
                               todo_id={this.props.todo_id}/>;
      steps.push(step);
    }.bind(this));
    return (
      <div className="step-list">
        {steps}
      </div>
    );
  }
});

module.exports = StepList;
