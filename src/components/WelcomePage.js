import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function WelcomePage() {
  const Header = styled.header`
  text-align: center;
  `;
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to='/Characters'><img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /></Link>
      </Header>
    </section>
  );
}
