# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding"

Charity.create([
  {
    name: "Hope Africa",
    address: "Parkside Hotel, Monrovia St, City Centre, Nairobi",
    email: "hopeafrica@gmail.com",
    approved: true,
  },
  {
    name: "Zana Africa",
    address: "Wanguru Makutano/Embu Rd, Kerugoya, 272-10303",
    email: "zanaafrica@gmail.com",
    approved: true,
  },
  {
    name: "One Girl Can",
    address: "Frontier Hse, Gr Flr Mosque Rd, Mandera",
    email: "onegirlcan@gmail.com",
    approved: true,
  },
  {
    name: " Women One",
    address: "P.O. Box: 1478-60100 Embu",
    email: "womenone@gmail.com",
    approved: false,
  },
])

Administrator.create([
  {
    first_name: "John",
    last_name: "Mwangi",
    email: "johnmwangi@gmail.com",
    password: "12345678",
    password_confirmation: "12345678",
  },
  {
    first_name: "Jane",
    last_name: "Wafula",
    email: "janewafula@gmail.com",
    password: "12345678",
    password_confirmation: "12345678",
  },
  {
    first_name: "Sarah",
    last_name: "Achieng",
    email: "sarahachieng@gmail.com",
    password: "12345678",
    password_confirmation: "12345678",
  },
])

CharityProfile.create([
  {
    about_us: "We are an established charity across the coutry looking to help alleviate the various upcoming issues that school going girls face and to give them hope where there seems to be none",
    charity_id: 1,
  },
  {
    about_us: "We look out for the oppressed girl child especially in remote areas and attempt as much as possible to educate her and look out for her",
    charity_id: 2,
  },
  {
    about_us: "We sought for the girl child to enable her attain a brighter future",
    charity_id: 3,
  },
  {
    about_us: "Empowering the girl child one girl at a time",
    charity_id: 4,
  },
])

puts " Done Seeding"
