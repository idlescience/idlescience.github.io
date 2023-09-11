# idlescience.github.io
♻️ Idle Science | Reduce, Reduce, Recycle

## Edit a page
One common issue when build a post is to forget the relation between ReactJS and Jekyll posts. To leverage this relation you must include the ```<div id='YOUR_CUSTOM_NAME-react-app'></div>``` element in the _posts/YOUR_CUSTOM_NAME.md, and use "YOUR_CUSTOM_NAME-react-app" as a container id location in the ReactJS app.

1) Create the page-javascript-file.tsx at *src/pages/YOUR_CUSTOM_NAME.tsx* with a content similar to
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

const root = document.getElementById('YOUR_CUSTOM_NAME-react-app') as HTMLElement;
if (!!root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
```

2) Add and entry to the build options in *vite.config.js*

```json
...
      entry: [
        resolve(__dirname, 'src/page-javascript-file.tsx'),
      ],
...
```

## Run full blog
```bash
yarn build --watch & bundle exec jekyll serve --baseurl=""
```

## Build Vite
When you make any change to the ReactJS applications, you may rebuild a production compilation to make it available for Jekyll. to do so, please run:
```bash
yarn build
```

## Debug ReactJS Vite app
It is common to debug a separate instances from Blog of the ReactJS applications. You can bring up a development servver of Vite running the rollowing command:
```bash
yarn dev
```

## Run Jest tests and watch
To run ReactJS applications tests, please run:
```bash
yarn test --watch
```
