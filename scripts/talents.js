const faker = require('faker')

const makeDates = () =>
    Array.from({ length: 3 }, (_, i) => ({
        from: `2020-${10 + i}-${faker.random.number({ min: 1, max: 10 }).toString().padStart(2, '0')}`,
        to: `2020-${10 + i}-${faker.random.number({ min: 11, max: 30 })}`,
    }))

const talents = [{
    id: 'else_rovinsky',
    premium: true,
    available: makeDates(),
    name: 'Else Rovinsky',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    actingAge: faker.random.number({min: 30, max: 40}),
    image: `https://www.imacontent.com/wp-content/uploads/2017/11/Actress-Elise-Rovinsky-IMA-Content-7.jpeg`,
    profession: 'Actor',
    representation: {
        agent: {
            name: 'Maria Vascsak',
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            phone: '+46 739 10 59 02'
        },
        manager: {
            name: 'Maria Vascsak',
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            phone: '+46 739 10 59 02'
        }
    },
    gender: 'female',
    eyeColor:'brown',
    hairColor:'brown',
    hairLength:'short',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: 'Rovinsky is a graduate of the Stella Alder Conservatory of Acting in NY. Before moving to New York City, she studied Drama at the University of Gothenburg in Sweden.  Most recent Film & TV work: ‘FBI’ (NBC), ‘Law & Order SVU (NBC), ‘New Amsterdam (NBC), ‘Gray Ground’ (recurring), Ari Aster’s ‘Midsommar’ (ADR voice actor), ‘How To Tell You’re A Douchebag’, which premiered at SUNDANCE, ‘Red Oaks’ (Amazon Studios), ‘Come Morning’, shot on location in Arkansas and premiering at the Austin Film Festival the same year, ‘The End of Something’, nominated for “Best Ensemble Cast” at the Bare Bones Film Festival and ‘Boyz of Summer’ which screened at numerous festivals. Core member of the New York based sketch comedy group THE SHORTS SHOW. ',
    athleticEndeavors: 'combat - stage',
    performance: 'licensed driver',
    accent: 'swedish',
    languages: ['english', 'swedish', 'german', 'danish'],
    additionalSkills:'Dialects, Movement, Teleprompter',
    disabilities:'none',
    socialMedia: [{
        name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
        link: faker.internet.url(),
        followers: faker.random.number({min: 3000, max: 9000}),
    }],
    hashtags:'actor',
    measurements: {
        height: 64,
        weight: faker.random.number({min: 100, max: 200}),
        bodyType:'average',
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
    bodyModifications:'none',
    nudity:'none',
    resume:'Since graduating from the Stella Adler Conservatory of Acting in NYC, I have done TV, film, commercial & print work as well as numerous theater productions. Most recent work on network television include FBI (CBS), NEW AMSTERDAM (NBC), LAW & ORDER (NBC) and RED OAKS (Amazon Studios).I also do some work in Sweden and Europe. Being completely bilingual, thanks to having one parent of each (Swedish & American), I am great with accents and dialects as well. I live in New York City at the moment but travel to Sweden when I can, to visit family and to work.',
    professionYears:20,
    actingCredits: {
        films: [{
            title:'Midsommar', 
            character:'Voice Actor',
            castType:'Voice Actor',
            year:2019
        },
        {
            title:'New Amsterdam', 
            character:'Skeptical Patient',
            castType:'Co-star',
            year:2019
        },
        {
            title:'Lat & Order SVU', 
            character:'Ann Miller',
            castType:'Co-star',
            year:2018
        }],
        theatre: [,
            {
                title:'Women and War', 
                character:'Barbara Berry',
                castType:'Co-star',
                year:2018
            }],
        tv: [,
            {
                title:'FBI', 
                character:'Kate Atherton',
                castType:'Co-Star',
                year:2020
            }],
        nomination: [{
            title: 'The End of Something', 
            character: 'Yael',
            castType: 'Co-Star',
            year:2014
        }]
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2017/11/Actress-Elise-Rovinsky-IMA-Content-3-1024x683.jpeg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2017/11/Actress-Elise-Rovinsky-IMA-Content-8-683x1024.jpeg',
        mediaReel: 'https://youtu.be/qYKVy0pfkNA',
        audio: 'https://player.vimeo.com/video/402939962',
    },
},
{
    id: 'david_s_lindgren',
    premium: true,
    available: makeDates(),
    name: 'David S. Lindgren',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    actingAge: faker.random.number({min: 25, max: 35}),
    image: `https://www.imacontent.com/wp-content/uploads/2020/06/David-S-.-Lindgren-Actor-IMA-Content2-web-1-1024x682.jpg`,
    profession: 'Actor',
    representation: {
        agent: {
            name: 'Maria Vascsak',
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            phone: '+46 739 10 59 02'
        },
        manager: {
            name: 'Maria Vascsak',
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            phone: '+46 739 10 59 02'
        }
    },
    gender: 'male',
    eyeColor:'blue',
    hairColor:'blonde',
    hairLength:'short',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `
    Lindgren was born and raised in southern Sweden by a Swedish mother and Albanian father. Today he speaks three languages ​​fluently, Swedish, English, Norwegian and is almost entirely fluent in Albanian as well. Lindgren realized early on that he loved acting and theater when he participated in many of the school’s plays as a youngster.

    For 4 years after graduating from the trade program, Lindgren traveled around the world, starting with a year in Australia and then on to Norway, Brazil & Prague before returning to Sweden. Lindgren studied “Acting for film” at the Prague Film School in the Czech Republic. While at school, Lindgren was involved in a dozen short film projects, did VO work for video games, was the main model for commercials for Storm London and also played the role of a game Admin in the award-winning documentary “The Blue whale challenge.”
    Lindgren has played very diverse roles lately. Chief among them the role as a Nazi leader in “Tunna Blå Linjen” (SVT) as well as “King Adolf Fredrik I in the new drama series “Drottningarna”(Cmore / Tv4).

    Lindgren has also during the last two years played the lead role as: John Doe who is Dad / Psychopath and killer in the new feature film “Vanish Without A Trace” Directed By: Francesco Valentino.
    `,
    athleticEndeavors: ['martial arts', 'horseback riding', 'weapons handling', 'knife fighting'],
    performance: 'licensed driver',
    accent: 'swedish',
    languages: ['english', 'swedish', 'albanian', 'norwegian'],
    additionalSkills:'Dialects, Movement, Teleprompter',
    disabilities:'none',
    socialMedia: [{
        name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
        link: faker.internet.url(),
        followers: faker.random.number({min: 3000, max: 9000}),
    }],
    hashtags:'actor',
    measurements: {
        height: 72,
        weight: faker.random.number({min: 100, max: 200}),
        bodyType:'average',
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
    bodyModifications:'none',
    nudity:'none',
    resume:`
    Since graduating from “The Prague Film School” I have mostly been working in television, film & commercials in Sweden. My most recent work for television is the Tunna Blå linjen (SVT) and Drottningarna (Cmore,TV4). 

    I have some feature film projects coming up abroad that I am looking forward as well as some TV roles both in Sweden and in the US. I am a capable horseback rider and experienced stage fighter, after training karate for 5 years as well as Thai boxing for 2.

    I master three languages ​​fluently (Swedish, English and Norwegian) and I’m proficient in American dialects as well.  I live and work in Sweden (Stockholm) at the moment. 

    I have always loved cinema. And being able to live in another person’s life for a couple of months and tell their story is the most wonderful thing you can do in this life as an actor
    `,
    professionYears:5,
    actingCredits: {
        films: [{
            title:'Oskrivet blad', 
            character:'Tobias',
            castType:'Supporting',
            year:2019
        },
        {
            title:'The Blue Whale Challenge', 
            character:'The game admin',
            castType:'Supporting',
            year:2018
        },
        {
            title:'In parallel', 
            character:'Distressed Character',
            castType:'Supporting',
            year:2018
        }],
        theatre: [],
        tv: [{
            title:'Tunna blå linjen', 
            character:'Sveas Man 1',
            castType:'Supporting',
            year:2020
        },],
        nomination: []
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2020/06/DavidL-3-web-768x1152.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2020/06/David-S.-Lindgren-Actor-IMA-Content-5-web-682x1024.jpg',
        mediaReel: 'https://player.vimeo.com/video/407508647',
        audio: 'https://player.vimeo.com/video/403962999',
    },
}, {
    id: 'moa_malan',
    premium: true,
    available: makeDates(),
    name: 'Moa Malan',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    actingAge: faker.random.number({min: 30, max: 40}),
    image: `https://www.imacontent.com/wp-content/uploads/2019/04/Moa-3-web.jpg`,
    profession: 'Actor',
    representation: {
        agent: {
            name: 'Maria Vascsak',
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            phone: '+46 739 10 59 02'
        },
        manager: {
            name: 'Maria Vascsak',
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            phone: '+46 739 10 59 02'
        }
    },
    gender: 'female',
    eyeColor:'brown',
    hairColor:'blond',
    hairLength:'long',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: 'Ever since I started my career in Sweden I knew I wanted to focus on film and TV. After finishing my studies at Prague Film School I was sure I’d found my passion in life and since then I’ve been working nonstop with the proffesion I love the most. After a while I found my specific niche as well and I’m now doing a lot of physical acting such as fight scenes, motion capture and stunts. If you’re in to TV-games you might have played one of the many characters I’ve portrayed over the years, or you might have seen me in film or TV not knowing it’s me who takes that shot to head, the kick down the ravine or flying through the air. I’ve also produced and worked in different fields behind the camera to get a better understanding of the entire way a production works. I love being a part of a project from scratch whenever I get the chance. I work all around the world although Sweden is my base at the moment. With South African roots I’m bilinugal growing up with an english speaking father and Swedish mother.',
    athleticEndeavors: ['martial arts', 'horseback riding', 'weapons handling', 'knife fighting'],
    performance: 'licensed driver',
    accent: ['swedish'],
    languages: ['english', 'swedish'],
    additionalSkills:'Dialects, Movement, Teleprompter',
    disabilities: ['none'],
    socialMedia: [{
        name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
        link: faker.internet.url(),
        followers: faker.random.number({min: 3000, max: 9000}),
    }],
    hashtags:'actor',
    measurements: {
        height: 68,
        weight: faker.random.number({min: 100, max: 150}),
        bodyType:'average',
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
    bodyModifications:'none',
    nudity:'none',
    resume:'Since graduating from the Stella Adler Conservatory of Acting in NYC, I have done TV, film, commercial & print work as well as numerous theater productions. Most recent work on network television include FBI (CBS), NEW AMSTERDAM (NBC), LAW & ORDER (NBC) and RED OAKS (Amazon Studios).I also do some work in Sweden and Europe. Being completely bilingual, thanks to having one parent of each (Swedish & American), I am great with accents and dialects as well. I live in New York City at the moment but travel to Sweden when I can, to visit family and to work.',
    professionYears: 10,
    actingCredits: {
        films: [{
            title:'Mareld', 
            character:'Maria',
            castType:'Actor',
            year:2019
        },
        {
            title: 'Halvdan Viking', 
            character:'Kvinnlig Västviking',
            castType:'Actor',
            year:2018
        },
        {
            title:'Storm', 
            character:'Stina',
            castType:'Actor',
            year:2018
        }, {
            title:'Jätten', 
            character:'Nurse',
            castType:'Actor',
            year:2016
        }, {
            title:'Hingsten', 
            character:'Malin',
            castType:'Actor',
            year:2015
        }, {
            title:'REDEEM The Beginning', 
            character:'Dina',
            castType:'Actor',
            year:2014
        }, {
            title:'En Hemlighet', 
            character:'Nurse',
            castType:'Actor',
            year:2012
        }, {
            title:'Johan Falk: Spelets regler', 
            character:'Barpersonal',
            castType:'Actor',
            year:2012
        }, {
            title:'Léa', 
            character:'Vond',
            castType:'Actor',
            year:2011
        }, {
            title:'The Amazing Adventures of Lars Jensen', 
            character:'Fiona',
            castType:'Actor',
            year:2010
        }],
        stunts: [{
            title:'Midnattssol', 
            character:'Stunt performer',
            castType:'Stunf',
            year:2016
        }]
    },
    nonActingCredits: {
        films:[{
            title: 'REDEEM The Beginning',
            role: 'Producers Credit',
            year: 2014
        }]
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2017/05/Moa-Malan-Actress-Managed-by-IMA-Content-Manager-Maria-Vascsak-1024x683.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2017/05/Moa-Malan-Actress-Managed-by-IMA-Content-Manager-Maria-Vascsak-7-1024x683.jpg',
        mediaReel: 'https://youtu.be/yd7XUBTS9uk',
        audio: 'https://player.vimeo.com/video/402939962',
    },
},]

module.exports = talents