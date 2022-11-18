class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.string :name
      t.integer :price
      t.string :cover
      t.belongs_to :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
