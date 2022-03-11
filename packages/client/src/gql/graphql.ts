/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DID: any;
  DateTime: any;
  EmailAddress: any;
  URL: any;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  user: User;
  users: Array<Maybe<User>>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  birthDate: Scalars['DateTime'];
  books: Array<Maybe<Book>>;
  did: Scalars['DID'];
  email: Scalars['EmailAddress'];
  homePage?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type BooksQueryQueryVariables = Exact<{ [key: string]: never }>;

export type BooksQueryQuery = {
  __typename?: 'Query';
  books?: Array<{
    __typename?: 'Book';
    id: string;
    title: string;
    author: string;
  } | null> | null;
};

export const BooksQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BooksQuery' },
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
} as unknown as DocumentNode<BooksQueryQuery, BooksQueryQueryVariables>;
