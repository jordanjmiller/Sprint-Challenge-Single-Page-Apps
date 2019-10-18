import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList.js';


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
    </main>
  );
}
