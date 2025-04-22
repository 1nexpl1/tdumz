import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { fetchTypes } from './http/itemAPI';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <App/>
);
