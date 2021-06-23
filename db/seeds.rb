# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Shooting.reset_pk_sequence
Fashiongirl.reset_pk_sequence
Photographer.reset_pk_sequence
Shooting.destroy_all
Fashiongirl.destroy_all
Photographer.destroy_all




alisson = Fashiongirl.create(name: "Alisson", age: 21, location: 'Paris', portfolio: 'https://linda-hendricks.com/')
dio = Fashiongirl.create(name: 'Dio', age: 20, location: 'Paris', portfolio: 'https://linda-hendricks.com/')
stella = Fashiongirl.create(name: 'Stella', age: 22, location: 'Paris', portfolio: 'https://linda-hendricks.com/')
melissa = Fashiongirl.create(name: 'Melissa', age: 26, location: 'Paris', portfolio: 'https://linda-hendricks.com/')

sami = Photographer.create(name: 'Sami', location:'Paris', portfolio: 'https://cdn-images-1.medium.com/max/1200/1*ev8fYgYjMrRzDxafi6lWAw.jpeg', popularity: 5)
ange = Photographer.create(name: 'Ange', location:'Paris',portfolio: 'www.portfoliotocome.com', popularity: 4)
nicolas = Photographer.create(name: 'Nicolas', location:'Paris', portfolio: 'www.portfoliotocome.com', popularity: 1)
fred = Photographer.create(name: 'Fred', location:'Paris', portfolio: 'www.portfoliotocome.com', popularity: 2)
alan = Photographer.create(name: 'Alan', location:'Paris', portfolio: 'www.portfoliotocome.com', popularity: 3)


Shooting.create(date: "12 Novembre", location:"Paris", fashiongirl_id: alisson.id, photographer_id: sami.id)
Shooting.create(date: "22 Avril", location:"Paris", fashiongirl_id: alisson.id, photographer_id: ange.id)
Shooting.create(date: "22 Aout",location:"Paris", fashiongirl_id: stella.id, photographer_id: alan.id)
Shooting.create(date: "22 Janvier",location:"Paris", fashiongirl_id: dio.id, photographer_id: sami.id)
Shooting.create(date: "5 Novembre",location:"Paris", fashiongirl_id: melissa.id, photographer_id: nicolas.id)
Shooting.create(date: "2 Mars",location:"Paris", fashiongirl_id: melissa.id, photographer_id: fred.id)


puts 'I am Seeded Linda! You got this!'