import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCss from "@src/assets/global.styled";
import { GlobalProvider } from '@src/context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalProvider>
    <GlobalCss />
    <App />
    </GlobalProvider>
)
