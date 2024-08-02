import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from "prop-types";


const Blogs = ({handleAddToBookmark, handleRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog
                    key ={ blog.id}
                    blog= {blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleRead={handleRead}></Blog>
                 )
            }
        </div>
    );
};

Blogs.propTypes = {
    
    handleAddToBookmark: PropTypes.func,
    handleRead: PropTypes.func 
}
export default Blogs;