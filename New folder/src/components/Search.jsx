

import React, { useState, useContext } from 'react';
import SearchBox from './SearchBox';
import ImageList from './ImageList';
import { getImageData } from './Api'; // function to fetch image data
import { ImageContext } from '../context/ImageContext';

function Search() {
  const { images, setImages, setLoading, setError } = useContext(ImageContext);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    try {
      const imageData = await getImageData(query);
      setImages(imageData.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container '>
      <SearchBox query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default Search;