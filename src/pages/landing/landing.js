import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./landing.css";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

const Landing = () => {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('https://random-quote-generator2.p.rapidapi.com/tags');
        const { tags } = response.data;
        setTags(tags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    const fetchRandomQuote = async () => {
      try {
        const response = await axios.get(
          'https://quotes15.p.rapidapi.com/quotes/random/',
          {
            headers: {
              'X-RapidAPI-Key': 'ea505b0f91mshfcfdd77e022a166p17e006jsn42139ef1a6fe',
              'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
          }
        );

        const { content, originator, tags } = response.data;
        const { name } = originator;

        setQuote(content);
        setName(name);
        setTags(tags);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchTags();
    fetchRandomQuote();
  }, []);

  const fetchQuote = async (tag) => {
    try {
      const response = await axios.get(
        'https://quotes15.p.rapidapi.com/quotes/random/',
        {
          params: {
            tag: tag
          },
          headers: {
            'X-RapidAPI-Key': 'ea505b0f91mshfcfdd77e022a166p17e006jsn42139ef1a6fe',
              'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
          }
        }
      );

      const { content, originator, tags } = response.data;
      const { name } = originator;

      setQuote(content);
      setName(name);
      setTags(tags);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    if (selectedTag) {
      fetchQuote(selectedTag);
    }
  }, [selectedTag]);

  const handleNewQuote = () => {
    fetchQuote(selectedTag);
  };

  const handleBookmark = () => {
    if (!bookmarks.includes(quote)) {
      const updatedBookmarks = [...bookmarks, quote];
      setBookmarks(updatedBookmarks);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    }
  };

  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  const handleTagChange = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);
  };

  return (
    <div className='landing__container'>
      <h1>Random Quote Generator</h1>

      <select className='landing__tags' value={selectedTag} onChange={handleTagChange}>
        <option value="">All Tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>

      {quote && (
        <div className='landing__quote'>
          <p>{quote}</p>
          <p className='author__name'>-{name}</p>
          <button onClick={handleBookmark} className={`bookmark__button ${bookmarks.includes(quote) ? 'bookmarked' : ''}`}>
            <BsFillBookmarkPlusFill size={30} color='white' margin-right className={`react-icons ${bookmarks.includes(quote) ? 'dimmed' : ''}`} />
          </button>
        </div>
      )}
      <button onClick={handleNewQuote} className='nextquote__button'>Next quote</button>
    </div>
  );
};

export default Landing;
