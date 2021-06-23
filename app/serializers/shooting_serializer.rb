class ShootingSerializer < ActiveModel::Serializer
  attributes :id, :date, :location
  has_one :fashiongirl
  has_one :photographer
end
