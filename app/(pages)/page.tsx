"use client";

import React, { useState } from "react";
import Image from "next/image";
import FeaturedIcon from "../_assets/images/featured-icon.png";
import AssetModal from "../_components/AssetModal/AssetModal";
import SearchBar from "../_components/SearchBar/SearchBar";
import Tabs from "../_components/Tabs/Tabs";

const Library = () => {
  const [activeTab, setActiveTab] = useState<
    "Featured" | "KPI" | "Layouts" | "Storyboards"
  >("Featured");
  const [FeaturedOpenModalId, setFeaturedOpenModalId] = useState<number | null>(
    null,
  );
  const [TradingOpenModalId, setTradingOpenModalId] = useState<number | null>(
    null,
  );

  const openFeaturedModal = (id: number) => () => setFeaturedOpenModalId(id);
  const closeFeaturedModal = () => setFeaturedOpenModalId(null);

  const openTradingModal = (id: number) => () => setTradingOpenModalId(id);
  const closeTradingModal = () => setTradingOpenModalId(null);

  const tabContent = {
    Featured: {
      heading: "Featured",
      description: "Curated top picks from this week",
    },
    KPI: {
      heading: "KPI",
      description: "Key performance indicators",
    },
    Layouts: {
      heading: "Layouts",
      description: "Browse various layouts",
    },
    Storyboards: {
      heading: "Storyboards",
      description: "Creative storyboards for your projects",
    },
  };

  const FeatureItems = Array.from({ length: 4 }).map((_, index) => ({
    id: index,
    name: `Item ${index + 1}`,
    description: "Short description of the item goes nicely here.",
    date: "06/27/2024",
  }));

  const TradingItems = Array.from({ length: 4 }).map((_, index) => ({
    id: index,
    name: `Item ${index + 1}`,
    description: "Short description of the item goes nicely here.",
    date: "06/27/2024",
  }));

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 sm:p-8 font-sans text-center max-w-4xl mx-auto">
      <header className="mb-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Library
        </h1>
        <p className="text-gray-900 text-sm sm:text-base mb-8 sm:mb-12">
          Browse for assets needed to report and present analysis.
        </p>
      </header>

      <SearchBar />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="text-left mb-8">
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-3">
          {tabContent[activeTab].heading}
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-12">
          {tabContent[activeTab].description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {FeatureItems.map((item) => (
            <div
              className="bg-white rounded-lg p-4 flex items-center transition-shadow"
              key={item.id}
            >
              <div className="text-2xl mr-4">
                <Image src={FeaturedIcon} alt="Logo" width={60} height={60} />
              </div>
              <div
                className="flex-1 cursor-pointer"
                onClick={openFeaturedModal(item.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>

              {FeaturedOpenModalId === item.id && (
                <AssetModal isOpen={true} onClose={closeFeaturedModal} />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="text-left mb-8">
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-3">
          Trending
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-12">
          Most popular by community
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {TradingItems.map((item) => (
            <div
              className="rounded-lg p-4 flex items-center transition-shadow"
              key={item.id}
            >
              <div className="text-2xl mr-4">
                <Image src={FeaturedIcon} alt="Logo" width={60} height={60} />
              </div>
              <div
                className="flex-1 cursor-pointer"
                onClick={openTradingModal(item.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>

              {TradingOpenModalId === item.id && (
                <AssetModal isOpen={true} onClose={closeTradingModal} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Library;
