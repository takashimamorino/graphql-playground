import { mergeResolvers } from '@graphql-tools/merge';
import { resolvers as scalarResolvers } from 'graphql-scalars';
import { bookResolver } from './book';
import { userResolver } from './user';
import { GraphQLDID } from '../scalars';

const customScalars = {
  DID: GraphQLDID,
};

export const resolvers = mergeResolvers([
  scalarResolvers,
  customScalars,
  bookResolver,
  userResolver,
]);
