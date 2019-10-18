import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {
  console.log(props.char);
  console.log(props.char.id);
  console.log(props.currentChar);

  const MainDiv = styled.div`
  `;
  const CardDiv = styled.div`
  border: 1px solid black;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  `;
  
  return <MainDiv>{(() => { 
    if (props.char.id === props.currentChar || props.searchbool){ 
      return <CardDiv>
        <h2>{props.char.name}</h2>
        <img src={props.char.image} alt={props.char.name} />
        <p>Status: {props.char.status}</p>
        <p>Species: {props.char.species}</p>
        <p>Type: {props.char.type}</p>
      </CardDiv>} })()}
    </MainDiv>
}
