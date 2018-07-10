class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.boolean :in_theatres
      t.date :released
      t.string :rating
      t.text :description

      t.timestamps
    end
  end
end
