class Api::TodoStepsController < ApplicationController
  def index
    @steps = Todo.find(params[:todo_id]).todo_steps

    render json: @steps.to_json
  end

  def create
    @step = Todo.find(params[:todo_id]).todo_steps.create!(todo_step_params)

    render json: @step.to_json
  end

  def update
    @step = TodoStep.find(params[:id])
    @step.update!(todo_step_params)

    render json: @step.to_json
  end

  def destroy
    @step = TodoStep.find(params[:id])
    @step.destroy!

    render json: @step.to_json
  end

  private
  def todo_step_params
    params.require(:todo_step).permit(:description, :done)
  end
end
