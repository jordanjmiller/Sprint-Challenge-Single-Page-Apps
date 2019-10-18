import React from "react";

export default function CharacterCard(props) {
  console.log(props.char);
  return <p>{props.char.name}</p>;
}
