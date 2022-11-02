# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

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


inv1= Inventory.create(item: "sanitary towels", quantity: 1000, beneficiary_id: b1.id, charity_id: c1.id )
inv2 = Inventory.create(item: "exercise books", quantity: 500, beneficiary_id: b2.id, charity_id: c1.id)
inv3 = Inventory.create(item: "stationery", quantity: 600, beneficiary_id: b3.id, charity_id: c1.id)

d1 = Donor.create(first_name: "Mary", last_name: "Coleman", email: "marycole@gmail.com", password: "123456789", password_confirmation: "123456789", country: "USA")
d2 = Donor.create(first_name: "Robert", last_name: "Kavai", email: "r.kavai@gmail.com", password: "kavai1234", password_confirmation: "kavai1234", country: "Kenya")
d3 = Donor.create(first_name: "Susan", last_name: "Kansime", email: "susan@gmail.com", password: "kansime1357", password_confirmation: "kansime1357", country: "Uganda")

s1 = Story.create(title: "Story 1", beneficiary_story: "A form-two student from Kenya Kesho Girls School says she is lucky to get menstrual pads from a local non-governmental organization known as Hope Africa that empowers young girls and women in the country.
'We can’t access these  pads until we go back to school. Our mum cannot afford to buy us pads and also provide for food. So we mostly depend on what the charity provides,' Consolata said.
'We are five girls in our house, and the pads are usually not enough for all of us. Sometimes we ask our brothers to chip in.'
Together with he Kenyan government, through the State Department for Gender Affairs, runs a programme to provide free sanitary towels to some 3.7 million girls in public primary schools, special primary and secondary schools in the country.
The scheme is essential in a country where over 65% of people who menstruate cannot afford sanitary towels, according to figures cited in the 2016 report Menstrual Health in Kenya, published by non-profit consulting firm FSG.
It also showed that 6 out of 10 girls in Kenya had never heard about menstruation until their first period. The  sanitary towel program was initiated in 2011 and has so far benefited over 11.2 million girls, mostly in marginalised and slum areas.", charity_id: c1.id, beneficiary_id: b1.id, inventory_id: inv1.id)

s2 = Story.create(title: "Story 2", beneficiary_story: "While the transition to womanhood should be a celebrated phase by the majority of girls, it can be a daunting challenge especially when they have no access to the much-needed essentials such as dignity kits and information.
Sarah Laku, a student from St. Mary's School for Girls wishes her mother was present to help her navigate this challenging phase of life.
'In absence of my mother, life was hard. I had just started receiving my periods and was not sure of the phase I was getting into since our community undermines girls. But unlike my agemates, I was lucky I had a mentor who walked me through that new phase of my life.’ said Sarah.
Sarah is one of the beneficiaries of the reusable pads project by Zana Africa. Having been introduced to us by her friend Asha, she has undergone training and is able to make reusable pads.
“This  project has equipped me with the necessary skills to make alternative pads. The reusable sanitary pads are just as healthy and safe as disposable ones and women need not have any concerns in this regard, in terms of hygiene and infections,” remarks Sarah.
The project funded by Nia Africa aims to enlighten school-going girls on menstruation and the most recommended practices on menstrual hygiene management as well as increasing dependence on reusable products among young girls and women in the community.", charity_id: c1.id, beneficiary_id: b1.id, inventory_id: inv1.id)

s3 = Story.create(title: "Story 3", beneficiary_story: "MORE THAN 3,500 GIRLS AND STILL COUNTING
The girls are seated under a tree shielding us from the blistering sun in St. Bernard's Girls School in Meru. Monica smiles confidently as she starts her conversation with a mentor from our One Girl Can team on a bench. She is holding 3 packs of sanitary pads received from the team. She started her menstruation one year ago when she was aged 12 and a class 7 student. “The first time it happened i was too embarrassed to tell anyone. I became withdrawn, quiet and scared. My mum realized something was wrong. I was disgusted with myself due to the continuous bleeding. I missed my classes for a whole week”, She says.
Monica is in a school among the 10 which are part of our programs in Meru County.These schools are located in a semi-arid area and poverty stricken region. In addition, they lack enough resources to cater for the girl child needs for example buying sanitary towels for them. We execute our programs to fill the gap and ensure more girls have chances to attend their classes.
So far so good as the One Girl Can team has been able to reach over 3,500 girls by providing them with Sanitary towels and training sessions geared to leadership. This is a big milestone towards the achievement of their studies.", charity_id: c1.id, beneficiary_id: b1.id, inventory_id: inv1.id)

s4 = Story.create(title: "Story 4", beneficiary_story: "“My name is Kalondu, my mother got married at the age of 12years to a 70years old man, it was ok then and everyone ahead of her had followed the same path. She quickly gave birth to me a year after, and the next year and soon she was a mother of seven, her health has deteriorated over time, and since my father who was the sole bread winner passed on there was no hope for school or an education for me and my siblings.”
Through Women One Intervention the girls in my school and I have received sanitary towels and reproductive health training. I now have a better understanding of myself and the normal changes happening to my body. I am able to stay in school without fear of soiling myself, and I’m happy that I can get equal reading/study hours with the boys in my class.” ", charity_id: c1.id, beneficiary_id: b1.id, inventory_id: inv1.id)

# s5 = Story.create(beneficificiary_story:)
puts " Done Seeding"