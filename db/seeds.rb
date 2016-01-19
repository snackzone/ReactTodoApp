# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Todo.destroy_all

Todo.create!(title: "Brush the Teeth!", body: "Do it!")
Todo.create!(title: "Laundry!", body: "Clean clean!")
Todo.create!(title: "Walk the dog!", body: "He's lonely!")
Todo.create!(title: "Call Mom!", body: "She's waiting for you!")
