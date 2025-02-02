interface SourceBook {
  book_id: number;
  title: string;
}

interface SourceAuthor {
  author_id: number;
  name: string;
}

interface SourceBookAuthor {
  author_id: number;
  book_id: number;
}

interface SourceBookUid {
  book_id: number;
  uid: string;
}

interface SourceBookmark {
  bookmark_id: number;
  uid: string;
  book_id: number;
  bookmark_text: string;
  creation_time: number;
  paragraph: number;
  word: number;
  chart: number;
}
