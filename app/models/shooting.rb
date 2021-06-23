class Shooting < ApplicationRecord
  belongs_to :fashiongirl
  belongs_to :photographer

  # validates :date, :location, presence: true #{ message: "must be given please" }

end