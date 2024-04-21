import { FaSearch } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import Select from 'react-select';

function Search({ onSearchTermChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const prevSearchTerm = useRef('');

  // Define handleSearch function outside useEffect
  const handleSearch = () => {
    console.log('Previous value:', prevSearchTerm.current);
    console.log('Current value:', searchTerm);
    prevSearchTerm.current = searchTerm;
    let resultPlaceholder = searchTerm ? `results for "${searchTerm}"` : '';
    setSearchResults(resultPlaceholder);

    // Pass the searchTerm value to the parent component
    onSearchTermChange(searchTerm);
  };

  useEffect(() => {
    console.log("Current search term:", searchTerm);
    handleSearch(); // Call handleSearch when searchTerm changes
  }, [searchTerm]);

  const handleSelectChange = (selectedOption) => {
    setSearchTerm(selectedOption.value);
  };

  const handleSearchClick = () => {
    // Trigger search function when search icon is clicked
    handleSearch();
  };

  const options = [
    { value: 'Merryland', label: 'Merryland' },
    { value: 'Jedigar', label: 'Jedigar' },
    { value: 'B2g2', label: 'B2g2' },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '2px solid #e2e8f0',
      borderRadius: '0.375rem',
      boxShadow: state.isFocused ? '0 0 0 1px rgba(25, 24, 71, 0.2)' : 'none',
      '&:hover': {
        borderColor: 'rgba(25, 24, 71, 0.2)',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#191847' : 'white',
      color: state.isSelected ? 'white' : '#4a5568',
      '&:hover': {
        backgroundColor: 'rgba(25, 24, 71, 0.2)',
        color: '#191847',
      },
    }),
  };

  return (
    <div className='flex px-32'>
      <div className="flex items-center space-x-4 ml-auto">
        <p className="text-primary-txt text-opacity-95">Filter by:</p>
        <Select
          className="rounded-lg p-2 py-3 outline-none"
          options={options}
          onChange={handleSelectChange}
          styles={customStyles}
          placeholder="Select Company"
        />
        <div className="relative">
          <input
            type="text"
            className="bg-white rounded-lg py-2 pr-24 pl-8 outline-none text-primary-txt text-opacity-80"
            placeholder={searchResults || "Search for books"}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-txt text-xl cursor-pointer"
            onClick={handleSearchClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
