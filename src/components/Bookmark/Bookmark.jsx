import  PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {content} = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-sm ">
            <p className="bg-white p-2 rounded-sm">{content}</p>
        </div>
    );
};

Bookmark.PropTypes={
    bookmark: PropTypes.object 
}
export default Bookmark;