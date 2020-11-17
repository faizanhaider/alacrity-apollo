import gql from 'graphql-tag';

export default gql`
  fragment book on Book {
    bookId,
    title,
    author,
    price
  }
`;