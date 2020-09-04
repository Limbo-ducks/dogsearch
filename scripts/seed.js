const faker = require('faker')
const { MongoClient } = require('mongodb')

const mongoUri = 'mongodb://localhost:27017'
const mongoOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const data = Array.from({ length: 200 }, () => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 0, max: 100}),
    image: `https://source.unsplash.com/collection/159213/480x300?sig=${faker.random.number({min: 0, max: 200})}`,
    profession: faker.name.jobDescriptor(),
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
    athleticEndeavors: [faker.random.arrayElement(['diving', 'tennis', 'football'])],
    performance: [faker.random.arrayElement(['comedian', 'modeling'])],
    accent: [faker.random.arrayElement(['eastern european', 'russian', 'finnish', 'swedish'])],
    languages: [faker.random.arrayElement(['english', 'swedish', 'german', 'spanish'])],
    additionalSkills: faker.random.words(4),
    disabilities: [faker.random.arrayElement(['none','none','none','none', 'autism', 'amputee'])],
    socialMedia: [{
        name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
        link: faker.internet.url(),
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
        jacketLength: faker.random.arrayElement(['s', 'r', 'l']),
        waist: faker.random.number({min: 18, max: 58}),
        inseam: faker.random.number({min: 25, max: 40}),
        shoeWidth: faker.random.arrayElement(['a', 'aa', 'aaa', 'b', 'd', 'e', 'ee', 'eee']),
        shoeLength: faker.random.number({min: 1, max: 17}),
        gloves: faker.random.arrayElement(['xsm', 'sm', 'm', 'lg', 'xlg']),
        hat: faker.random.number({min: 6, max: 10}),
        notes: faker.lorem.words(10),
    },
    bodyModifications: [faker.random.arrayElement(['none', 'piercings', 'tattoos'])],
    nudity: faker.random.arrayElement(['none', 'partial', 'full']),
    resume: faker.lorem.words(50),
    professionYears: faker.random.number({min: 0, max: 10}),
    actingCredits: {
        films: faker.random.arrayElement([[], [{
            title: faker.lorem.words(1), 
            character: faker.lorem.words(1),
            castType: faker.random.arrayElement(['Actor', 'stunt', 'extra', 'model']),
            year: faker.random.number({min: 1895, max: 2020})
        }]]),
        theatre: faker.random.arrayElement([[], [{
            title: faker.lorem.words(1), 
            character: faker.lorem.words(1),
            castType: faker.random.arrayElement(['Actor', 'stunt', 'extra', 'model']),
            year: faker.random.number({min: 1895, max: 2020})
        }]]),
        tv: faker.random.arrayElement([[],[{
            title: faker.lorem.words(1), 
            character: faker.lorem.words(1),
            castType: faker.random.arrayElement(['Actor', 'stunt', 'extra', 'model']),
            year: faker.random.number({min: 1895, max: 2020})
        }]]),
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

const client = new MongoClient(mongoUri, mongoOpts)

client.connect()
    .then(client => client.db('talentwyre').collection('profiles'))
    .then(col => col.insertMany(data))
    .then(() => console.log('Success!'))
    .catch(console.error)
    .finally(() => client.close())
