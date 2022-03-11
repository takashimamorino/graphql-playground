/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
  '\n  query BooksQuery {\n    books {\n      id\n      ...BookFragment\n    }\n  }\n':
    graphql.BooksQueryDocument,
  '\n  fragment BookFragment on Book {\n    title\n    author\n  }\n':
    graphql.BookFragmentFragmentDoc,
};

export function gql(
  source: '\n  query BooksQuery {\n    books {\n      id\n      ...BookFragment\n    }\n  }\n'
): typeof documents['\n  query BooksQuery {\n    books {\n      id\n      ...BookFragment\n    }\n  }\n'];
export function gql(
  source: '\n  fragment BookFragment on Book {\n    title\n    author\n  }\n'
): typeof documents['\n  fragment BookFragment on Book {\n    title\n    author\n  }\n'];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
