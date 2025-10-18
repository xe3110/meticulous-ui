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
import Ripple from 'meticulous-ui/components/Ripple';
import blue from 'meticulous-ui/colors/blue';
import capFirstLetter from 'meticulous-ui/utils/capFirstLetter';

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <h2>{capFirstLetter('example with pagination')}</h2> // returns: Example with pagination
      <Ripple rippleColor={blue.m50}>
        <ChevronLeft size={10} color={blue.m400} onClick={setPrevPage} />
      </Ripple>
      <Pagination totalPages={10} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
```

## 📦 Components

| Component    | Description                           |
| ------------ | ------------------------------------- |
| `Pagination` | Fully responsive pagination component |
| `Ripple`     | A concentric circles visual animation |

## 📦 Icon Components

| Icons                   | Description                        |
| ----------------------- | ---------------------------------- |
| `ChevronLeft`           | Left navigation icon               |
| `ChevronRight`          | Right navigation icon              |
| `ChevronUp`             | Up navigation icon                 |
| `ChevronDown`           | Down navigation icon               |
| `Add`                   | Add icon                           |
| `AddCircle`             | Add circle icon                    |
| `AddCircleFilled`       | Add Circle Filled icon             |
| `ArrowRight`            | Right Arrow icon                   |
| `ArrowLeft`             | Left Arrow icon                    |
| `ArrowUp`               | Up Arrow icon                      |
| `ArrowDown`             | Down Arrow icon                    |
| `BellFilled`            | Bell/Notification filled icon      |
| `BellOffFilled`         | Bell/Notification off filled icon  |
| `BellOutline`           | Bell/Notification outline icon     |
| `BellOffOutline`        | Bell/Notification off outline icon |
| `BookmarkFilled`        | Bookmark filled icon               |
| `BookmarkOutline`       | Bookmark outline icon              |
| `ClockCircleOutline`    | Clock circle outline icon          |
| `ClockSquareOutline`    | Clock square outline icon          |
| `Close`                 | Close icon                         |
| `CloseCircleFilled`     | Close circle filled icon           |
| `CloseCircleOutline`    | Close circle outline icon          |
| `CommentBubbleFilled`   | Comment bubble filled icon         |
| `CommentBubbleOutline`  | Comment bubble outline icon        |
| `CommentFilled`         | Comment filled icon                |
| `CommentLineFilled`     | Comment line filled icon           |
| `CommentLineOutline`    | Comment line outline icon          |
| `CommentOutline`        | Comment outline icon               |
| `DotsHorizontalFilled`  | Dots horizontal filled icon        |
| `DotsHorizontalOutline` | Dots horizontal outline icon       |
| `DotsVerticalFilled`    | Dots vertical filled icon          |
| `HamburgerMenu`         | Hamburger menu icon                |
| `HamburgerSpaced`       | Spaced Hamburger icon              |
| `HeartFilled`           | Heart filled icon                  |
| `HeartOutline`          | Heart outline icon                 |
| `HomeFilled`            | Home filled icon                   |
| `HomeOutline`           | Home outline icon                  |
| `Link`                  | Link icon                          |
| `Minus`                 | Minus icon                         |
| `MinusCircle`           | Minus circle outline icon          |
| `MinusCircleFilled`     | Minus circle filled icon           |
| `ProfileFemaleOutline`  | Female profile outline icon        |
| `ProfileGroupFilled`    | Profiles filled icon               |
| `ProfileMaleFilled`     | Male profile filled icon           |
| `ProfileMaleOutline`    | Male profile ouline icon           |
| `Search`                | Search icon                        |
| `SettingFilled`         | Setting filled icon                |
| `SettingOutline`        | Setting outline icon               |
| `ShareAllFilled`        | Share all filled icon              |
| `ShareAllOutline`       | Share all outline icon             |
| `ShareBoxOutline`       | Share box outline icon             |
| `ShareFilled`           | Share filled icon                  |
| `ShareOutline`          | Share outline icon                 |
| `ShareThickFilled`      | Share thick filled icon            |
| `StarFilled`            | Star filled icon                   |
| `StarOutline`           | Star outline icon                  |
| `ThumbsDownFilled`      | Thumbs down filled icon            |
| `ThumbsDownOutline`     | Thumbs down outline icon           |
| `ThumbsUpFilled`        | Thumbs up filled icon              |
| `ThumbsUpOutline`       | Thumbs up outline icon             |
| `Upload`                | Upload icon                        |
| `UploadBoxFilled`       | Upload box filled icon             |
| `UploadBoxOutline`      | Upload box outline icon            |

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
| `capFirstLetter`  | Takes a string and returns with first letter capitalised                                                       |
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
