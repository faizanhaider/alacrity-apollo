export type UnPersistentBook = {
  title: string;
  author: string;
  price: number;
};

export type Book = UnPersistentBook & { bookId: number };
