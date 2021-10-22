import { useQuery } from '@apollo/client';
import { VFC } from 'react';
import { BooksDocument } from './books';

export const Books: VFC = () => {
  const { data, loading, error } = useQuery(BooksDocument);
  console.log({ data });
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
