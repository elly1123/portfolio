import { TabType } from '@/app/types/portfolio';

interface TabMenuProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabMenu = ({ activeTab, onTabChange }: TabMenuProps) => {
  return (
    <div className="max-w-6xl mx-auto pt-8 mb-8">
      <div className="inline-flex bg-gray-600 rounded-full p-1">
        {['All', 'Company', 'Side'].map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab as TabType)}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === tab
                ? 'bg-white text-black'
                : 'text-[#F5F5F5] hover:bg-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
