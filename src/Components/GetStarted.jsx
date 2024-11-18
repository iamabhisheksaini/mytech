// import React from 'react';

// const GetStarted = () => {
//   return (
//     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//       <div className="text-center mb-8">
//         <h1 className="text-2xl font-bold text-green-500">How to get started?</h1>
//       </div>
//       <div className="bg-red-600 rounded-lg p-8 flex items-center justify-center space-x-8">
//         <div className="text-white max-w-sm">
//           <h2 className="text-2xl font-bold mb-4">Sign Up and create your own store hassle-free.</h2>
//           <p className="text-base">
//             Join us via Google sign-in and verify your influencer status by entering your social media ID to unlock your store at zero cost.
//           </p>
//         </div>
//         <div className="bg-black rounded-lg p-6 w-80">
//           <button className="bg-white text-black font-medium py-2 px-4 rounded w-full flex items-center justify-center mb-4">
//             <i className="fab fa-google mr-2"></i> Login with Google
//           </button>
//           <div className="text-gray-400 text-center mb-4">OR</div>
//           <input
//             type="email"
//             placeholder="Email"
//             className="bg-gray-800 text-white py-2 px-4 rounded w-full mb-4"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="bg-gray-800 text-white py-2 px-4 rounded w-full mb-4"
//           />
//           <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded w-full mb-4">
//             Login
//           </button>
//           <div className="text-gray-400 text-center">
//             Don't have an account? <a href="#" className="text-green-500">Get Started</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStarted;


import React from 'react';

const GetStarted = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen relative">
      <div className="absolute top-8 text-center">
        <h1 className="text-2xl font-bold text-green-500">How to get started?</h1>
      </div>
      <div className="bg-red-600 rounded-lg p-8 flex items-center justify-center space-x-8">
        <div className="text-white max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Sign Up and create your own store hassle-free.</h2>
          <p className="text-base">
            Join us via Google sign-in and verify your influencer status by entering your social media ID to unlock your store at zero cost.
          </p>
        </div>
        <div className="bg-black rounded-lg p-6 w-80">
          <button className="bg-white text-black font-medium py-2 px-4 rounded w-full flex items-center justify-center mb-4">
            <i className="fab fa-google mr-2"></i> Login with Google
          </button>
          <div className="text-gray-400 text-center mb-4">OR</div>
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-800 text-white py-2 px-4 rounded w-full mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 text-white py-2 px-4 rounded w-full mb-4"
          />
          <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded w-full mb-4">
            Login
          </button>
          <div className="text-gray-400 text-center">
            Don't have an account? <a href="#" className="text-green-500">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
