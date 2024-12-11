interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  const tabs = ['featured', 'kpi', 'layouts', 'storyboards'];

  return (
    <div className="flex space-x-4 border-b border-gray-300 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`p-2 text-sm font-medium ${
            activeTab === tab
              ? 'text-accent border-b-2 border-accent'
              : 'text-gray-600'
          } hover:text-accent`}
          onClick={() => onTabChange(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}{' '}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
