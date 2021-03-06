const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune/", (req, res) => {
  const fortunes = ['Get the fries. You\'ll need the energy in the coming days.', 
      'Jack of all trades, master of none, but better a jack of all than a master of one.', 
      'Sometimes things aren\'t that bad you just need to eat.', 'Your cynicism is killing you.',
      'You WILL meet a cat today. Pet them.', 'Don\'t go chasing waterfalls...']

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune)
})

let songs = []
let globalId = 1

app.post("/api/visitorSongs/", (req, res) => {
  let {song, artist} = req.body
  let newSong = {
    id: globalId,
    song,
    artist
  }
  songs.push(newSong)
  globalId++
  res.status(200).send(songs)
})

app.get("/api/naruto/", (req, res) => {
  const phrase = 'You can do it, dattebayo!!!'

    res.status(200).send(phrase)
})

app.get("/api/jukebox", (req, res) => {
  const playlist = ['lil-ceasar-ban', 'sun-picnic', 'underwater-organ']
  let randomIndex = Math.floor(Math.random() * playlist.length);
  let randomsong = playlist[randomIndex];

  res.status(200).send(randomsong)
})

app.listen(4000, () => console.log("Server running on 4000"));
