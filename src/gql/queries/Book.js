import gql from 'graphql-tag';

import bookFragment from '../fragments/Book';

export const GET_BOOK = gql`
  query book($bookId: Int!) {
    book(bookId: $bookId) {
      ...book
    }
  }
  ${bookFragment}
`;

export const GET_BOOKS = gql`
  query books {
    books {
      ...book
    }
  }
  ${bookFragment}
`;