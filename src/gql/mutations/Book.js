import gql from 'graphql-tag';

import bookFragment from '../fragments/Book';

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
      ...book
    }
  }
  ${bookFragment}
`;

export const EDIT_BOOK = gql`
  mutation editBook($bookId: Int!, $title: String!, $author: String!, $price: Float!) {
    editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
      ...book
    }
  }
  ${bookFragment}
`;
