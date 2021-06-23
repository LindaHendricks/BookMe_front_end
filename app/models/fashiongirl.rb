class Fashiongirl < ApplicationRecord
    has_many :shootings 
    has_many :photographers, through: :shootings

    # validates :name, presence: true
    # validates :age, numericality: { greater_than: 18 }
end
