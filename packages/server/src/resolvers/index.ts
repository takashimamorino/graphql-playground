import { mergeResolvers } from '@graphql-tools/merge';
import { resolvers as scalarResolvers } from 'graphql-scalars';
import { bookResolver } from './book';
import { userResolver } from './user';

export const resolvers = mergeResolvers([
  scalarResolvers,
  bookResolver,
  userResolver,
]);
