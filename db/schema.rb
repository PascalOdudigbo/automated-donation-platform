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

ActiveRecord::Schema.define(version: 2022_10_26_104430) do

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
    t.bigint "charity_id", null: false
    t.bigint "beneficiary_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beneficiary_id"], name: "index_charity_beneficiaries_on_beneficiary_id"
    t.index ["charity_id"], name: "index_charity_beneficiaries_on_charity_id"
  end

  create_table "charity_profiles", force: :cascade do |t|
    t.bigint "charity_id", null: false
    t.text "about_us"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["charity_id"], name: "index_charity_profiles_on_charity_id"
  end

  create_table "donations", force: :cascade do |t|
    t.bigint "donor_id", null: false
    t.bigint "charity_id", null: false
    t.integer "amount"
    t.string "donation_frequency"
    t.boolean "anonymous"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["charity_id"], name: "index_donations_on_charity_id"
    t.index ["donor_id"], name: "index_donations_on_donor_id"
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
    t.bigint "beneficiary_id", null: false
    t.bigint "charity_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beneficiary_id"], name: "index_inventories_on_beneficiary_id"
    t.index ["charity_id"], name: "index_inventories_on_charity_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "title"
    t.text "beneficiary_story"
    t.bigint "beneficiary_id", null: false
    t.bigint "charity_id", null: false
    t.bigint "inventory_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beneficiary_id"], name: "index_stories_on_beneficiary_id"
    t.index ["charity_id"], name: "index_stories_on_charity_id"
    t.index ["inventory_id"], name: "index_stories_on_inventory_id"
  end

  add_foreign_key "charity_beneficiaries", "beneficiaries"
  add_foreign_key "charity_beneficiaries", "charities"
  add_foreign_key "charity_profiles", "charities"
  add_foreign_key "donations", "charities"
  add_foreign_key "donations", "donors"
  add_foreign_key "inventories", "beneficiaries"
  add_foreign_key "inventories", "charities"
  add_foreign_key "stories", "beneficiaries"
  add_foreign_key "stories", "charities"
  add_foreign_key "stories", "inventories"
end
