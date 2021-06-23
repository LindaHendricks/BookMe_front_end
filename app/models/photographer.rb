class Photographer < ApplicationRecord
    has_many :shootings 
    has_many :fashiongirls, through: :shootings

    # validates :name, presence: { message: "must be given please" }, length: { in: 6..20}, uniqueness: true
    # validates :location, presence: { message: "must be given please" }

end