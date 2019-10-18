import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard.js';
import SearchForm from "./SearchForm.js";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([])
  const [currentChar, setCurrentChar] = useState(1)
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
  const buttonIncFunc = () => {
    console.log(currentChar);
    if (currentChar < characters.length){
      setCurrentChar(currentChar+1);
    }
  };
  const buttonDecFunc = () => {
    console.log(currentChar);
    if (currentChar > 1){
      setCurrentChar(currentChar-1);
    }
  };

  return (
    <>
    <SearchForm characters={characters} currentChar={currentChar} setCurrentChar={setCurrentChar}/>
    <section className="character-list">
      <button onClick={buttonDecFunc}>Previous</button><button onClick={buttonIncFunc}>Next</button>
      {/* {characters.map((char, index) => {
        return <CharacterCard char={char} />
      })} */}
      {characters.map((char, index) => {
        return <CharacterCard char={char} currentChar={currentChar} searchbool={false}/>
      })}
    </section>
    </>
  );
}
