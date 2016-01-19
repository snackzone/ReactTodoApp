class CreateTodoSteps < ActiveRecord::Migration
  def change
    create_table :todo_steps do |t|
      t.integer :todo_id, null: false, index: true
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
