import * as Types from '../../types/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type BooksQueryVariables = Types.Exact<{ [key: string]: never }>;

export type BooksQuery = {
  __typename?: 'Query';
  books?:
    | Array<
        | { __typename?: 'Book'; id: string; title: string; author: string }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const BooksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Books' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'books' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BooksQuery, BooksQueryVariables>;
