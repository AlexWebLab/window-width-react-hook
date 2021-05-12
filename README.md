# About

This React hook returns the current window width.

## Install

```bash
npm i window-width-react-hook
```

Or

```bash
yarn add window-width-react-hook
```

## Usage

1. Include the hook:

   ```javascript
   import useWindowWidth from 'window-width-react-hook';
   ```

2. Use it where is needed:

   ```jsx
   function App() {
    return (
      <div>
        Current width: {useWindowWidth()}px
      </div>
    );
   }
   ```

### License

Licensed under the MIT License, Copyright © 2021 AlexWebLab
