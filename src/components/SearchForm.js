import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard.js';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

export default function SearchForm(props) {
  console.log(props.characters);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
     setSearchTerm(event.target.value);
   };
   useEffect(() => {
      const results = props.characters.filter(char =>
        char.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
      console.log(results);
      console.log(searchResults);
    }, [searchTerm]);

  return (
    <section className="search-form">
      <div className="App">
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        />
        <ul>
          {searchResults.map(item => (
            <li>
              <CharacterCard char={item} searchbool={true}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}




// const people = [
//   "Siri",
//   "Alexa",
//   "Google",
//   "Facebook",
//   "Twitter",
//   "Linkedin",
//   "Sinkedin"
// ];

// function App() {

