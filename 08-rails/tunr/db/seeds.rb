# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
################################################################################
User.destroy_all

u1 = User.create :email => 'boobly_woop@schwifty.com', :password => 'chicken'
u2 = User.create :email => 'woodsy@schwifty.com', :password => 'chicken'

################################################################################
# Seed all Songs
Song.destroy_all

s1 = Song.create :title => "Journey"
s2 = Song.create :title => "A New Dimension"
s3 = Song.create :title => "United"
s4 = Song.create :title => "Sky High"

################################################################################
Album.destroy_all

l1 = Album.create :title => "Journey"
l2 = Album.create :title => "Hope"
l3 = Album.create :title => "Invincible"
l4 = Album.create :title => "Nova"

################################################################################
Artist.destroy_all

a1 = Artist.create :name => "Elektronomia"
a2 = Artist.create :name => "Deaf Kev"
a3 = Artist.create :name => "Tobu"
a4 = Artist.create :name => "Jim Yosef"

################################################################################
Genre.destroy_all

g1 = Genre.create :name => "Electronic"
g2 = Genre.create :name => "EDM"
g3 = Genre.create :name => "Techno"
g4 = Genre.create :name => "Trance"
g5 = Genre.create :name => "Dubstep"
g6 = Genre.create :name => "Hard Trance"

################################################################################
Mixtape.destroy_all

m1 = Mixtape.create :title => "Code Jams"
m2 = Mixtape.create :title => "Driving Music"
m3 = Mixtape.create :title => "Schwifty"
m4 = Mixtape.create :title => "Flow"

################################################################################
# Associations

# Songs and Albums
l1.songs << s1
l2.songs << s2
l3.songs << s3
l4.songs << s4

# Artists and Songs
a1.songs << s1
a2.songs << s2
a3.songs << s3
a4.songs << s4

# Songs and Genres
s1.genres << g1 << g2 << g6
s2.genres << g2 << g3 << g5
s3.genres << g3 << g4 << g1
s4.genres << g4 << g5 << g6


# Songs and Mixtapes
m1.songs << s1 << s3
m2.songs << s2 << s4
m3.songs << s1 << s4
m4.songs << s2 << s3


# Mixtapes and Users
u1.mixtapes << m1 << m3
u2.mixtapes << m2 << m4

