const fs = require('fs')
const faker = require('faker')

const data = {
    profiles: Array.from({ length: 10 }, () => ({
        id: faker.random.uuid(),
        name: faker.name.findName(),
        contact: {
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            citizenship: faker.address.country(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
        },
        image: faker.image.imageUrl(),
        category: faker.name.jobDescriptor(),
        representation: {
            agent: {
                name: faker.name.findName(),
                address: faker.address.streetAddress(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber()
            },
            manager: {
                name: faker.name.findName(),
                address: faker.address.streetAddress(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber()
            }
        },
        gender: faker.random.arrayElement(['male', 'female', 'transgender', 'twins']),
        eyeColor: faker.random.arrayElement(['blue', 'brown', 'black', 'green', 'grey', 'hazel']),
        hairColor: faker.random.arrayElement(['black', 'blonde', 'bold', 'brown', 'grey', 'red']),
        hairLength: faker.random.arrayElement(['afro', 'bald', 'dreadlocks', 'long', 'short']),
        ethnicity: faker.random.arrayElement(['african', 'caucassian', 'east asian', 'hispanic']),
        cast: faker.random.arrayElement(['actor', 'stunt actor', 'dj', 'singer', 'painter', 'model']),
        filmmakers: faker.random.arrayElement(['director', 'producer', 'cinematographer', 'film editor', 'graphic artist', 'drone pilot', 'composer']),
        biography: faker.lorem.words(30),
        athleticEndeavors: faker.random.arrayElement(['diving', 'tennis', 'football']),
        performance: faker.random.arrayElement(['comedian', 'modeling']),
        accent: faker.random.arrayElement(['eastern european', 'russian', 'finnish', 'swedish']),
        languages: [faker.random.arrayElement(['english', 'swedish', 'german', 'spanish'])],
        additionalSkills: faker.random.words(4),
        disabilities: [faker.random.arrayElement(['none', 'autism', 'amputee'])],
        socialMedia: [{
            name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
            followers: faker.random.number({min: 0, max: 900}),
        }],
        hashtags: faker.random.arrayElement(['photography', 'sport', 'tv', 'feature', 'actor', 'model', 'producer', 'music']),
        measurements: {
            height: faker.random.number({min: 40, max: 120}),
            weight: faker.random.number({min: 50, max: 280}),
            bodyType: faker.random.arrayElement(['slender', 'very thin', 'average', 'athletic', 'husky', 'body builder', 'large', 'n/a']),
            shirtSize: faker.random.arrayElement(['s', 'm', 'l', 'xl', 'xxl', 'xxxl', 'n/a']),
            sleeveLength: faker.random.number({min: 29, max: 40}),
            neck: faker.random.number({min: 12, max: 25}),
            jacketChest: faker.random.number({min: 32, max: 58}),
            jacketLength: faker.random.arrayElement(['s', 'm', 'l']),
            waist: faker.random.number({min: 18, max: 58}),
            inseam: faker.random.number({min: 25, max: 40}),
            shoeWidth: faker.random.arrayElement(['a', 'aa', 'aaa', 'b', 'd', 'e', 'ee', 'eee']),
            shoeLength: faker.random.number({min: 1, max: 17}),
            gloves: faker.random.arrayElement(['xsm', 'sm', 'm', 'lg', 'xlg']),
            hat: faker.random.number({min: 6, max: 10}),
            notes: faker.lorem.words(10),
        },
        bodyModifications: faker.random.arrayElement(['none', 'piercings', 'tattoos']),
        nudity: faker.random.arrayElement(['none', 'partial', 'full']),
        resume: faker.lorem.words(50),
        professionYears: faker.random.number({min: 0, max: 10}),
        actingCredits: {
            films:[{
                title: faker.lorem.words(1), 
                character: faker.lorem.words(1),
                castType: faker.random.arrayElement(['Actor', 'stunt', 'extra', 'model']),
                year: faker.random.number({min: 1895, max: 2020})
            }],
            theatre: [{
                title: faker.lorem.words(1), 
                character: faker.lorem.words(1),
                castType: faker.random.arrayElement(['Actor', 'stunt', 'extra', 'model']),
                year: faker.random.number({min: 1895, max: 2020})
            }],
            nomination: [{
                title: faker.lorem.words(1), 
                character: faker.lorem.words(1),
                castType: faker.random.arrayElement(['Actor', 'stunt', 'extra', 'model']),
                year: faker.random.number({min: 1895, max: 2020})
            }]
        },
        nonActingCredits: {
            films:[{
                title: faker.lorem.words(1), 
                role: faker.random.arrayElement(['director', 'editor', 'producer', 'writer']),
                year: faker.random.number({min: 1895, max: 2020})
            }],
            theatre: [{
                title: faker.lorem.words(1), 
                role: faker.random.arrayElement(['director', 'editor', 'producer', 'writer']),
                year: faker.random.number({min: 1895, max: 2020})
            }],
            nomination: [{
                title: faker.lorem.words(1), 
                role: faker.random.arrayElement(['director', 'editor', 'producer', 'writer']),
                year: faker.random.number({min: 1895, max: 2020})
            }]
        },
        media: {
            headShot: faker.image.imageUrl(),
            slateShot: faker.image.imageUrl(),
            mediaReel: faker.image.imageUrl(),
            audio: faker.lorem.words(1),
        },
    }))
}

fs.writeFile('../db.json', JSON.stringify(data), err => {
    if (err) console.log(err)
    else console.log('Success!')
})

/*
Name
email
phone
Proffesion/category
* Talent searcher ?
* Talent ?
* Representation
List of cast for ex: Actor, stunt actor, dj, singer,painter, model
List of filmmakers: director, producer, Cinematographer, Film editor, Graphic artist, Drone pilot, Composer
Actors biography
Talents representation: Agent (name,adress,email,phone), Manager(name,adress,email,phone)
* Education
* Training
Citizenship
* IMbd profile
* Age to play
Hair color: Bald, blonde, black, brown, grey, red
Hair length: Afro, bald, Dreadlocks, long, short, 
Gender:
Eyes color:
Ethnic appearance: African, Caucasian, East Asian, Hispanic
Athletic Endeavors: Diving, tennis, football, Sai
*, Sky diving
Performance skills: Comedian, Modeling, licenced driver, Stunts,
Accent: Eastern european, Russian, Finish, Swedish
Languages: English, swedish, german, spanish
Additional skils: talent input
Disabilities: Amputee, autism
Social media: facebook, instagram, twitter, youtube

Number of followers at : facebook, instagram, twitter, youtube
Height in inches....... :( and cm?
Weight: in lbs
Body type: Thin, Average, Husky, Large

Shirt size: S, M, L, XL
Sleeve length: from 12 to 25
Jacket chest : 32 to 58
Jacket length: S M L
Waist in inch: 18 to 58
Inseam : 25 to 40
Shoes width: A, AA, B, D, E, EE
Shoes length in inch : 1 to 17
Glove size: XS, S, M L , XL
Hat size 6 to 10

Bodymodifications
    piercing?
    tatto?
    if yes, specify

Nudity
    No nudity
    Partial
    full

Number of years in proffesion

Acting credit
    Film
        title
        character
        cast type : Actor, stunt, extra, model
        year
    Theatre
        title
        character
        cast type : Actor, stunt, extra, model
        year
    Nominations
        title
        character
        cast type : Actor, stunt, extra, model
        year
        
Non acting credit:
    Film
        title
        Role: Director, editor, producers, writers
        year
    Theatre
        title
        Role: Director, editor, producers, writers
        year
    Nominations
        title
        Role: Director, editor, producers, writers
        year
Media uploads:
    Head shot
    Slate shot
    

*/
