import React from 'react';

const VybStorePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black text-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-500">From Creation to Monetization: Vyb Store Has It All</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <h2 className="text-xl font-bold">Trusted By Influencers</h2>
          <p className="mt-2">A trusted platform for influencers to grow and earn.</p>
          <div className="flex justify-center mt-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/64dgkLK6YE4WHVeGf173nuSSnAMLWX7WZlmP6TnzdjABnfjnA.jpg"
              alt="Image of a smiling man"
              className="rounded-full mx-2"
              width="60"
              height="60"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/put6OZYGnjJQCxw4hxFapVS8UC2k6rem3hJL1XqzcAmfmfjnA.jpg"
              alt="Image of a smiling woman"
              className="rounded-full mx-2"
              width="60"
              height="60"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/WVINDalWjt4hANrOvl0CaoHzmv7zXfD491QWttsyF3gdzfxTA.jpg"
              alt="Image of a man with a beard"
              className="rounded-full mx-2"
              width="60"
              height="60"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/fEWnmLYuGQxRNyhWOLGWzMvWVevRXhBCvG7eom4BBAbHOfHPB.jpg"
              alt="Image of a woman with curly hair"
              className="rounded-full mx-2"
              width="60"
              height="60"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">Secured Data</h2>
          <p className="mt-2">Advanced security measures to protect your valuable data</p>
          <div className="flex justify-center mt-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/OjqVt0eQ1pRbKy08SJC8mfzhrB8RtZO3wBQpMemrlMZBOfHPB.jpg"
              alt="Image of a computer screen with a lock icon"
              className="mx-2"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">Authentic Payment Partner</h2>
          <p className="mt-2">Reliable, fast, and secure payments you can trust</p>
          <div className="flex justify-center mt-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/ZTT0QlmUUY6oBlV9qYybtTcK8mUf84PjBploLQVnCMLczfxTA.jpg"
              alt="Image of a mobile phone with a payment icon"
              className="mx-2"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">Monetize Your Influence</h2>
          <p className="mt-2">Seamlessly turn your influence into consistent revenue</p>
          <div className="flex justify-center mt-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/OQcRVRRWehVf5UESRT1vUaOnY7sjsTa0wI3qHPf9ppI7NfHPB.jpg"
              alt="Image of a money bag with coins"
              className="mx-2"
              width="100"
              height="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VybStorePage;
