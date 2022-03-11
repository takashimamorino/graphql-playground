import { VFC } from 'react';
import { useQuery } from '@apollo/client';
import { useFragment, FragmentType, gql } from '../../gql';

const BooksQuery = gql(/* GraphQL */ `
  query BooksQuery {
    books {
      id
      ...BookFragment
    }
  }
`);

export const Books: VFC = () => {
  const { data, loading, error } = useQuery(BooksQuery);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error!</p>;
  }

  return (
    <ul>
      {data.books.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  );
};

const BookFragment = gql(/* GraphQL */ `
  fragment BookFragment on Book {
    title
    author
  }
`);

type Props = {
  book: FragmentType<typeof BookFragment>;
};

export const Book: VFC<Props> = (props) => {
  const book = useFragment(BookFragment, props.book);

  return (
    <>
      <p>{book.title}</p>
      <p>{book.author}</p>
    </>
  );
};
