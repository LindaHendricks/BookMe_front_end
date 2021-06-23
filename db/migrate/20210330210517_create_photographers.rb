class CreatePhotographers < ActiveRecord::Migration[6.1]
  def change
    create_table :photographers do |t|
      t.string :name
      t.string :location
      t.string :portfolio
      t.integer :popularity

      t.timestamps
    end
  end
end
