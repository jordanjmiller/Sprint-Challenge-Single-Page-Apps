import React from "react";

export default function CharacterCard(props) {
  console.log(props.char);
  console.log(props.char.id);
  console.log(props.currentChar);
  
  return <div>{(() => { 
    if (props.char.id === props.currentChar || props.searchbool){ 
      return <div>
        <p>{props.char.name}</p>
        <img src={props.char.image} alt={props.char.name} />
        <p>Status: {props.char.status}</p>
        <p>Species: {props.char.species}</p>
        <p>Type: {props.char.type}</p>
      </div>} })()}
    </div>
}
