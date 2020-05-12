import React, { useState, ChangeEvent } from 'react';
import { WordList } from './WordList';
import { data } from '../data';
import { Heading, Paragraph } from '../components/Typography';


export const WordInputForm: React.FC = () => {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>   {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const filterWords: RenderList = (words) => {
    return words.filter(word => word.word.indexOf(value) > -1)
  }
  
  return (
    <React.Fragment>
      <main>
        <section>
          <Heading>Don't say very</Heading>
          <Paragraph>Alternate words to use</Paragraph>
          <form onSubmit={handleSubmit}>
            <input 
              value={value} 
              onChange={handleChange} 
              placeholder="Type something here"/>
          </form>
        </section>
      </main>

      <WordList words={filterWords(data)}/>
    </React.Fragment>
  )
}