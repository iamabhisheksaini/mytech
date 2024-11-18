// pages/_app.js
import React from 'react';
import '../styles/globals.css'; // Import global styles if you have any

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;