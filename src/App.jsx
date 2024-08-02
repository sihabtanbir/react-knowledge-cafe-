
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {
  
  const [bookmarks, setBookmarks]= useState([]);
  const [readTime, setReadingTime]= useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks =[...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleRead = read_time => {
    const newReadingTime = readTime + read_time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
      <Header />
     <div className='md:flex'>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleRead={handleRead} />
     <Bookmarks bookmarks={bookmarks} readTime={readTime}/>
     </div>
     </div>
    </>
  )
}

export default App
