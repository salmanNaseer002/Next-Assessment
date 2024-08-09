"use client";

import React, { useEffect } from "react";
import {
  LinkIcon,
  XMarkIcon,
  BookmarkIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const AssetModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] p-4 sm:top-8 sm:left-0">
      <div className="bg-white w-full max-w-[90%] sm:max-w-[750px] rounded-lg px-8 sm:px-16 py-4 shadow-lg h-[90%] sm:h-[80%] relative overflow-auto">
        <LinkIcon className="absolute text-gray-900 top-4 right-12 sm:right-8 text-xl sm:text-2xl bg-transparent border-none cursor-pointer w-4" />
        <XMarkIcon
          className="absolute text-gray-900 top-4 right-4 sm:right-2 text-xl sm:text-2xl bg-transparent border-none cursor-pointer w-5"
          onClick={onClose}
        />

        <div className="text-center mb-5">
          <div className="w-12 h-12 bg-gray-200 text-gray-900 rounded mx-auto mb-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-5xl text-gray-900 mb-1 font-medium">
            INTES{" "}
            <span className="text-sm sm:text-base text-gray-500 ml-1 bg-gray-200 p-1 rounded-sm relative sm:-top-3">
              Layout
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-8">
            Descriptive name of the Layout
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Those options are already baked in with this model shoot me an email
            clear blue water but we need distributors to evangelize the new line
            to local markets.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            <span className="bg-gray-200 py-1 px-2 rounded text-xs sm:text-sm border border-gray-300 text-gray-600">
              #comms
            </span>
            <span className="bg-gray-200 py-1 px-2 rounded text-xs sm:text-sm border border-gray-300 text-gray-600">
              #coverage
            </span>
            <span className="bg-gray-200 py-1 px-2 rounded text-xs sm:text-sm border border-gray-300 text-gray-600">
              #stakeholders
            </span>
          </div>
          <div className="flex flex-wrap justify-around mb-5">
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <span className="text-xl font-semibold text-gray-900">2485</span>
              <span className="text-sm text-gray-500 flex gap-1">
                Used
                <InformationCircleIcon className="text-gray-500 top-4 right-2 text-xl sm:text-2xl bg-transparent border-none cursor-pointer w-5" />
              </span>
            </div>
            <div className="hidden sm:block border-l border-gray-300 h-16 mx-4"></div>
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <span className="text-xl font-semibold text-gray-900">
                Universal
              </span>
              <span className="text-sm text-gray-500">Type</span>
            </div>
            <div className="hidden sm:block border-l border-gray-300 h-16 mx-4"></div>
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <span className="text-xl font-semibold text-gray-900">6</span>
              <span className="text-sm text-gray-500 flex gap-1">
                Pages No.
                <InformationCircleIcon className="text-gray-500 top-4 right-2 text-xl sm:text-2xl bg-transparent border-none cursor-pointer w-5" />
              </span>
            </div>
            <div className="hidden sm:block border-l border-gray-300 h-16 mx-4"></div>
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <span className="text-xl font-semibold text-gray-900">
                07/23/2024
              </span>
              <span className="text-sm text-gray-500">Last Updated</span>
            </div>
          </div>
        </div>

        <div className="h-32 sm:h-64 rounded bg-gray-100 mb-8"></div>

        <div className="mb-5">
          <h3 className="text-xl sm:text-2xl text-gray-900 font-semibold mb-3">
            Business Questions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-3 rounded">
              <p className="text-lg font-semibold text-gray-900">Question 1</p>
              <p className="text-gray-500">
                Short description of the item goes nicely here.
              </p>
            </div>
            <div className="p-3 rounded">
              <p className="text-lg font-semibold text-gray-900">Question 2</p>
              <p className="text-gray-500">
                Short description of the item goes nicely here.
              </p>
            </div>
            <div className="p-3 rounded">
              <p className="text-lg font-semibold text-gray-900">Question 3</p>
              <p className="text-gray-500">
                Short description of the item goes nicely here.
              </p>
            </div>
            <div className="p-3 rounded">
              <p className="text-lg font-semibold text-gray-900">Question 4</p>
              <p className="text-gray-500">
                Short description of the item goes nicely here.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded cursor-pointer border-none text-base w-full flex justify-center items-center gap-2"
            onClick={onClose}
          >
            <BookmarkIcon className="text-xl sm:text-2xl bg-transparent border-none cursor-pointer w-4" />
            Favorite item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetModal;
