import { mergeResolvers } from '@graphql-tools/merge';
import { resolvers as scalarResolvers } from 'graphql-scalars';
import { bookResolver } from './book';

export const resolvers = mergeResolvers([scalarResolvers, bookResolver]);
