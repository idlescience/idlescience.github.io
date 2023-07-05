# idlescience.github.io
♻️ Idle Science | Reduce, Reduce, Recycle

## Edit a page

- Add the *javascript* attribute to page.markdown header
```
---
layout: page
title: Page Title
permalink: /page-permalink
javascript: page-javascript-file.js
---
```

- Create the page-javascript-file.tsx at *src/* with a content similar to
```
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- Add and entry to the build options in *vite.config.js*

```
...
      entry: [
        resolve(__dirname, 'src/page-javascript-file.tsx'),
      ],
...
```

## Run Jekyll
```
bundle exec jekyll serve --baseurl=""
```

## Run Vite
```
yarn debug
```
