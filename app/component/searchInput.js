import { useState } from 'react';


const SearchInput = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city)
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='searchInput'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Type City..."
      />
      <button className='submit' type="submit">Search</button>
    </form>
  );
};

export default SearchInput;