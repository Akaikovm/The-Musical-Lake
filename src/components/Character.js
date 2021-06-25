import React from "react";
import "../components/Character.css";

function Character({ animal, remainingSong  }) {
  return (
    <div className="container">
      <img src={animal.image} alt={animal.name} />
      <ul>
        {animal.sounds.map((sound) => (
          <button className="buttons" onClick={() => remainingSong(sound)}>
            {sound}
          </button>
        ))}
      </ul>
    </div>
  );
}
export default Character;
