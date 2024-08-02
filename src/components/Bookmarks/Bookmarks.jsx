import  PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readTime}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-2xl">Reading Time: {readTime}</h2>
            <h2 className="text-2xl text-center">Bookmarks : {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark, i) => <Bookmark key={ i } bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readTime: PropTypes.func 
}

export default Bookmarks;