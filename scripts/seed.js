const fs = require('fs')
const faker = require('faker')

const data = {
    profiles: Array.from({ length: 10 }, () => ({
        name: faker.name.findName(),
        image: faker.image.imageUrl(),
    }))
}

fs.writeFile('../db.json', JSON.stringify(data), err => {
    if (err) console.log(err)
    else console.log('Success!')
})
