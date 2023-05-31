import React, { useEffect, useState } from 'react';
import "./bookmark.css"

const BookmarkedQuotes = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const handleDeleteBookmark = (index) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks.splice(index, 1);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  return (
    <div className='bookmark__container'>
      <h1>Bookmarked Quotes</h1>
      {bookmarks.length > 0 ? (
        <ul >
          {bookmarks.map((quote, index) => (
            <li className='bookmarked__quotes' key={index}>{quote}
            <button onClick={() => handleDeleteBookmark(index)} className="delete__button">delete</button>
            </li>
            
          ))}
        </ul>
      ) : (
        <p>No bookmarks found.</p>
      )}
    </div>
  );
};

export default BookmarkedQuotes;

