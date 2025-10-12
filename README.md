# meticulous-ui

A lightweight, modern React component library designed for elegance and precision ✨

---

## 🚀 Installation

```
npm install meticulous-ui
```

# or

```
yarn add meticulous-ui
```

## 🧩 Usage

```jsx
import { useState } from 'react';

import Pagination from 'meticulous-ui/components/Pagination';
import ChevronLeft from 'meticulous-ui/components/Icons/ChevronLeft';
import blue from 'meticulous-ui/colors/blue';
import capFirstLetter from 'meticulous-ui/utils/capFirstLetter';

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <h2>{capFirstLetter('example with pagination')}</h2> // returns: Example with pagination
      <ChevronLeft size={10} color={blue.m400} />
      <Pagination totalPages={10} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
```

## 📦 Components

| Component      | Description                           |
| -------------- | ------------------------------------- |
| `Pagination`   | Fully responsive pagination component |
| `Ripple`       | A concentric circles visual animation |
| `ChevronLeft`  | Left navigation icon                  |
| `ChevronRight` | Right navigation icon                 |

## 📦 Tokens

| Types    | Description                     |
| -------- | ------------------------------- |
| `Colors` | At least 10 shades of 23 colors |

| Colors       | Shades                                                                            |
| ------------ | --------------------------------------------------------------------------------- |
| `amber`      | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `black`      | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900                         |
| `blue`       | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `blueGray`   | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900                         |
| `brown`      | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900                         |
| `cider`      | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900                         |
| `cyan`       | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `deepOrange` | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `deepPurple` | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `green`      | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `grey`       | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900                         |
| `indigo`     | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `lightBlue`  | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `lightGreen` | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `lime`       | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `orange`     | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `pink`       | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `purple`     | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `red`        | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `teal`       | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `violet`     | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |
| `white`      | #FFFFFF                                                                           |
| `yellow`     | m50, m100, m200, m300, m400, m500, m600, m700, m800, m900, a100, a200, a400, a700 |

## 📦 Utils

| Functions         | Description                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| `capFirstLetter`  | Takes a string and returns with first letter cpitalised                                                        |
| `compose`         | Performs right-to-left function composition using transforming function                                        |
| `hasEqualProps`   | Takes two args: Component’s previous props & its new props; returns true if all-non functional props are equal |
| `isNonEmptyArray` | Takes an array & returns true if is not empty                                                                  |

## Demo

<a href="https://xe3110.github.io/meticulous-ui/" target="_blank">https://xe3110.github.io/meticulous-ui/</a>

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
