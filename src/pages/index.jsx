// // pages/index.js
// import Header from '../components/Header';

// const Home = () => {
//     return (
//         <div>
//             <Header />
//             {/* Other components or content */}
//         </div>
//     );
// };

// export default Home;


// src/pages/index.jsx
import React from 'react';
import Header from '@/Components/Header';
import LandingPage from '@/Components/LandingPage';
import TravelPage from '@/Components/TravelPage';
import VybStorePage from '@/Components/VybStorePage';
import Influencers from '@/Components/Influencers';
import GetStarted from '@/Components/GetStarted';
import FAQ from '@/Components/FAQ';
const HomePage = () => {
    return (
        <div>
            <Header/>
            <LandingPage/>
            <TravelPage/>
            <VybStorePage/>
            <Influencers/>
            <GetStarted/>
            <FAQ/>
        </div>
    );
};

export default HomePage;