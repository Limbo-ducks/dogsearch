const fs = require('fs')
const faker = require('faker')

const data = {
    profiles: Array.from({ length: 10 }, () => ({
        name: faker.name.findName(),
        image: faker.image.imageUrl(),
        height: faker.random.number({min: 100, max: 300}),
        gender: faker.random.arrayElement(['male', 'female', 'transgender', 'twins']),
        eyeColor: faker.random.arrayElement(['blue', 'brown', 'black', 'green', 'grey', 'hazel']) 
    }))
}

fs.writeFile('../db.json', JSON.stringify(data), err => {
    if (err) console.log(err)
    else console.log('Success!')
})
