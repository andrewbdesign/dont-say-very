import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10px;
  /* grid-row-gap: 10px; */

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    padding: 10px;
    border: 2px solid transparent;
  }

  li:hover {
    border: 2px solid #7F7FD5;
  }
`