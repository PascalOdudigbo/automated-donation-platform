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

ActiveRecord::Schema.define(version: 2022_10_19_094113) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "administrators", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "beneficiaries", force: :cascade do |t|
    t.string "name"
    t.text "location"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "charities", force: :cascade do |t|
    t.string "name"
    t.text "address"
    t.string "email"
    t.string "password_digest"
    t.boolean "approved"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "charity_beneficiaries", force: :cascade do |t|
    t.bigint "charities_id", null: false
    t.bigint "beneficiaries_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beneficiaries_id"], name: "index_charity_beneficiaries_on_beneficiaries_id"
    t.index ["charities_id"], name: "index_charity_beneficiaries_on_charities_id"
  end

  create_table "charity_profiles", force: :cascade do |t|
    t.bigint "charities_id", null: false
    t.text "about_us"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["charities_id"], name: "index_charity_profiles_on_charities_id"
  end

  create_table "donations", force: :cascade do |t|
    t.bigint "donors_id", null: false
    t.bigint "charities_id", null: false
    t.integer "amount"
    t.string "donation_frequency"
    t.boolean "anonymous"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["charities_id"], name: "index_donations_on_charities_id"
    t.index ["donors_id"], name: "index_donations_on_donors_id"
  end

  create_table "donors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "country"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.string "item"
    t.integer "quantity"
    t.bigint "beneficiaries_id", null: false
    t.bigint "charities_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beneficiaries_id"], name: "index_inventories_on_beneficiaries_id"
    t.index ["charities_id"], name: "index_inventories_on_charities_id"
  end

  add_foreign_key "charity_beneficiaries", "beneficiaries", column: "beneficiaries_id"
  add_foreign_key "charity_beneficiaries", "charities", column: "charities_id"
  add_foreign_key "charity_profiles", "charities", column: "charities_id"
  add_foreign_key "donations", "charities", column: "charities_id"
  add_foreign_key "donations", "donors", column: "donors_id"
  add_foreign_key "inventories", "beneficiaries", column: "beneficiaries_id"
  add_foreign_key "inventories", "charities", column: "charities_id"
end
