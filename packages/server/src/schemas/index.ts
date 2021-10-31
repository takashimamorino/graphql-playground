import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { typeDefs as scalarsTypeDefs } from 'graphql-scalars';
import { typeDefs as didScalarsTypeDefs } from 'did-graphql-scalars';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));
const types = [scalarsTypeDefs, didScalarsTypeDefs, typesArray];

export const typeDefs = mergeTypeDefs(types);
