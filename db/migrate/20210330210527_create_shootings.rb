class CreateShootings < ActiveRecord::Migration[6.1]
  def change
    create_table :shootings do |t|
      t.string :date
      t.string :location
      t.belongs_to :fashiongirl, null: false, foreign_key: true
      t.belongs_to :photographer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
