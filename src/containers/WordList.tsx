import React from 'react';
import { List } from '../components/List';
import { ListItem } from '../components/ListItem';
import { Container } from '../components/Container';
import { Primary, Secondary } from '../components/Label';
import { Section } from '../components/Wrapper';
import { Heading } from '../components/Typography';

interface Props {
  words: Array<Word>
}

export const WordList: React.FC<Props> = ({ words }) => {

  const renderList: RenderList = words => {
    if (words.length === 0) {
      return (
        <React.Fragment>
          <Heading>Word not found... <span role="img" aria-label="sad face">😞</span></Heading>
        </React.Fragment>
      )
    }
    return words.map(word => {
      return (
        <ListItem key={word.word}>
          <Primary>{word.word}</Primary>
          <Secondary>{word.alternative}</Secondary>
        </ListItem>
      )
    })
  }

  return (
    <Section>
      <Container>
        <List>
          {renderList(words)}
        </List>
      </Container>
    </Section>
  )
}