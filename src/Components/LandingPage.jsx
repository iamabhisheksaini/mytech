// src/pages/LandingPage.jsx
import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <div className="text-5xl font-bold space-y-4">
                    <div className="bg-white text-black inline-block px-4 py-2 rounded">One</div>
                    <div className="bg-white text-black inline-block px-4 py-2 rounded">Stop</div>
                    <div className="bg-white text-black inline-block px-4 py-2 rounded">Marketplace</div>
                    <div className="bg-white text-black inline-block px-4 py-2 rounded">For</div>
                    <div className="bg-green-500 text-black inline-block px-4 py-2 rounded">Influencers</div>
                </div>
                <p className="mt-8 text-lg">
                    "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
                </p>
                <div className="mt-8 space-x-4">
                    <button className="bg-green-500 text-black px-6 py-2 rounded">Demo Store</button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded">Join Waitlist</button>
                </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img alt="Person taking a photo with a camera" className="rounded-lg" height="300" src="https://storage.googleapis.com/a1aa/image/f5lOvhS4GY18AyIfXCUPOoFikkHe2eNm2yrpqyfOktOgHDPeE.jpg" width="300" />
                <img alt="Person walking in a forest with a backpack" className="rounded-lg" height="300" src="https://storage.googleapis.com/a1aa/image/yjtR3mED2aIQJZbV1factN67EsjJ4Y9clsjC2FZ1G5AcM84JA.jpg" width="300" />
                <img alt="Person sitting on a ledge overlooking a mountain road" className="rounded-lg" height="300" src="https://storage.googleapis.com/a1aa/image/Joizf9jtZfkf8o6Sx9cPsedsflfwAeWawb8BylI2BuQtSM84JA.jpg" width="300" />
                <img alt="Portrait of a person with colorful lighting" className="rounded-lg" height="300" src="https://storage.googleapis.com/a1aa/image/dUvuEeghONQnIi6CZikpNDKhKDmWKwnghOksj3BN0qXaM84JA.jpg" width="300" />
                <img alt="Two people posing in stylish outfits" className="rounded-lg" height="300" src="https://storage.googleapis.com/a1aa/image/geeZJSDdULukfogiXl4HMPLLbXx7KIZ1qLet7RJBRSRuihHPB.jpg" width="300" />
                <img alt="Two people walking on a bridge in autumn" className="rounded-lg" height="300" src="https://storage.googleapis.com/a1aa/image/l9eBwghuUd3elUGNGQfsTp9mfc8BNj3WBb7sfR2GFjH4FDPeE.jpg" width="300" />
            </div>
        </div>
    );
};

export default LandingPage;