import React from 'react';

const FAQ = () => {
  return (
    <div className="bg-black text-white font-sans">
      <div className="container mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-500">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="mt-2">
            Quick answers to questions you may have. Can't find what you're looking for?
            <br />
            Check out our full documentation.
          </p>
        </div>
        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">How much does it cost to set up a store?</h2>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">What kind of digital products can I sell?</h2>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">Do I need technical skills to use the platform?</h2>
              <i className="fas fa-minus"></i>
            </div>
            <p className="mt-2">
              No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!
            </p>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">Is there a limit to the number of products I can list?</h2>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">How do I receive payments for my sales?</h2>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">Can I sell internationally on this marketplace?</h2>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">What support and resources are available for sellers?</h2>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">Is there a review process for uploaded products?</h2>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
