const db = require('../db')
const Movie = require('../models/movie')
const Actor = require('../models/actor')

db.on('error', console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    const badBoy2 = await Movie.find({title: "badBoys2"})
    const titanic = await Movie.find({title: "titanic"})
    const rogueOne = await Movie.find({title: "rogueOne"})
    const dune = await Movie.find({title: "Dune: Part Two"})
    const moana = await Movie.find ({title: "moana"})
    const actors = [
        {
            name: 'Will Smith',
            age: 55,
            alive: true,
            headshot: 'https:goldenglobes.com/wp-content/uploads/2023/10/will-smith-c-hfpa-2016.jpg',
            movie: badBoy2[0]._id,
                
            
        },
        {
            name: 'martin lawrence ',
            age: 59,
            alive: true,
            headshot: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMartin_Lawrence&psig=AOvVaw24hJbl9_8UhT2uZ84Iewy4&ust=1717201581440000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLC52sPQtoYDFQAAAAAdAAAAABAE",
            movie: badBoy2[0]._id,
                
            
        },
        {
            name: 'leonardo decaprio',
            age: 49,
            alive: true,
            headshot: "https://goldenglobes.com/wp-content/uploads/2023/10/leo-2023.jpg",
            movie: titanic[0]._id,
                
            
        },
        {
            name: 'kate winslet',
            age: 48,
            alive: true,
            headshot: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRrYvodsBFAKtMOXwZqt2EJe_YNdri47lknZWkdU00jOL1kJclu",
            movie: titanic[0]._id,
                
            
        },
        {
            name: 'felicity jones ',
            age: 40,
            alive: true,
            headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItQHwkbP4SIz2ndhVxbgfZASMXfmzUdUFEQz0yWjtp7nMv-02",
            movie: rogueOne[0]._id,
                
            
        },
        {
            name: 'diego luna',
            age: 44,
            alive: true,
            headshot: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSN4G6rW1K-_D_M-tO-e7xZyOOadjpF7EQXBEMV_8ufgBx-pDiF",
            movie: rogueOne[0]._id,
                
            
        },
        {
            name: "Timothee Chalamet",
            age: 28,
            alive: true,
            headshot: "https://m.media-amazon.com/images/M/MV5BNThiOTM4NTAtMDczNy00YzlkLWJhNTEtZTZhNDVmYzlkZWI0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            movie: dune[0]._id,
                
            
        },
        {
            name: "Zendaya",
            age: 27,
            alive: true,
            headshot: "https://hips.hearstapps.com/hmg-prod/images/actress-zendaya-poses-for-a-photocall-as-part-of-the-news-photo-1714172482.jpg?crop=0.66667xw:1xh;center,top&resize=640:*",
            movie: dune[0]._id,
                
            
        },
        {
            name: "auli'i cravalho",
            age: 23,
            alive: true,
            headshot: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQy6GSZwIvDBHOn7IUObwvIT9iVtutaO0hsgsrafhRnYwDqloHL",
            movie: moana[0]._id,
                
           
        },
        {
            name: 'dwayne "the rock "johonson ',
            age: 52,
            alive: true,
            headshot: "https://m.media-amazon.com/images/M/MV5BMTk3ODIzMDA5Ml5BMl5BanBnXkFtZTcwNDY0NTU4Ng@@._V1_.jpg",
            movie: moana [0]._id,
                
            
        }
    ]
    await Actor.insertMany(actors)
    console.log('Created Actors!')

}

const run = async () => {
    await main()
    db.close()
}

run()