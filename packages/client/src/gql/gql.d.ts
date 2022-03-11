/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

declare module '@apollo/client' {
  export function gql(
    source: '\n  query BooksQuery {\n    books {\n      id\n      title\n      author\n    }\n  }\n'
  ): typeof import('./graphql').BooksQueryDocument;
  export function gql(source: string): unknown;

  export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
}
