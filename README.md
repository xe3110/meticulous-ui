# meticulous-ui

Build production-ready React apps faster with components, hooks, utilities, icons, and design tokens — all in one package ✨
⚡ Tree-shakable
🎯 TypeScript ready
♿ Accessible (ARIA + Semantic HTML)
🎨 23 color palettes
🧩 Components + Hooks + Utils

[![npm version](https://img.shields.io/npm/v/meticulous-ui)](https://www.npmjs.com/package/meticulous-ui)
[![npm downloads](https://img.shields.io/npm/dm/meticulous-ui)](https://www.npmjs.com/package/meticulous-ui)

---

## 🚀 Demo

[meticulous-ui.vercel.app](https://meticulous-ui.vercel.app/)

## 🚀 Installation

```bash
npm install meticulous-ui
# or
yarn add meticulous-ui
```

**Peer dependencies** — install these if you haven't already:

```bash
npm install react react-dom styled-components
```

## Why Meticulous UI?

Unlike many UI libraries, meticulous-ui combines:

✅ Components
✅ Hooks
✅ Utilities
✅ Icons
✅ Tokens
✅ Tree-shaking
✅ Styled-components theming

One install instead of 5 packages.

## 🧩 Quick Start

```jsx
import { Button, Input, Shimmer, Toast } from 'meticulous-ui';
import blue from 'meticulous-ui/colors/blue';

function App() {
  return (
    <>
      {/* Loading skeleton */}
      <Shimmer width={200} height={20} />

      {/* Themed button */}
      <Button theme={blue} onClick={() => console.log('clicked')}>
        Submit
      </Button>

      {/* Controlled input */}
      <Input label='Email' color='blue' value={email} onChange={handleChange} />
    </>
  );
}
```

Or import directly from the component path for the smallest bundle:

```js
import Button from 'meticulous-ui/components/Button';
import blue from 'meticulous-ui/colors/blue';
```

## 📦 Components

| Component        | Description                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| `Pagination`     | Fully responsive pagination component                                                                            |
| `Toast`          | Push 4 types of notifications on screen                                                                          |
| `Timer`          | Renders analog / digital clock with alarm                                                                        |
| `OtpInput`       | Gives inputs to enter and edit OTP                                                                               |
| `VideoPlayer`    | Renders video with keyboard shortcuts                                                                            |
| `Image`          | Renders image with shimmer, lower resolution                                                                     |
| `Input`          | Renders input box to let user enter input                                                                        |
| `Checkbox`       | Renders checkbox to let user give boolean value                                                                  |
| `RadioGroup`     | Renders radio options in a group to let user select                                                              |
| `FileUploader`   | Renders a button type input from where user can upload                                                           |
| `Textarea`       | Renders textarea box to let user enter description                                                               |
| `Dropdown`       | Renders dropdown to select from options                                                                          |
| `Selectbox`      | Renders selectbox to select multiple values from options                                                         |
| `Spinner`        | Renders a spinner to show the loading state                                                                      |
| `Loader`         | Renders a loader with dots to show the loading state                                                             |
| `PageLoader`     | Renders a loader with line at the top of page                                                                    |
| `Button`         | Renders a button to click & take an action                                                                       |
| `Shimmer`        | Animated skeleton loading placeholder                                                                            |
| `Carousel`       | Carousel providing slider between components displaying slides                                                   |
| `Modal`          | Accessible dialog overlay with title, body, footer, Escape/overlay-click dismissal, and mobile bottom-sheet mode |
| `DatePicker`     | Calendar-based date picker with month/year navigation                                                            |
| `Headings`       | Semantic heading components: `H1`–`H6`                                                                           |
| `P`              | Styled paragraph component                                                                                       |
| `ToastContainer` | Renders the container that displays active Toast notifications                                                   |
| `RootComponent`  | This is the required wrapper for any app that uses meticulous-ui                                                 |

## 📦 Icon Components

100+ modern SVG icons:
Arrows, Commerce, Social, Media, Security, UI controls...

See full icon gallery → [Demo site](https://meticulous-ui.vercel.app/?path=/story/tokens-icons--default)

## 📦 Tokens

At least 10 shades of 23 colors:
blue, red, green, grey, cider, amber...

See full color gallery → [Demo site](https://meticulous-ui.vercel.app/?path=/story/tokens-colors--default)

## 📦 Utils

Util functions of 19 categories are present:
String, Number, Object, Validation, UI...

See full util gallery → [Demo site](https://meticulous-ui.vercel.app/?path=/story/utilities-api-utilities--retry)

## 📦 React Helper Functions

There are a few react helper functions and not custom hooks like:
lazyImport, composeProviders, withSuspense, memoCompare...

See all react helper functions → [Demo site](https://meticulous-ui.vercel.app/?path=/story/react-utilities-react-helper-functions)

## 📦 Hooks

There are a few custom hooks based on 5 categories like:
State, Lifecycle, DOM/Browser, Storage & Utility

Check all custom hooks here: [Demo site](https://meticulous-ui.vercel.app/?path=/story/hooks-custom-hooks)

## 🌱 Features

⚛️ Built with React + Styled Components

💨 Zero external CSS dependencies

🧱 Easy to extend and customize

🪶 Small bundle size

📦 ESM + CJS support out of the box

## 🛠️ Build Setup (for contributors)

```

# install dependencies
npm install

# run development build
npm run dev

# build for production (dist/)
npm run build

```
