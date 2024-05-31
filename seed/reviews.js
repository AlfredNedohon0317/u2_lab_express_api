const db = require('../db')
const Review = require('../models/review')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    const airplane = await Movie.find({title: "bad boys 2!"})
    const noCountryForOldMen = await Movie.find({title: "moana"})
    const banshees = await Movie.find({title: "Titanic"})


    const reviews = [
        {
            movie: badBoys2[0]._id,
            score: 100,
            comment: "Packed to the brim with hilarious jokes, bad boys 2 is a comedy , and arguably one of the best cop  movies of all time."
        },
        {
            movie: badBoys2[0]._id,
            score: 27,
            comment: "As a retired police officer  who has arrested so many   I did not find the events of the film to be humourus in any way"
        },
        {
            movie: titanic [0]._id,
            score: 100,
            comment: "makes me want to be on a cruise ship "
        },
        {
            movie: titanic [0]._id,
            score: 10,
            comment: "this movie was dryer then the sahara desert wheres the violence ",
            
            movie: moana[0]._id,
            score: 100,
            comment: "anything with 'therock' is a great movie "
        },
        {
            movie: moana[0]._id,
            score: 10,
            comment: "if i hear another muiscal im blowing my eardrums out with a q-tip "
        },


    ]
    await Review.insertMany(reviews)
    console.log('Created reviews!')

}

const run = async () => {
    await main()
    db.close()
}

run()