import { QueryResolvers, Book } from '../../types/schemas';

const Query: QueryResolvers = {
  books: () => books,
};

export const bookResolver = { Query };

const books: Book[] = [
  {
    id: 'book_01',
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 'book_02',
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
