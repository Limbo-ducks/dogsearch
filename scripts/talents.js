const faker = require('faker')

const makeDates = () =>
    Array.from({ length: 3 }, (_, i) => ({
        from: `2020-${10 + i}-${faker.random.number({ min: 1, max: 10 }).toString().padStart(2, '0')}`,
        to: `2020-${10 + i}-${faker.random.number({ min: 11, max: 30 })}`,
    }))

const talents = [
    // Else Rovinsky
    {
    id: '0',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Else Rovinsky',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 30, max: 40}),
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
        theatre: [
            {
                title:'Women and War', 
                character:'Barbara Berry',
                castType:'Co-star',
                year:2018
            }],
        tv: [
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
    education: [{
        school: 'Stella Alder Conservatory of Acting',
        course: 'Acting',
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    },
    {
        school: 'University of Gothenburg',
        course: 'Drama',
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
// David S Lindgren
{
    id: '1',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'David S. Lindgren',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 25, max: 35}),
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
    education: [{
        school: 'American Academy of Framatic Arts',
        course: 'Acting',
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
}, 
    // Moa Malan
{
    id: '2',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Moa Malan',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 30, max: 40}),
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
        tv: [{
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
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
    //Marten Eckerstrom
{
    id: '3',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Marten Eckerstrom',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 25, max: 35}),
    image: `https://www.imacontent.com/wp-content/uploads/2020/04/image003.jpg`,
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
    eyeColor:'green',
    hairColor:'blonde',
    hairLength:'short',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `Eckerstrom is a member at the alumni of the American Academy of Dramatic Arts in Los Angeles, and a graduate of the New York Film Academy in New York City.
    Born in Sweden but with nearly a decade in the United States gives Eckerstrom unique knowledge and experience in the entertainment industry in Europe and North America.
    
    Eckerstrom is active in the entertainment industry, training and working in both theatre and film, perfecting his experience and skills as an actor.
     
    Last year he appeared in the Swedish television series Dröm produced by SVT.
    `,
    athleticEndeavors: ['martial arts', 'combat - stage'],
    performance: 'dancing',
    accent: 'swedish',
    languages: ['english', 'swedish'],
    additionalSkills:'Dialects',
    disabilities:'none',
    socialMedia: [{
        name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
        link: faker.internet.url(),
        followers: faker.random.number({min: 3000, max: 9000}),
    }],
    hashtags:'actor',
    measurements: {
        height: 70,
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
    bodyModifications:'tattoo',
    nudity:'none',
    resume: `As a child, I was lucky enough to know exactly what I wanted to do – Losing myself in the worlds of American heroes such as Butch Cassidy, John Wayne and others – playfully searching for characters’ simplicities and complexities, differences and similarities. 
 
    Years later, I found my place, amongst the madness and the beautiful chaos of New York City, home of the Beatniks and lost boys, all looking for similar dreams. After I completed an acting programme in NYC my journey headed towards Los Angeles to continue education, alongside this, I landed roles in various short films and commercials… the highlight, the lead in an ARRI campaign which took me out to the deserts of California which was shown at the Academy Awards the following year, and playing the ‘Hartley’ in the feature film ‘Chemical Cut’ shot in Hollywood and in Silverlake, CA. 
     
    I was awarded an acting scholarship at the American Academy of Dramatic Arts where I harnessed and perfected my craft, focusing mainly on in-depth acting techniques.
     
    Today I’m based in Stockholm, most recently working on the series ‘Dröm’ on the SVT network.`,
    professionYears:8,
    actingCredits: {
        films: [{
            title:'Dröm', 
            character:'Kommisarie Andreasson',
            castType:'Cast',
            year:2019
        },
        {
            title:'Lust of life', 
            character:'Billy',
            castType:'Cast',
            year:2019
        },
        {
            title:'The experiment', 
            character:'Alex',
            castType:'Cast',
            year:2018
        }],
        theatre: [
            {
                title:'The hardy boy', 
                character:'Frank hardy',
                castType:'Cast',
                year:2018
            }],
        tv: [
            {
                title:'The Duel', 
                character:'Rodney',
                castType:'Cast',
                year:2017
            }],
        nomination: []
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2020/04/image003.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2020/06/Actor-Marten-Eckerstrom-IMA-Content-5-682x1024.jpg',
        mediaReel: 'https://vimeo.com/430974916',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
//
{
    id: '4',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Josefine Backman Juliff',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 5, max: 15}),
    image: `https://www.imacontent.com/wp-content/uploads/2020/06/1-Josefin-Backman-Juliff-IMA-Content-Child-Actress.jpeg`,
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
    eyeColor:'hazel',
    hairColor:'blonde',
    hairLength:'long',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `Josefine has been in different drama groups since the age of 4 and just after she turned 5, she stood on the main stage in her hometown and loved it. She felt at home and knew that she wanted to do it over and over again.

    When a drama school that also does Film & Television opened where she lives in UK, she joined them as she had always loved being in front of the camera and it was a perfect match. She has learned the teamwork behind making a film and all the hard work that it involves and that is now her passion, to be in front of the camera and make the team proud.
    
    She also love dancing and singing and started early with ballet and tap but she does not do it anymore. At age 6 she started competing in Scottish Highland dance and which she still does. When she was 8 years old, she was invited to the Queens 90th Birthday Celebration at the British Embassy in Stockholm as a solo dancer for the grand finale with 2000 guests attending.
    
    She loves learning new things so now she is exploring British sign language and boxing and taking singing lessons.
    
    She looks forward to the future and what it will bring.`,
    athleticEndeavors: [],
    performance: [],
    accent: 'swedish',
    languages: ['english', 'swedish'],
    additionalSkills:'',
    disabilities:'none',
    socialMedia: [{
        name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
        link: faker.internet.url(),
        followers: faker.random.number({min: 3000, max: 9000}),
    }],
    hashtags:'actor',
    measurements: {
        height: 60,
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
    resume: ``,
    professionYears:1,
    actingCredits: {
        films: [],
        theatre: [],
        tv: [],
        nomination: []
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2020/06/1-Josefin-Backman-Juliff-IMA-Content-Child-Actress.jpeg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2020/06/12-12-Child-Actress-Josefine-Backman-Juliff-IMA-Content-683x1024.jpg',
        mediaReel: 'https://vimeo.com/431070759',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
//
{
    id: '5',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Mikael Spreitz',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 40, max: 60}),
    image: `https://www.imacontent.com/wp-content/uploads/2017/06/Actor-Micke-Spreiz-IMA-Content-1-e1534075900356-711x1024.jpg`,
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
    hairColor:'brown',
    hairLength:'short',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `Spreitz is a California based Swedish actor who has a has a multifaceted career. On his resume he can write actor, fight coordinator, television personality, bodyguard and special lecturer.

    Spreitz is well known for The Girl Who Kicked the Hornet’s Nest and The Girl Who Played with Fire where he portrayed Ronald Niederman. Brother of the lead character played by Noomi Rapace. Spreitz has a background as a martial artist. Competing in the Swedish national team. He is a multiple Swedish champion and silver medalist at the European championship in 1985. In 2013 Spreitz founded Fighterhjälpen, a non-profit charity foundation that supports families who have children with cancer.`,
    athleticEndeavors: 'combat - stage',
    performance: 'licensed driver',
    accent: 'swedish',
    languages: ['english', 'swedish'],
    additionalSkills:'Dialects',
    disabilities:'none',
    socialMedia: [{
        name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
        link: faker.internet.url(),
        followers: faker.random.number({min: 3000, max: 9000}),
    }],
    hashtags:'actor',
    measurements: {
        height: 70,
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
    nudity:'tattoo',
    resume: `I am a California based Swedish actor. My most recent work includes a film with Eric Roberts (Unchained) and the very popular Swedish Johan Falk series, which has had a great deal of success in the US as well as The Swedish Gladiators TV show. I’ve done numerous film, tv, commercials and print work, all over Europe over the years. 

    My biggest and most favorite project to date was the Millennium Trilogy.`,
    professionYears:15,
    actingCredits: {
        films: [{
            title:'Unchained', 
            character:'Brock Jones',
            castType:'Cast',
            year:2019
        },
        {
            title:'Barking Mad', 
            character:'Torsten Lindblum',
            castType:'Co-star',
            year:2019
        },
        {
            title:'The girl who Kicked the hornets nest', 
            character:'Ronald Niederman',
            castType:'Co-star',
            year:2018
        }],
        theatre: [],
        tv: [
            {
                title:'Johan Falk', 
                character:'Danne',
                castType:'Cast',
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
        headShot:'https://www.imacontent.com/wp-content/uploads/2017/06/Actor-Micke-Spreiz-IMA-Content-2.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2018/05/Mikael-Spreitz-Actor-IMA-Content-2-683x1024.jpg',
        mediaReel: 'https://vimeo.com/412032088',
        audio: 'https://vimeo.com/412032088',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
//Freida Farrell
{
    id: '6',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Freida Farrell',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 30, max: 40}),
    image: ``,
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
    eyeColor:'blue',
    hairColor:'brown',
    hairLength:'long',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `Farrell is a multi award wining actress and producer having worked in the industry for over 15 years. 

    Her latest feature film, “Apartment 407” is currently showing on 23 platforms in North America and Canada incl Amazon Prime, iTunes and YouTube, where it has been rated “recommended feature film” (Amazon Prime) and “top picks” (YouTube). 
    
    She has also produced six short films and two web series, which have all taken home several awards.
    
    Farrell speaks 5 languages including Swedish, English, Danish, French and a little bit of German.`,
    athleticEndeavors: [],
    performance: [],
    accent: 'swedish',
    languages: ['english', 'swedish', 'german', 'danish'],
    additionalSkills: '',
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
    resume: `I’ve been an actor for most of my adult life. 

    Winning several awards for best actress.
    
    My latest film Apartment 407 has been streamed over 4.5 million hours and is available on 23 different platforms in North America including Amazon Prime, iTunes and YouTube. See it! `,
    professionYears:20,
    actingCredits: {
        films: [{
            title:'Albert', 
            character:'-',
            castType:'Supporting',
            year:2019
        },
        {
            title:'The Rose in The Flame', 
            character:'-',
            castType:'Lead',
            year:2019
        }],
        theatre: [
            {
                title:'Women and War', 
                character:'Barbara Berry',
                castType:'Co-star',
                year:2018
            }],
        tv: [
            {
                title:'Bones', 
                character:'-',
                castType:'Guest',
                year:2016
            }],
        nomination: [{
            title: 'The courtyard', 
            character: 'Miss Julie',
            castType: '-',
            year:2017
        }]
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2019/09/FridaFarrell-4-e1594015837469.jpeg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2019/09/Frida-Farrell-6.jpeg',
        mediaReel: 'https://vimeo.com/411967800',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
// Oskar Sternulf
{
    id: '7',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Oskar Sternulf',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 30, max: 35}),
    image: `https://www.imacontent.com/wp-content/uploads/2020/02/Actor-Oskar-Sternulf-IMA-Content-5jpg-e1594016275145.jpg`,
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
    biography: `Sternulf is an award winning Swedish actor and dancer educated at the Performing Arts School and Broadway Dance Center. His credits include Theatre and Musical Theatre, Drama and Comedy as well as Playwright / Dramaturge. He has a solid resume including “Mamma Mia!” the musical in both Sweden and Finland and “Jesus Christ Superstar”, to name a few. He has over the years received several awards and scholarships and this year is no exception, so far already receiving the scholarship from “Region Blekinge” foundation. This spring he will tour Sweden with his  two own written plays / monologues “#gorgeous, #beautiful, #burntout” and “Coming Out” as well as “The Evil”. His work is published by Colombine Publishers, the largest theatre publisher in the Nordics.`,
    athleticEndeavors: [],
    performance: 'dancing',
    accent: 'swedish',
    languages: ['english', 'swedish', 'norwegian'],
    additionalSkills:'',
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
    resume: `Since graduating from the Performing Arts School (Dance Forum) in Gothenburg in 2007, I have been in several musicals, MAMMA MIA and JESUS CHRIST SUPERSTAR chief among them.

    I have toured around Sweden with monologue performances, two of them my own work, since the spring of 2013, which has been an absolutely incredible experience. In January 2020, I calculated having performed over 1100 times! And I am not done yet.
    
    Being an actor with singing and dancing chops, I have been able to do all kinds of work including stage (both straight theater as well as musicals), film, TV as well as commercials all over Europe. Working in countries like Finland, Germany Italy and Spain has taught me to understand and deeply appreciate how differently we all work. A true pleasure.
    
    I have received 33 cultural awards both from Sweden and Finland from Byggnads, the city of Gothenburg’s cultural committee and the Artist’s committee, to mention a few.`,
    professionYears:10,
    actingCredits: {
        films: [],
        theatre: [
            {
                title:'The Seaman', 
                character:'-',
                castType:'-',
                year:2018
            }],
        tv: [],
        nomination: []
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2020/02/20_02_06-Oskar-CV-web-003.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2019/06/Klocka.jpg',
        mediaReel: 'https://vimeo.com/401980557',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
// ANGELIKA ROBERTS
{
    id: '8',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Angelika Roberts',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 30, max: 40}),
    image: `https://www.imacontent.com/wp-content/uploads/2019/04/Angelika-6-web-1024x683.jpg`,
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
    eyeColor:'hazel',
    hairColor:'blonde',
    hairLength:'long',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `Roberts is a multi-lingual Swedish/German actress with great experience across many different genres both on stage and on the screen.
    She is a unique, diverse and brilliant talent who always performs her scenes very grounded and exciting way. She brings that little extra that you look for in a great actor.
    
    She studied acting at The Lee Strasberg Theatre Institute in New York and has also worked with renowned acting coaches in Los Angeles to develop her craft and grow as an actress. 
    Angelika speaks fluent Swedish, English and German. She has trained Martial Arts and is a very good skier.`,
    athleticEndeavors: ['karate', 'sailing', 'skiing'],
    performance: '',
    accent: 'swedish',
    languages: ['english', 'swedish', 'german'],
    additionalSkills:'',
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
    resume: `I have worked on pretty much every side of the business and I truly love my job. Going deep into character and in doing so having an impact on people’s lives is just the most incredible feeling.

    It makes me immensely proud when people come up to me after a show or a movie and say that they could relate to my character. Seeing themselves up there in one way or another.`,
    professionYears:15,
    actingCredits: {
        films: [{
            title:'Gretas B&B', 
            character:'',
            castType:'Lead',
            year:2019
        },
        {
            title:'En sista Gång', 
            character:'',
            castType:'Supporting',
            year:2019
        },
        {
            title:'Efter Skolan', 
            character:'',
            castType:'Lead',
            year:2018
        }],
        theatre: [
            {
                title:'Fri att flyg', 
                character:'',
                castType:'Lead',
                year:2018
            }],
        tv: [],
        nomination: []
    },
    nonActingCredits: {
        films:[{
            title: 'Träsnidaren',
            role: '',
            year: 2014
        }],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2019/04/Angelika-6-web.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2019/04/Angelica-Roberts-4-web-683x1024.jpg',
        mediaReel: 'https://vimeo.com/401990620',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
    //SOLVEIG HAUGEN
{
    id: '9',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Solveig Haugen',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 30, max: 40}),
    image: `https://www.imacontent.com/wp-content/uploads/2020/01/DSC_7131-3.jpg`,
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
    eyeColor:'green',
    hairColor:'blonde',
    hairLength:'long',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `Haugen is a Swedish-born actress of Estonian-Norwegian descent, with a special interest in and talent for international comedy – the darker the better! Apart from her formal theatrical training at the Los Angeles Performing Arts Conservatory, Solveig’s approach to acting has been greatly influenced by working with legendary acting coach Bathsheba Garnett and mastering her ’Simplicity’ technique. Solveig mainly works in film nowadays. She has lived and worked in the United States, U.K, France and Sweden and also worked in India.

 

    A storyteller at heart and with a background in journalism, Solveig is passionate about research and goes out of her way to get to the truth in each character she plays. She has also ventured into screenwriting and directing.
    
     
    
    In 2016, Solveig played a part based on her own mother in ’I Will Knit You A New Mitten When We Reach Sweden,’ a work-in-progress play that premiered at the Malta International Theatre Festival. Solveig also wrote the play and is now developing it into a film script. It’s her own family story full of culture-clashes between Estonia, Norway and Sweden. Solveig believes that laughter can truly be the best medicine, and it is her intention to make a positive impact on the world through her creativity.`,
    athleticEndeavors: ['horseback riding', 'skiing'],
    performance: 'comedian',
    accent: 'swedish',
    languages: ['english', 'swedish', 'norwegian', 'spanish'],
    additionalSkills:'',
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
    resume: `I’m an Estonian-Norwegian actress and writer who has also ventured into directing. Born and raised in Sweden, I’ve lived internationally since the age of 20. I speak fluent Swedish, English and French, conversational Spanish and Norwegian, and a little bit of Estonian.

    Since graduating from the Los Angeles Performing Arts Conservatory, I’ve done theater, film and TV. A few roles I especially enjoyed playing were Pope Joan in ‘Top Girls,’ the part of my own mother in ‘I Will Knit You A New Mitten When We Reach Sweden,’ and French prostitute Lizette in ‘Paradis.’ I also directed ‘Pippi Longstocking’ as a children’s play in Jaipur, India, which was a truly life changing experience.
    
    I currently spend most of my time between Sweden and Los Angeles       – Solveig Haugen`,
    professionYears:10,
    actingCredits: {
        films: [{
            title:'Entourge', 
            character:'Airline Passenger',
            castType:'',
            year:2019
        },
        {
            title:'Paradis', 
            character:'Lizette',
            castType:'',
            year:2018
        },
        {
            title:'Au Revoid', 
            character:'Solveig Haugen',
            castType:'Lead',
            year:2018
        }],
        theatre: [
            {
                title:'Medusa', 
                character:'Scientist',
                castType:'Introducer',
                year:2018
            }],
        tv: [
            {
                title:'CSI: Miami', 
                character:'Luxury Shopper',
                castType:'Guest',
                year:2017
            }],
        nomination: []
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2020/01/DSC_7131-3.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2020/01/DSC_7135-683x1024.jpg',
        mediaReel: '',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
    //MITCHO BATALOV
{
    id: '10',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Mitcho Batalov',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 30, max: 40}),
    image: `https://www.imacontent.com/wp-content/uploads/2018/05/MGL9395-e1594015869403.jpg`,
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
    eyeColor:'brown',
    hairColor:'brown',
    hairLength:'short',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `Batalov is an international actor, full of energy and passion for his work. Born in Sweden with Serbian parents. Some of his screen work to date includes THE GIRL WITH THE DRAGON TATTOO (US), directed by David Fincher, WALLANDER (SWE), KROONGETUIGE (NL) and DER KOMMISSAR UND DAS MEER (DE). 

    He loves improvising in front of the camera – that and a great portion of curiosity led him to where he is today. He speaks a very solid English as well as his native Swedish and Serbian. He is also great with various accents and dialects. Which he has been able to draw from for the multitude of characters he has played over the years.`,
    athleticEndeavors: ['horseback riding', 'weapons handling'],
    performance: 'licensed driver',
    accent: 'swedish',
    languages: ['english', 'swedish', 'german', 'serbian'],
    additionalSkills:'',
    disabilities:'none',
    socialMedia: [{
        name: faker.random.arrayElement(['facebook', 'instagram', 'twitter']),
        link: faker.internet.url(),
        followers: faker.random.number({min: 3000, max: 9000}),
    }],
    hashtags:'actor',
    measurements: {
        height: 70,
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
    resume: `Being the observant actor that I am, I feel like I’ve been collecting experiences and impressions from both colleagues as well as strangers around me. No one is safe! This has helped me immensely with my film & TV work, commercials, music videos, modeling and theater productions that I have done over the years.
 
    My screen work includes  KROONGETUIGE (NL), DER KOMMISSAR UND DAS MEER (DE), WALLANDER (SWE), and THE GIRL WITH THE DRAGON TATTOO (US, directed by David Fincher), SOLSIDAN (SWE).
     
    Born in Sweden to Serbian parents, I am multilingual, speak a very solid English as well as my native Swedish and Serbian. I can also throw some German in there too. I do various accents and dialects. 
    I live in Malmö in the southern part of Sweden, a stone’s throw away from Copenhagen, Denmark. Wherever the work takes me, I go.`,
    professionYears:20,
    actingCredits: {
        films: [{
            title:'Stardust', 
            character:'Kristoffer',
            castType:'',
            year:2019
        },
        {
            title:'Serpent', 
            character:'Andrei',
            castType:'',
            year:2019
        },
        {
            title:'Walk the talk', 
            character:'Peter',
            castType:'-',
            year:2018
        }],
        theatre: [
            {
                title:'Circus murder', 
                character:'Mr. Tillmar',
                castType:'',
                year:2018
            }],
        tv: [],
        nomination: []
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2020/01/webmail.websupport-1.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2018/01/Actor-Mitcho-Batalov-IMA-Content-4-683x1024.jpg',
        mediaReel: 'https://vimeo.com/401996336',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
    //LINA FREDLUND
{
    id: '11',
    premium: true,
    type: 'talent',
    finishedProfile: true,
    available: makeDates(),
    name: 'Lina Fredlund',
    contact: {
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        citizenship: faker.address.country(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    },
    age: faker.random.number({min: 30, max: 40}),
    image: `https://www.imacontent.com/wp-content/uploads/2017/03/Lina-Fredlund-Actress-IMA-International-Management-Agency-IMA-Content-2.jpg`,
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
    eyeColor:'blue',
    hairColor:'blonde',
    hairLength:'long',
    ethnicity: 'caucassian',
    cast: 'actor',
    biography: `Fredlund is an Actress based in Stockholm, Sweden. With her roots in The North of Sweden, she is making bold choices in her acting and faces new challenges with curiosity and seriousness.`,
    athleticEndeavors: '',
    performance: 'licensed driver',
    accent: 'swedish',
    languages: ['english', 'swedish', 'german'],
    additionalSkills:'',
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
    resume: ``,
    professionYears:20,
    actingCredits: {
        films: [{
            title:'Onåbar', 
            character:'',
            castType:'Supporting',
            year:2019
        },
        {
            title:'Vilse', 
            character:'',
            castType:'Lead',
            year:2019
        },
        {
            title:'Vi är lyckliga', 
            character:'',
            castType:'Lead',
            year:2018
        }],
        theatre: [
            {
                title:'När barnen sove', 
                character:'',
                castType:'Lead',
                year:2018
            }],
        tv: [
            {
                title:'Web series', 
                character:'',
                castType:'Supporting',
                year:2020
            }],
        nomination: []
    },
    nonActingCredits: {
        films:[],
        theatre: [],
        nomination: []
    },
    media: {
        headShot:'https://www.imacontent.com/wp-content/uploads/2016/10/Lina-Fredlund-Actress-IMA-International-Management-Agency-IMA-Content--768x512.jpg',
        slateShot:'https://www.imacontent.com/wp-content/uploads/2016/10/Lina-Fredlund-Actress-IMA-International-Management-Agency-IMA-Content-hel-683x1024.jpg',
        mediaReel: 'https://www.youtube.com/watch?v=3nNzB7zWRAI&feature=emb_logo',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
]

module.exports = talents

/* 
{
    id: '',
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
    age: faker.random.number({min: 30, max: 40}),
    image: ``,
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
    biography: ``,
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
    resume: ``,
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
        theatre: [
            {
                title:'Women and War', 
                character:'Barbara Berry',
                castType:'Co-star',
                year:2018
            }],
        tv: [
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
        headShot:'',
        slateShot:'',
        mediaReel: '',
        audio: '',
    },
    education: [{
        school: faker.lorem.words(2),
        course: faker.lorem.words(2),
        from: faker.random.number({min: 1990, max: 2020}),
        to: faker.random.number({min: 1990, max:2020})
    }]
},
*/