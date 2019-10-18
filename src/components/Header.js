import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function Header() {
  const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  `;
  return (
    <header className="ui centered">
      <StyledLink to='/'><h1 className="ui center">Rick &amp; Morty Fan Page</h1></StyledLink>
    </header>
  );
}
