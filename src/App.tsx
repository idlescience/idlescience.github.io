import React from 'react';
import ReactDOM from 'react-dom/client';

import CooperativeGameTool from './page/cooperative-game-tool';
import NucleolusInF1 from './page/nucleolus-in-f1';

const pages: { [key: string]: JSX.Element } = {
    'cooperative-game-tool': <CooperativeGameTool />,
    'nucleolus-in-f1': <NucleolusInF1 />,
};

for (const pageName in pages) {
    const pageRoot = document.getElementById(`${pageName}-react-app`) as HTMLElement;
    if (!!pageRoot) {
        ReactDOM.createRoot(pageRoot).render(<React.StrictMode>{pages[pageName]}</React.StrictMode>);
    }
}
