import React, { useState } from "react";

import Header from "./components/Header";
import Character from "./components/Character";
import SongList from "./components/SongList";

import cricketImage from "./assets/Criket.png";
import dragonflyImage from "./assets/Dragonfly.png";
import frogImage from "./assets/Frog.png";

function App() {
  const [songResult, setSongResult] = useState("");
  const [songNumber, setSongNumber] = useState("");

  const frog = {
    name: "frog",
    image: frogImage,
    sounds: ["brr", "birip", "brrah", "croac"],
  };
  const dragonfly = {
    name: "dragonfly",
    image: dragonflyImage,
    sounds: ["fiu", "plop", "pep"],
  };
  const cricket = {
    name: "cricket",
    image: cricketImage,
    sounds: ["cric-cric", "trri-trri", "bri-bri"],
  };

  let songs = [
    "brr, fiu, cric-cric, brrah",
    "pep, birip, trri-trri, croac",
    "bri-bri, plop, cric-cric, brrah",
  ];

  const remainingSong = (setSounds) => {
    let result;

    songs.some((song, number) => {
      const regex = new RegExp(`(${setSounds}),?`);
      if (regex.test(song)) {
        setSongNumber(number + 1);
        result = song.slice(song.indexOf(setSounds) + setSounds.length + 2);
      }
      return regex.test(song);
    });

    setSongResult(result);
  };

  return (
    <div className="app">
      <header className="app-header">
        <Header />
        <SongList />
        <div className="container">
          <div className="animals">
            <Character animal={frog} remainingSong={remainingSong} />
            <Character animal={dragonfly} remainingSong={remainingSong} />
            <Character animal={cricket} remainingSong={remainingSong} />
          </div>
        </div>
        <p className="song-number-text">
          {songNumber ? `This is the Song ${songNumber}` : "Select a sound"}
        </p>
        <p className="song-sounds-text">{songResult}</p>
      </header>
    </div>
  );
}

export default App;
