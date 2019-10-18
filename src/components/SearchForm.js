import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard.js';

export default function SearchForm(props) {
  // console.log(props.characters);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermStatus, setSearchTermStatus] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsStatus, setSearchResultsStatus] = useState([]);

  const handleChange = event => {
     setSearchTerm(event.target.value);
   };
  const handleChangeStatus = event => {
     setSearchTermStatus(event.target.value);
   };

   useEffect(() => {
     if (searchTerm !== ""){
      const results = props.characters.filter(char =>
        char.name.toLowerCase().includes(searchTerm)
      );
      setSearchTermStatus("");
      setSearchResults(results);
      props.setCurrentChar(0);
    }
    else{
      setSearchResults([]);
      props.setCurrentChar(1);
    }
    }, [searchTerm]);
    useEffect(() => {
      if (searchTermStatus !== ""){
       const results = props.characters.filter(char =>
         char.status.toLowerCase().includes(searchTermStatus)
       );
       setSearchTerm("");
       setSearchResults(results);
       props.setCurrentChar(0);
     }
     else{
       setSearchResults([]);
       props.setCurrentChar(1);
     }
     }, [searchTermStatus]);

  const clearFunc= () => {
    setSearchTerm("");
    setSearchTermStatus("");
    props.setCurrentChar(1);
  };
  
  return (
    <section className="search-form">
      <div className="App">
        <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleChange}
        />
        <input
        type="text"
        placeholder="Search by status"
        value={searchTermStatus}
        onChange={handleChangeStatus}
        />
        <button onClick={clearFunc}>Clear</button>
        <ul>
          {/* {(()=>{
            if (searchTerm !== ""){
              return <li>{searchTerm}</li>
            }
            else if (searchTermStatus !== ""){
              return <li>{searchTermStatus}</li>
            }
          })()} */}
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

