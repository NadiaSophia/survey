class CreateHealthsurveys < ActiveRecord::Migration
  def change
    create_table :healthsurveys do |t|
      t.string :name
      t.string :email

      t.integer :patient1
      t.integer :insuranceProvider1
      t.integer :hospitalAdministrator1
      t.integer :clincian1
      t.integer :physician1
      t.integer :policymaker1
      t.integer :communityMember1
      t.integer :other1
      t.string :other1Response

      t.integer :competition2
      t.integer :lackOfEducation2
      t.integer :incongruentSystems2
      t.integer :poorCommunication2
      t.integer :diagnosticErrors2
      t.integer :inefficientTracking2
      t.integer :privacy2
      t.integer :valuebasedPaymentSystems2
      t.integer :disconnectBetweenSystems2
      t.integer :other2
      t.string :other2Response


      t.string :q3_1
      t.string :q3_2
      t.string :q3_3


      t.string :incraesesCosts4_1
      t.string :decreasesAvailability4_1
      t.string :decreasesQuality4_1
      t.string :decreasesUse4_1
      t.string :decreasesCollaboration4_1
      t.string :decreasesTrust4_1
      t.string :decreasesEfficiency4_1

      t.string :incraesesCosts4_2
      t.string :decreasesAvailability4_2
      t.string :decreasesQuality4_2
      t.string :decreasesUse4_2
      t.string :decreasesCollaboration4_2
      t.string :decreasesTrust4_2
      t.string :decreasesEfficiency4_2

      t.string :incraesesCosts4_3
      t.string :decreasesAvailability4_3
      t.string :decreasesQuality4_3
      t.string :decreasesUse4_3
      t.string :decreasesCollaboration4_3
      t.string :decreasesTrust4_3
      t.string :decreasesEfficiency4_3


      t.integer :comparativeTools5
      t.integer :eduationTraining5
      t.integer :standardizingTracking5
      t.integer :digitalAccess5
      t.integer :diagnosticErrors5
      t.integer :wearableTech5
      t.integer :blockchain5
      t.integer :valuebasedPayment5
      t.integer :collaboration5

      t.string :q6_1
      t.string :q6_2
      t.string :q6_3

      t.string :q7_1
      t.string :q7_2
      t.string :q7_3

      t.string :q8_1
      t.string :q8_2

      t.string :q9_1
      t.string :q9_2


      t.integer :connect10
      t.integer :ideas10
      t.integer :technologies10
      t.integer :implement10
      t.integer :improve10
      t.integer :talent10
      t.integer :funding10
      t.integer :vision10
      t.integer :collaboration10

      t.integer :contact

      t.timestamps null: false
    end
  end
end
