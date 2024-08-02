
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {
  
  const [bookmarks, setBookmarks]= useState([]);

  const handleAddToBookmark = blog => {
    console.log('adding soon')
  }
  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
      <Header />
     <div className='md:flex'>
     <Blogs handleAddToBookmark={handleAddToBookmark}/>
     <Bookmarks />
     </div>
     </div>
    </>
  )
}

export default App
