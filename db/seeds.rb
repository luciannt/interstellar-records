require "csv"

puts "Seeding... 🌱"

csv = CSV.parse(File.read("db/albumlist.csv").scrub, headers: true)

csv.each do |row|
  artist = Artist.find_or_create_by({ name: row["Artist"] })

  if artist.id
    record = Record.create({ name: row["Album"], price: rand(24.99..39.99), artist_id: artist.id })
  end

  subgenres = row["Subgenre"].split(",")
  genre = Genre.find_or_create_by({ name: row["Genre"] })
  record_genre = RecordGenre.create({ record_id: record.id, genre_id: genre.id })

  recordList = artist.records

  artist.records = recordList.push(record)

  subgenres.each do |genre|
    sbgenre = Genre.find_or_create_by({ name: genre.chomp('"').reverse.chomp('"').reverse })
    record_genre = RecordGenre.create({ record_id: record.id, genre_id: sbgenre.id })
  end
end
puts "Seeding done! ✅"
