import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "../../gql/queries/Book";
import { DataGrid, ValueFormatterParams, ColDef } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Book } from "../../models/Books";

const columns: ColDef[] = [
  { field: "bookId", headerName: "ID", width: 70 },
  {
    field: "",
    headerName: "Edit",
    sortable: false,
    width: 160,
    renderCell: (params: ValueFormatterParams) => (
      <Link to={`/books/${params.getValue("bookId")}`}>
        <EditOutlinedIcon />
      </Link>
    ),
  },
  { field: "title", headerName: "Title", width: 130 },
  { field: "author", headerName: "Author", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
];

const BooksList: React.FC<{}> = () => {
  const { data, loading } = useQuery(GET_BOOKS, {
    fetchPolicy: "network-only",
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [toalSelectedBooks, setTotalSelectedBooks] = useState(0);

  if (loading) {
    return <div>Loading...</div>;
  }

  const bookList = (data.books as Book[]).reduce<Array<{ id: number } & Book>>(
    (acc, item: Book) => {
      acc.push({
        id: item.bookId,
        ...item,
      });
      return acc;
    },
    []
  );

  return (
    <>
      <Button>
        <Link to="/books/new">Create New</Link>
      </Button>
      <Typography variant="h6">
        Total Price for {toalSelectedBooks} books: {totalPrice.toFixed(2)}
      </Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={bookList}
          columns={columns}
          pageSize={5}
          checkboxSelection
          onSelectionChange={({ rowIds }) => {
            setTotalSelectedBooks(rowIds.length);
            setTotalPrice(
              rowIds.reduce<number>((acc, value) => {
                acc += data.books.find(
                  (book: Book) => book.bookId === Number(value)
                ).price;
                return acc;
              }, 0)
            );
          }}
        />
      </div>
    </>
  );
};

export default BooksList;
