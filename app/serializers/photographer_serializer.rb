class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :portfolio, :popularity
end
