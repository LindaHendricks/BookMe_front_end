# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_30_210527) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fashiongirls", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "location"
    t.string "portfolio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "photographers", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "portfolio"
    t.integer "popularity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shootings", force: :cascade do |t|
    t.string "date"
    t.string "location"
    t.bigint "fashiongirl_id", null: false
    t.bigint "photographer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fashiongirl_id"], name: "index_shootings_on_fashiongirl_id"
    t.index ["photographer_id"], name: "index_shootings_on_photographer_id"
  end

  add_foreign_key "shootings", "fashiongirls"
  add_foreign_key "shootings", "photographers"
end
