import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <>
        </>
    );
}

const root = document.getElementById('nucleolus-in-f1-react-app') as HTMLElement;
if (!!root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}