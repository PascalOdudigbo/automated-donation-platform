puts "Seeding"

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

    }
]);


puts "Done seeding"