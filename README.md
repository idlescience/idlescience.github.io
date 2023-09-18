# idlescience.github.io
♻️ Idle Science | Reduce, Reduce, Recycle

## Edit a post
One common issue when build a post is to forget the relation between ReactJS and Jekyll posts. To leverage this relation you must include the ```<div id='YOUR_CUSTOM_NAME-react-app'></div>``` element in the _posts/YOUR_CUSTOM_NAME.md, ausing "YOUR_CUSTOM_NAME-react-app" as a container id location mapped automatically by the ReactJS app.

1) Create the TSX post script at *src/posts/YOUR_CUSTOM_NAME.tsx* with a content similar to
```typescript
const YOUR_CUSTOM_NAME = () => {
    return (
        <>
            Hello World!
        </>
    );
}

export default YOUR_CUSTOM_NAME;
```

2) Add an entry to the pages dictionary at the *src/App.tsx* file
```typescript
import YOUR_CUSTOM_NAME from './posts/YOUR_CUSTOM_NAME';

const pages: { [key: string]: JSX.Element } = {
    'YOUR_CUSTOM_NAME': <YOUR_CUSTOM_NAME />,
};
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
