import { mergeResolvers } from '@graphql-tools/merge';
import { bookResolver } from './book';

export const resolvers = mergeResolvers([bookResolver]);
