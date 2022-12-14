class CreateRecordGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :record_genres do |t|
      t.belongs_to :record, null: false, foreign_key: true
      t.belongs_to :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
