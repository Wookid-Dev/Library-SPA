import React, { useState } from 'react';

interface StoryboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    description: string;
    tags: string[];
    details: {
      read: number;
      type: string;
      pages: number;
      lastUpdated: string;
    };
    coupledKpis: string[];
    applicableAffiliates: string[];
    previewImage: string;
  };
}

const StoryboardModal = ({ isOpen, onClose, data }: StoryboardModalProps) => {
  
  const handleShare = () => {
    const shareLink = `${window.location.origin}/share/${data.name}`;
    navigator.clipboard.writeText(shareLink);
    alert('Link copied to clipboard!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-xl w-full p-6">
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={handleShare}
            className="text-blue-600 hover:text-blue-800 transition"
            title="Copy shareable link"
          >
            🔗 Share
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
            title="Close"
          >
            ✕
          </button>
        </div>

        <div className="text-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <p className="text-gray-500">{data.description}</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 text-center mb-6">
          <div>
            <p className="text-lg font-bold">{data.details.read}</p>
            <p className="text-gray-500 text-sm">Read</p>
          </div>
          <div>
            <p className="text-lg font-bold">{data.details.type}</p>
            <p className="text-gray-500 text-sm">Type</p>
          </div>
          <div>
            <p className="text-lg font-bold">{data.details.pages}</p>
            <p className="text-gray-500 text-sm">Pages No.</p>
          </div>
          <div>
            <p className="text-lg font-bold">{data.details.lastUpdated}</p>
            <p className="text-gray-500 text-sm">Last Updated</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-gray-200 rounded-lg shadow h-24 flex justify-center items-center mx-auto w-2/4">
            <p className="text-gray-500">Storyboard Preview</p>
          </div>
        </div>

        <h3 className="text-lg font-bold mb-4">Coupled KPIs</h3>
        <div className="grid grid-cols-2 gap-4">
          {data.coupledKpis.map((kpi, index) => (
            <div
              key={index}
              className="p-4 border rounded bg-gray-100 text-sm text-gray-600"
            >
              {kpi}
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold mt-6 mb-4">Applicable Affiliates</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {data.applicableAffiliates.map((affiliate, index) => (
            <div
              key={index}
              className="p-4 border rounded bg-gray-100 text-sm text-gray-600"
            >
              {affiliate}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => console.log('Request Access clicked')}
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
          >
            Request Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryboardModal;
