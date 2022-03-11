import { useQuery, gql } from '@apollo/client';
import { VFC } from 'react';

const BooksQuery = gql(/* GraphQL */ `
  query BooksQuery {
    books {
      id
      title
      author
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
          <p>{book.id}</p>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </li>
      ))}
    </ul>
  );
};
