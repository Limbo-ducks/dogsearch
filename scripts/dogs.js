const faker = require('faker')

const dogs = [
{
    id: '0',
    premium: true,
    type: 'dog',
    finishedProfile: true,
    name: faker.name.firstName(),
    age: faker.random.number({min: 0, max: 15}),
    image: `https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`,
    breed: faker.random.arrayElement(['beagle', 'goldenRetriever', 'labrador', 'pug', 'daschhound', 'germanShepherd', 'corgi']),
    gender: faker.random.arrayElement(['male', 'female']),
    color:faker.random.arrayElement(['black', 'blonde', 'spotted', 'brown', 'grey', 'red']),
    fur:faker.random.arrayElement(['short', 'medium', 'long']),
    size:faker.random.arrayElement(['small', 'medium', 'large', 'veryLarge']),
    media: {
        mediaReel: 'https://www.youtube.com/watch?v=JZqvuBxEDnw&ab_channel=CutePuppiesCity',
    },
    gallery : [
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    },
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ]
},
{
  id: '1',
  premium: true,
  type: 'dog',
  finishedProfile: true,
  name: faker.name.firstName(),
  age: faker.random.number({min: 0, max: 15}),
  image: `https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`,
  breed: faker.random.arrayElement(['Beagle', 'Golden Retriever', 'Labrador', 'Pug', 'Daschhound', 'German Shepherd', 'Corgi']),
  gender: faker.random.arrayElement(['male', 'female']),
  color:faker.random.arrayElement(['black', 'blonde', 'bold', 'brown', 'grey', 'red']),
  fur:faker.random.arrayElement(['short', 'medium', 'long']),
  size:faker.random.arrayElement(['small', 'medium', 'large', 'very large']),
  media: {
      mediaReel: 'https://www.youtube.com/watch?v=JZqvuBxEDnw&ab_channel=CutePuppiesCity',
  },
  gallery : [
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    },
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ]
},
{
  id: '1',
  premium: true,
  type: 'dog',
  finishedProfile: true,
  name: faker.name.firstName(),
  age: faker.random.number({min: 0, max: 15}),
  image: `https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`,
  breed: faker.random.arrayElement(['Beagle', 'Golden Retriever', 'Labrador', 'Pug', 'Daschhound', 'German Shepherd', 'Corgi']),
  gender: faker.random.arrayElement(['male', 'female']),
  color:faker.random.arrayElement(['black', 'blonde', 'bold', 'brown', 'grey', 'red']),
  fur:faker.random.arrayElement(['short', 'medium', 'long']),
  size:faker.random.arrayElement(['small', 'medium', 'large', 'very large']),
  media: {
      mediaReel: 'https://www.youtube.com/watch?v=JZqvuBxEDnw&ab_channel=CutePuppiesCity',
  },
  gallery : [
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    },
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ]
},
{
  id: '1',
  premium: true,
  type: 'dog',
  finishedProfile: true,
  name: faker.name.firstName(),
  age: faker.random.number({min: 0, max: 15}),
  image: `https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`,
  breed: faker.random.arrayElement(['Beagle', 'Golden Retriever', 'Labrador', 'Pug', 'Daschhound', 'German Shepherd', 'Corgi']),
  gender: faker.random.arrayElement(['male', 'female']),
  color:faker.random.arrayElement(['black', 'blonde', 'bold', 'brown', 'grey', 'red']),
  fur:faker.random.arrayElement(['short', 'medium', 'long']),
  size:faker.random.arrayElement(['small', 'medium', 'large', 'very large']),
  media: {
      mediaReel: 'https://www.youtube.com/watch?v=JZqvuBxEDnw&ab_channel=CutePuppiesCity',
  },
  gallery : [
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    },
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ]
},
{
  id: '1',
  premium: true,
  type: 'dog',
  finishedProfile: true,
  name: faker.name.firstName(),
  age: faker.random.number({min: 0, max: 15}),
  image: `https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`,
  breed: faker.random.arrayElement(['Beagle', 'Golden Retriever', 'Labrador', 'Pug', 'Daschhound', 'German Shepherd', 'Corgi']),
  gender: faker.random.arrayElement(['male', 'female']),
  color:faker.random.arrayElement(['black', 'blonde', 'bold', 'brown', 'grey', 'red']),
  fur:faker.random.arrayElement(['short', 'medium', 'long']),
  size:faker.random.arrayElement(['small', 'medium', 'large', 'very large']),
  media: {
      mediaReel: 'https://www.youtube.com/watch?v=JZqvuBxEDnw&ab_channel=CutePuppiesCity',
  },
  gallery : [
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    },
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ]
},
{
  id: '1',
  premium: true,
  type: 'dog',
  finishedProfile: true,
  name: faker.name.firstName(),
  age: faker.random.number({min: 0, max: 15}),
  image: `https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`,
  breed: faker.random.arrayElement(['Beagle', 'Golden Retriever', 'Labrador', 'Pug', 'Daschhound', 'German Shepherd', 'Corgi']),
  gender: faker.random.arrayElement(['male', 'female']),
  color:faker.random.arrayElement(['black', 'blonde', 'bold', 'brown', 'grey', 'red']),
  fur:faker.random.arrayElement(['short', 'medium', 'long']),
  size:faker.random.arrayElement(['small', 'medium', 'large', 'very large']),
  media: {
      mediaReel: 'https://www.youtube.com/watch?v=JZqvuBxEDnw&ab_channel=CutePuppiesCity',
  },
  gallery : [
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    },
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ,
    {
        url:`https://source.unsplash.com/collection/9933727/480x300?sig=${faker.random.number({min: 0, max: 200})}`
    }
    ]
},
]

module.exports = dogs