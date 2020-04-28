import React from 'react';

interface Props {
  words: Array<Word>
}

export const WordList: React.FC<Props> = ({ words }) => {

  const renderList: RenderList = words => {
    return words.map(word => {
      return (
        <li key={word.word}>
          very {word.word} | {word.alternative}
        </li>
      )
    })
  }

  return (
    <div>
      <h2>List of words</h2>
      <ul>
        {renderList(words)}
      </ul>
    </div>
  )
}