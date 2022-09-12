import { useState } from "react"
import { Link } from "react-router-dom";
import TheBook from "./Book"
import * as BooksAPI from './BooksAPI';



const BookSearch = ({Books,thetransfer}) => {

    const [booksofsearch,setbooksofsearch] = useState([])

    const searchForBooks = (word) => {
        if (word.length > 0) {
          BooksAPI.search(word).then(books => {
            if (books.error) {
                setbooksofsearch([]);
            } else {
                setbooksofsearch(books);
            }
          });
        } else {
            setbooksofsearch([]);
        }
      };
    
    const [query,SetQuery] = useState("")
    
    const updatequery= (searchword) => {
        SetQuery(searchword)
        searchForBooks(searchword);
    }


    const showedBooks = booksofsearch.map(Book => {
        Books.map(bk => {
          if (bk.id === Book.id) {
            Book.shelf = bk.shelf;
          }
          return bk;
        });
        return Book;
      });
      
    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input 
                    type="text" placeholder="Search by title, author, or ISBN" 
                    value={query} 
                    onChange={(event) => updatequery(event.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {showedBooks.map((Book) => (
                        <li key={Book.id}>
                            <TheBook Book={Book} shelf={Book.shelf ? Book.shelf : 'none'} thetransfer={thetransfer} /> 
                        </li>      
                        ))}
                </ol>
            </div>
        </div>);
}



export default BookSearch;