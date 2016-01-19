class Api::TodosController < ApplicationController
  # before_action :ensure_todo_params

  def index
    render json: Todo.all.to_json
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo.to_json
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.create!
    render json: @todo.to_json
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update!(todo_params)
    render json: @todo.to_json
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render json: @todo.to_json
  end

  private

  def todo_params
    params.require(:todo).permit(:id, :body, :title, :done)
  end

end
