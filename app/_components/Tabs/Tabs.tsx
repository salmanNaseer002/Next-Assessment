import React from 'react';

const Tabs = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: Function }) => {
  const tabs = ['Featured', 'KPI', 'Layouts', 'Storyboards'];

  return (
    <div className="flex space-x-2 bg-[#f1f1f1] rounded-[8px] p-2 mb-16">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-3 px-6 text-base cursor-pointer w-full rounded-[8px] font-bold ${
            activeTab === tab
              ? 'bg-white text-gray-900 border-gray-900'
              : 'bg-transparent text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
