import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { fetchTypes } from './http/itemAPI';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HelmetProvider>
        <App />
    </HelmetProvider>
);
