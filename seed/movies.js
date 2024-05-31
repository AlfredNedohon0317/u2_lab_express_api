const db = require('../db')
const Actor = require('../models/actor')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const martinLawrence = await Actor.find({ name: 'martin lawrence' })
    const willSmith = await Actor.find({ name: 'will smith ' })
    const  leonardoDecaprio= await Actor.find({ name: 'leonardo decaprio' })
    const kateWinslet = await Actor.find({ name: "kate winslet" })
    const  felicityJones = await Actor.find({ name: "felicity Jones" })
    const  diegoLuna = await Actor.find({ name: "diego luna" })
    const timotheeChalamet = await Actor.find({ name: "Timothee Chalamet" })
    const zendaya = await Actor.find({ name: "Zendaya" })
    const auliCravalho = await Actor.find({ name: "auli'i cravalho" })
    const dwayneTheRockJohonson = await Actor.find({ name: 'dwayne "the rock"johonson ' })
    
    const movies = [
        {
            title: "Bad boys 2",
            director: "michael bay ",
            runtimeInMinutes: 147,
            rating: 100,
            yearReleased: 2003,
            description: "cop everywhere",
            genre: "action comedy",
            poster:"https://m.media-amazon.com/images/M/MV5BZmU4NzVkZjEtZmQxMi00ZDY5LWI3ZDYtMWRmZjE5YmYwZjQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            
        },
        {
            title: "titanic",
            director: "james cameron",
            runtimeInMinutes: 195,
            rating: 100,
            yearReleased: 1997,
            description: " boat hit ice berg & sinks fast ",
            genre: "comedy",
            poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
          
        },
        {
            title: "rougue one ",
            director: " gareth edwards",
            runtimeInMinutes: 134,
            rating: 100,
            yearReleased: 2016,
            description: "romance, comendy, aliens, robots and lots of lasers ",
            genre: "scifi",
            poster: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg",
           
        },
        {
            title: "Dune: Part Two",
            director: "Denis Villeneuve",
            runtimeInMinutes: 166,
            rating: 1000,
            yearReleased: 2024,
            description: "Sequel to Dune(2021), the film follows Paul Atriedes as he fufills his destiny and takes vengeance on the Harkonnens",
            genre: "Science Fiction",
            poster: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
           
        },
    {   
            title: "moana",
            director: "",
            runtimeInMinutes: 107,
            rating: 85,
            yearReleased: 2016,
            description: "comedy, action, musical, heart-felt , animation with a snce of adventure  ",
            genre: "action comedy",
            poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg",
            
        },
        
    ]
    await Movie.insertMany(movies)
    console.log('Created Movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()
