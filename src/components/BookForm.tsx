import React, { useState } from "react";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import { UnPersistentBook } from "../models/Books";

interface Props {
  defaultValues?: UnPersistentBook;
  onCancel: () => void;
  onSubmit: (data: UnPersistentBook) => void;
}

const BookForm: React.FC<Props> = ({ defaultValues, onCancel, onSubmit }) => {
  const [title, setTitle] = useState(defaultValues?.title || "");
  const [price, setPrice] = useState(defaultValues?.price || 0);
  const [author, setAuthor] = useState(defaultValues?.author || "");

  const handlePriceChange = (e: any) => {
    const shouldUpdate = e.target.value.replace(/[.0-9]/g, "").length;
    if (shouldUpdate) return;

    const value = parseFloat(e.target.value || "0").toFixed(2);
    setPrice(parseFloat(value));
  };

  const isValid = !!(price > 0 && title.length && author.length);

  return (
    <Container maxWidth="sm">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={!title.length}
                  label="Title"
                  margin="normal"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!(price > 0)}
                  label="Price"
                  margin="normal"
                  value={price}
                  onChange={(e) => handlePriceChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!author.length}
                  label="Author"
                  margin="normal"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={onCancel} color="secondary">
              Cancel
            </Button>
            <Button
              disabled={!isValid}
              onClick={() => onSubmit({ price, title, author })}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BookForm;
