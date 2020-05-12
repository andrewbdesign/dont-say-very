import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { WordInputForm } from './WordInputForm';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }

  input {
    background: #fff;
    border: none;
    padding: 10px;
    width: 100%;
    max-width: 480px;
    font-size: 1rem;
    border-radius: 4px;
    margin: 0 auto;
  }

  form {
    padding: 20px;
    margin: 0 auto;
    display: flex;
  }

  main {
    padding: 4rem 0;
    text-align: center;
    background: #7F7FD5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
  }

`

export const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <WordInputForm />
    </div>
  )
}