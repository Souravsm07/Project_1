
import React from 'react';
import './Component.css'
const SearchBox = ({ query, setQuery, handleSearch }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <>
    <div className='container searchbox'>
      <h1 className=' text '><b>Image Search</b></h1>
      <form action="form" onSubmit={handleSubmit}>
      <div> <input type="text" class="form-control" value={query} onChange={handleChange} placeholder='Search images here'></input>
      </div>
      <button type="submit" class="btn btn-outline-primary">SEARCH</button>
      </form>
    </div>
    </>
  );
};

export default SearchBox;
