var _steps = {};
var _callbacks = [];

var StepStore = {
  all: function () {
    //is this dangerous?
    return _steps;
  },
  fetch: function (todoId) {
    $.ajax(
      {
        method: "GET",
        url: "/api/todos/" + todoId + "/todo_steps",
        dataType: "json",
        success: function (steps) {
          var newSteps = {};
          steps.forEach(function (step) {
            newSteps[step.id] = step;
          });

          _steps[todoId] = newSteps;
          StepStore.changed();
        },
        failure: function () {
          console.log("NOOO!!!");
        }
      }
    );
  },

  create: function (todoId, step) {
    $.ajax(
      {
        method: "POST",
        url: "/api/todos/" + todoId + "/todo_steps",
        dataType: "json",
        data: step,
        success: function (createdStep) {
          _steps[todoId][createdStep.id] = createdStep;
          StepStore.changed();
        },
        error: function () {
          console.log("We failed again!");
        }
      }
    );
  },

  destroy: function (step) {
    if (_steps[step.todo_id].hasOwnProperty(step.id)) {
      $.ajax(
        {
          method: "DELETE",
          url: "/api/todo_steps/" + step.id,
          dataType: "json",
          success: function (step) {
            delete _steps[step.todo_id][step.id];
            StepStore.changed();
          },
          error: function () {
            console.log("it broke.");
          }
        }
      );
    }
  },

  toggleDone: function (step) {
    var done = !_steps[step.todo_id][step.id].done;
    $.ajax(
      {
        method: "PATCH",
        url: "/api/todo_steps/" + step.id,
        dataType: "json",
        data: {step: {done: done} },
        success: function (step) {
          _steps[step.todo_id][step.id].done = done;
          StepStore.changed();
        }
      }
    );
  },

  changed: function() {
    _callbacks.forEach(function(callback) {
      callback();
    });
  },

  addChangedHandler: function (handler) {
    console.log(handler);
    _callbacks.push(handler);
  },

  removeChangedHandler: function (handler) {
    var index = _callbacks.indexOf(handler);
    if (index !== -1) {
      _callbacks.splice(index, 1);
    }
  }

};


module.exports = StepStore;
