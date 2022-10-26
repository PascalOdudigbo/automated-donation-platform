# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding"

c1 = Charity.create(name: "Hope Africa", address: "Parkside Hotel, Monrovia St, City Centre, Nairobi", email: "hopeafrica@gmail.com", password: "hafrica", password_confirmation: "hafrica", approved: true)
c2 = Charity.create(name: "Zana Africa", address: "Wanguru Makutano/Embu Rd, Kerugoya, 272-10303", email: "zanaafrica@gmail.com", password: "zafrica", password_confirmation: "zafrica", approved: true)
c3 = Charity.create(name: "One Girl Can", address: "Frontier Hse, Gr Flr Mosque Rd, Mandera", email: "onegirlcan@gmail.com", password: "ogcan", password_confirmation: "ogcan", approved: true)
c4 = Charity.create(name: " Women One", address: "P.O. Box: 1478-60100 Embu", email: "womenone@gmail.com", password: "women1", password_confirmation: "women1", approved: false)
c5 = Charity.create(name: "All for one", address: "Sema Hse, Gr Flr Xanny Rd, Madara", email: "onegirlcan@gmail.com", password: "all4one", password_confirmation: "all4one")
  
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

b1 = Beneficiary.create(name: "Kenya Kesho Girls School", location: "Nakuru", description: "Providing sustainable and quality education for the girls in our community")
b2 = Beneficiary.create(name: "St. Mary's School for Girls", location: "Kakamega", description: "Offering quality education and a furure for girls")
b3 = Beneficiary.create(name: "St. Bernard's Girls School", location: "Meru", description: "Giving every young girl the opportunity she cane be by offering top notch education")

cb1= CharityBeneficiary.create(charity_id: c1.id, beneficiary_id: b1.id);
cb2= CharityBeneficiary.create(charity_id: c2.id, beneficiary_id: b3.id);
cb3= CharityBeneficiary.create(charity_id: c1.id, beneficiary_id: b2.id);
cb4= CharityBeneficiary.create(charity_id: c1.id, beneficiary_id: b3.id);


inv1= Inventory.create(item: "sanitary towels", quantity: 1000, beneficiary_id: b1.id, charity_id:c1.id )
inv2 = Inventory.create(item: "exercise books", quantity: 500, beneficiary_id: b2.id, charity_id: c1.id)
inv3 = Inventory.create(item: "stationery", quantity: 600, beneficiary_id: b3.id, charity_id: c1.id)

d1 = Donor.create(first_name: "Mary", last_name: "Coleman", email: "marycole@gmail.com", password: "1234", password_confirmation: "1234", country: "USA")
d2 = Donor.create(first_name: "Robert", last_name: "Kavai", email: "r.kavai@gmail.com", password: "5678", password_confirmation: "5678", country: "Kenya")
d3 = Donor.create(first_name: "Susan", last_name: "Kansime", email: "marycole@gmail.com", password: "1357", password_confirmation: "1357", country: "Uganda")

puts " Done Seeding"