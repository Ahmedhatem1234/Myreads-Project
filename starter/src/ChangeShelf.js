import { useState } from "react";

const ChangeShelf = ({shelf,Book,thetransfer}) => {
    const [theshelf, settheshelf] = useState(shelf)

    const makechange = (val) => {
        settheshelf(val);
        thetransfer(Book, val);
    }

    return(
    <select value={theshelf} onChange={(event) => makechange(event.target.value)}>
        <option value="none" disabled>
            Move to...
        </option>
        <option value="currentlyReading">
            Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>);
}

export default ChangeShelf;