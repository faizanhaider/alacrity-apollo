import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_BOOK } from "../../gql/mutations/Book";
import BookForm from "../../components/BookForm";
import { useHistory } from "react-router-dom";

export default function AddBook() {
  const history = useHistory();
  const [createBookFn] = useMutation(CREATE_BOOK, {
    onCompleted: () => history.push("/books"),
  });

  return (
    <BookForm
      onCancel={() => history.push("/books")}
      onSubmit={(data) => {
        createBookFn({ variables: { ...data } });
      }}
    />
  );
}
