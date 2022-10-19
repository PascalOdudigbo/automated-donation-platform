# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Charity.create([
    {
        name: "Hope Africa",
        address: "Parkside Hotel, Monrovia St, City Centre, Nairobi",
        email: "hopeafrica@gmail.com",
        approved: true 
    },
    {
        name: "Zana Africa",
        address: "Wanguru Makutano/Embu Rd, Kerugoya, 272-10303",
        email: "zanaafrica@gmail.com",
        approved: true
    },
    {
        name: "One Girl Can",
        address: "Frontier Hse, Gr Flr Mosque Rd, Mandera",
        email: "onegirlcan@gmail.com",
        approved: true
    },
    {
        name: " Women One",
        address: "P.O. Box: 1478-60100 Embu",
        email: "womenone@gmail.com",
        approved: true
    }
])

Administrator.create([
    {
        first_name: "John",
        last_name: "Mwangi",
        email: "johnmwangi@gmail.com"
    }, 
    {
        first_name: "Jane",
        last_name: "Wafula",
        email: "janewafula@gmail.com"
    }, 
    {
        first_name: "Sarah",
        last_name: "Achieng",
        email: "sarahachieng@gmail.com"
    }
])