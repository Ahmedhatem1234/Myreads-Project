import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import BookSearch from "./BookSearch";
import BookMain from "./BookMain";
import { Route, Routes } from "react-router-dom";




function App() {

  const [Books,setBooks] = useState([]);
  
  
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }

    getBooks();
  }, [])

  const transferbook = (book,shelf) => {
    BooksAPI.update(book, shelf);

    let newBooks = Books.filter((BK) => BK.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      newBooks = newBooks.concat(book);
    }
    setBooks(newBooks);
  }


  const shelves = [{id:'currentlyReading',name:'Currently Reading'},
  {id:'wantToRead',name:'Want to Read'},
  {id:'read',name:'Read'}]


  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={
          <BookMain  theshelfnames={shelves} thetransfer={transferbook} Books={Books}/>
        } />
        <Route path="/booksearch" element={<BookSearch Books={Books} thetransfer={transferbook} />} />
    </Routes>
    </div>
  );
}

export default App;
