'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import Tabs from '@/components/Tabs';
import ItemCard from '@/components/ItemCard';
import LayoutModal from '@/components/LayoutModal';
import StoryboardModal from '@/components/StoryboardModal';
import KPIModal from '@/components/KPIModal';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('featured');
  const [items, setItems] = useState([]); 
  const [allItems, setAllItems] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    async function fetchItems() {
      const res = await fetch('/api/items');
      const data = await res.json();
      setAllItems(data);
      setItems(data.featured);
    }

    fetchItems();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim() && allItems[activeTab]) {
      setItems(allItems[activeTab]);
      setFilteredItems([]);
    }
  }, [activeTab, searchQuery, allItems]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredItems([]);
      return;
    }

    const combinedItems = Object.values(allItems).flat();
    const filtered = combinedItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalType(item.type);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType('');
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full p-4 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Library</h1>
            <p className="text-gray-500">
              Browse for assets needed to report and present analysis.
            </p>
          </div>
          <button
            onClick={() => console.log('Request Access clicked')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Request
          </button>
        </div>
        <SearchBar onSearch={handleSearch} />
        {searchQuery.trim() === '' && (
          <>
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            {activeTab === 'featured' && allItems.trending && (
              <section>
                <h2 className="text-2xl font-bold mt-8">Trending</h2>
                <p className="text-gray-500 mb-4">Most popular by community</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {allItems.trending.map((item) => (
                    <ItemCard
                      key={item.id}
                      {...item}
                      onClick={() => handleItemClick(item)}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {searchQuery.trim() !== '' && (
          <section>
            <h2 className="text-2xl font-bold mt-8">Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <ItemCard
                  key={item.id}
                  {...item}
                  onClick={() => handleItemClick(item)}
                />
              ))}
            </div>
          </section>
        )}

        {searchQuery.trim() === '' && (
          <section>
            <h2 className="text-2xl font-bold mt-8 capitalize">{activeTab}</h2>
            <p className="text-gray-500 mb-4">
              {activeTab === 'featured'
                ? 'Curated top picks from this week'
                : `Explore items related to ${activeTab}`}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  {...item}
                  onClick={() => handleItemClick(item)}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {modalType === 'layout' && selectedItem && (
        <LayoutModal
          isOpen={!!selectedItem}
          onClose={closeModal}
          data={selectedItem}
        />
      )}
      {modalType === 'storyboard' && selectedItem && (
        <StoryboardModal
          isOpen={!!selectedItem}
          onClose={closeModal}
          data={selectedItem}
        />
      )}
      {modalType === 'kpi' && selectedItem && (
        <KPIModal
          isOpen={!!selectedItem}
          onClose={closeModal}
          data={selectedItem}
        />
      )}
    </div>
  );
}
