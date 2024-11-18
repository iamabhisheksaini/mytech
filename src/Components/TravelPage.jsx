import React from 'react';

const TravelPage = () => {
  return (
    <div className="bg-black text-white">
      <nav className="flex justify-around py-4 bg-black text-white">
        <a href="#" className="text-white border-b-2 border-green-500">Travel</a>
        <a href="#" className="text-white">Digital</a>
        <a href="#" className="text-white">Brand</a>
        <a href="#" className="text-white">Merch</a>
      </nav>

      <header className="relative">
        <img
          src=".https://storage.googleapis.com/a1aa/image/nf6m4rJyL7VIPSfOeSOYUbYYc9ksEpnLoVsgCjl8DlKpLxjnA.jpg"
          alt="Mountain landscape with a dramatic sky"
          className="w-full h-96 object-cover"
          width="1920"
          height="600"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-6xl font-bold">TRAVEL</h1>
          <p className="text-center mt-4 px-4">
            Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
          </p>
        </div>
      </header>

      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold">Explore Our Curated Travel Itineraries</h2>
        <div className="flex justify-center space-x-4 mt-8">
          {['Darjeeling', 'Munnar', 'Delhi'].map((destination, index) => (
            <div key={index} className="bg-white text-black rounded-lg overflow-hidden shadow-lg w-64">
              <img
                src={`.https://storage.googleapis.com/a1aa/image/${
                  destination === 'Darjeeling'
                    ? 'q7anBIt3DMqUE97uqHeTv8qT9WC9QUhFuyKVyiO5CpX8S84JA.jpg'
                    : destination === 'Munnar'
                    ? '73nsE0ZeQfhJtUyXPkefuS3mAJJg7hCFuZVgtBbv0qsZXiHPB.jpg'
                    : '04bSrHlRHj4VFJIzSQ9m0cfetZwm1k963LKeaNukZyHnLxjnA.jpg'
                }`}
                alt={`${destination} landscape`}
                className="w-full h-48 object-cover"
                width="256"
                height="384"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{`${destination} Itinerary`}</h3>
                <p className="text-sm text-gray-600">
                  {destination === 'Darjeeling' ? 'West Bengal' : destination === 'Munnar' ? 'Kerala' : 'Delhi'}
                </p>
                <p className="mt-2 text-sm">Samira Hadid</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-12">
        <img
          src=".https://storage.googleapis.com/a1aa/image/UJHYdPigoeX6AaZf1QLfzh4PZk0r8P7D5E1r9Sl4XFV0LxjnA.jpg"
          alt="Mountain at night"
          className="w-full h-96 object-cover"
          width="1920"
          height="600"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-2xl font-semibold mb-8">How to list?</h2>
          <div className="flex items-center justify-center space-x-8">
            {['Create Itinerary', 'Convert into Travel Package', 'Earn by sharing'].map((step, index) => (
              <div key={index} className="text-center">
                <i className="fas fa-plane text-4xl mb-4"></i>
                <p>{`0${index + 1}`}</p>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-4">
        <p>You Curate Experience, We Make It Happen</p>
      </footer>
    </div>
  );
};

export default TravelPage;
