import { Link } from "react-router-dom";
import Thetitle from "./title"
import TheShelf from "./BookShelf";


const BookMain = ({theshelfnames, thetransfer, Books}) => {
    return (
        <div className="list-books">
          <Thetitle />
          <div className="list-books-content">
            <div>
              {
                theshelfnames.map((shelf) => (
                  <TheShelf key={shelf.id}  shelf={shelf} books={Books} thetransfer={thetransfer} />
                ))
              }
            </div>
          </div>
          <div className="open-search">
            <Link to="/booksearch">Add a book</Link>
          </div>
        </div>
    );
}

export default BookMain;