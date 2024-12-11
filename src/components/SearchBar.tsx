import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedSearches = JSON.parse(
      localStorage.getItem('recentSearches') || '[]'
    );
    setRecentSearches(storedSearches);
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;

    const updatedSearches = [
      query,
      ...recentSearches.filter((item) => item !== query),
    ].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));

    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    setIsDropdownOpen(false);
  };

  const handleSelectSearch = (selectedQuery: string) => {
    setQuery(selectedQuery);
    onSearch(selectedQuery);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center border rounded px-2 focus-within:ring focus-within:ring-blue-300">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
          className="w-full px-2 py-2 focus:outline-none"
          placeholder="Search..."
        />

        <button
          onClick={handleClear}
          className="text-gray-500 hover:text-gray-700 focus:outline-none px-2"
        >
          ✕
        </button>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition ml-2"
        >
          Search
        </button>
      </div>

      {isDropdownOpen && recentSearches.length > 0 && (
        <div className="absolute left-0 top-full mt-2 bg-white border rounded shadow-md w-full z-10">
          {recentSearches.map((search, index) => (
            <div
              key={index}
              onClick={() => handleSelectSearch(search)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {search}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
