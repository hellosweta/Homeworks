class CreateHouses < ActiveRecord::Migration[5.0]
  def change
    create_table :houses do |t|
      t.string :address, null: false
      t.string :structure
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
