class CreateFashiongirls < ActiveRecord::Migration[6.1]
  def change
    create_table :fashiongirls do |t|
      t.string :name
      t.integer :age
      t.string :location
      t.string :portfolio

      t.timestamps
    end
  end
end
