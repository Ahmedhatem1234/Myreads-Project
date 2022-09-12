import ChangeShelf from "./ChangeShelf"

const TheBook = ({Book,thetransfer,shelf}) => {
    return(
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url(${Book?.imageLinks?.smallThumbnail || ''})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <ChangeShelf Book={Book} shelf={shelf} thetransfer={thetransfer} />
                </div>
            </div>
                <div className="book-title">{Book.title}</div>
                <div className="book-authors">{Book.authors}</div>
        </div>
    )
}

export default TheBook