import React, { useState, ChangeEvent } from 'react';
import { WordList } from './WordList';
import { data } from '../data';

export const WordInputForm: React.FC = () => {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      <h1>Don't say very {value}</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange}/>
      </form>
      <WordList words={filterWords(data)}/>
    </React.Fragment>
  )
}