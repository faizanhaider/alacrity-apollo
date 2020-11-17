import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { EDIT_BOOK } from "../../gql/mutations/Book";
import { GET_BOOK } from "../../gql/queries/Book";
import BookForm from "../../components/BookForm";
import { useHistory } from "react-router-dom";

interface Props {
  bookId: number;
}

const AddBook: React.FC<Props> = ({ bookId }) => {
  const history = useHistory();
  const [updateBookFun] = useMutation(EDIT_BOOK, {
    onCompleted: () => history.push("/books"),
  });
  const { data, loading } = useQuery(GET_BOOK, {
    variables: { bookId: bookId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BookForm
      defaultValues={data.book}
      onCancel={() => history.push("/books")}
      onSubmit={(data) =>
        updateBookFun({ variables: { bookId: Number(bookId), ...data } })
      }
    />
  );
};

export default AddBook;
