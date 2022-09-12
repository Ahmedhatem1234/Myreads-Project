import TheBook from "./Book"

const TheShelf = ({shelf,books,thetransfer}) =>{
    const shelfs_books = books.filter((Book) => (Book.shelf === shelf.id));
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        shelfs_books.map((Book) => (<TheBook key={Book.id} Book={Book} shelf={shelf.id} thetransfer={thetransfer}/>))
                    }
                </ol>
            </div>
        </div>
    );
}

export default TheShelf;