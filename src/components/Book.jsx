import React from 'react';
import { PlusIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const AbstractBook = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen h-screen w-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-3/4 h-5/6 flex mb-24 mt-10">
        {/* Left Panel */}
        <div className="w-3/5 p-8">
          <div className="flex justify-between items-center mb-4">
            <ChevronLeft className="text-gray-600 cursor-pointer" size={24} />
            <PlusIcon className="text-gray-600" size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Left Panel Title</h2>
          <p className="text-gray-700">Content of the left panel goes here.</p>
        </div>

        {/* Right Panel */}
        <div className="w-3/5 p-8 border-l border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <PlusIcon className="text-gray-600" size={24} />
            <ChevronRight className="text-gray-600 cursor-pointer" size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Right Panel Title</h2>
          <p className="text-gray-700">Content of the right panel goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default AbstractBook;