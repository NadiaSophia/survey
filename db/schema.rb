# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151002212253) do

  create_table "healthsurveys", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.integer  "patient1"
    t.integer  "insuranceProvider1"
    t.integer  "hospitalAdministrator1"
    t.integer  "clincian1"
    t.integer  "physician1"
    t.integer  "policymaker1"
    t.integer  "communityMember1"
    t.integer  "other1"
    t.string   "other1Response"
    t.integer  "competition2"
    t.integer  "lackOfEducation2"
    t.integer  "incongruentSystems2"
    t.integer  "poorCommunication2"
    t.integer  "diagnosticErrors2"
    t.integer  "inefficientTracking2"
    t.integer  "privacy2"
    t.integer  "valuebasedPaymentSystems2"
    t.integer  "disconnectBetweenSystems2"
    t.integer  "other2"
    t.string   "other2Response"
    t.string   "q3_1"
    t.string   "q3_2"
    t.string   "q3_3"
    t.string   "incraesesCosts4_1"
    t.string   "decreasesAvailability4_1"
    t.string   "decreasesQuality4_1"
    t.string   "decreasesUse4_1"
    t.string   "decreasesCollaboration4_1"
    t.string   "decreasesTrust4_1"
    t.string   "decreasesEfficiency4_1"
    t.string   "incraesesCosts4_2"
    t.string   "decreasesAvailability4_2"
    t.string   "decreasesQuality4_2"
    t.string   "decreasesUse4_2"
    t.string   "decreasesCollaboration4_2"
    t.string   "decreasesTrust4_2"
    t.string   "decreasesEfficiency4_2"
    t.string   "incraesesCosts4_3"
    t.string   "decreasesAvailability4_3"
    t.string   "decreasesQuality4_3"
    t.string   "decreasesUse4_3"
    t.string   "decreasesCollaboration4_3"
    t.string   "decreasesTrust4_3"
    t.string   "decreasesEfficiency4_3"
    t.integer  "comparativeTools5"
    t.integer  "eduationTraining5"
    t.integer  "standardizingTracking5"
    t.integer  "digitalAccess5"
    t.integer  "diagnosticErrors5"
    t.integer  "wearableTech5"
    t.integer  "blockchain5"
    t.integer  "valuebasedPayment5"
    t.integer  "collaboration5"
    t.string   "q6_1"
    t.string   "q6_2"
    t.string   "q6_3"
    t.string   "q7_1"
    t.string   "q7_2"
    t.string   "q7_3"
    t.string   "q8_1"
    t.string   "q8_2"
    t.string   "q9_1"
    t.string   "q9_2"
    t.integer  "connect10"
    t.integer  "ideas10"
    t.integer  "technologies10"
    t.integer  "implement10"
    t.integer  "improve10"
    t.integer  "talent10"
    t.integer  "funding10"
    t.integer  "vision10"
    t.integer  "collaboration10"
    t.integer  "contact"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

end
