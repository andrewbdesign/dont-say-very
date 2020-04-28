type Word = {
  word: string;
  alternative: string;
}

type RenderList = (word: Array<Word>) => DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>