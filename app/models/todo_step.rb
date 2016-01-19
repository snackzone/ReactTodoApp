class TodoStep < ActiveRecord::Base
  validates :description, :todo, presence: true
  belongs_to :todo
end
