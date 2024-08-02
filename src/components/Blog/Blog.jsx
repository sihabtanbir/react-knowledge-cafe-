import { PropTypes } from "prop-types";
import { TbBookmarkPlus } from "react-icons/tb";

const Blog = ({ blog, handleAddToBookmark,handleRead  }) => {
    const {title,cover_img, author, author_img, date,content, read_time} = blog; 

    return (
        <div className="p-4 mb-4">
            <img src={cover_img} alt={`${title}`} className="w-full"/>
            
            <div className="flex justify-between py-2">
                <div className="flex">
                    <img src={author_img} alt={`${author}`} className="w-16 h-16 p-2"/>
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <h3 className="text-xl">{title}</h3>
                    </div>
                </div>

                <div className="flex items-center">
                    <p>{read_time} mn</p>
                    <button className="m-2 text-xl text-red-500 font-bold" onClick={ ()=> handleAddToBookmark(blog)}> <TbBookmarkPlus /> </button>
                </div>
            </div>

            <p>{content}</p>
            <button onClick={() => handleRead(read_time)} className="bg-green-200 p-2 rounded-sm m-2 text-purple-600">Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleRead: PropTypes.func
}
export default Blog;