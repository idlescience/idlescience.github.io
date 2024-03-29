import React from 'react';
import ReactDOM from 'react-dom/client';

import CooperativeGameTool from './posts/cooperative-game-tool';
import NucleolusInF1 from './posts/nucleolus-in-f1';
import IEABenefitsRedistribution from './posts/iea-benefits-redistribution';

const pages: { [key: string]: JSX.Element } = {
    'cooperative-game-tool': <CooperativeGameTool />,
    'nucleolus-in-f1': <NucleolusInF1 />,
    'iea-benefits-redistribution': <IEABenefitsRedistribution />,
};

for (const pageName in pages) {
    const pageAppRoot = document.getElementById(`${pageName}-react-app`) as HTMLElement;
    if (!!pageAppRoot) {
        ReactDOM.createRoot(pageAppRoot).render(<React.StrictMode>{pages[pageName]}</React.StrictMode>);
    }
}
