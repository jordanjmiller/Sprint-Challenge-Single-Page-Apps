import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard.js';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getMovies = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response);
          console.log(response.data.results);
          setCharacters(response.data.results.slice(0));
          console.log(characters);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characters.map((char, index) => {
        return <CharacterCard char={char} />
      })}
    </section>
  );
}
