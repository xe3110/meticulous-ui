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

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <h2>Example with Pagination</h2>
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
| `ChevronLeft`  | Left navigation icon                  |
| `ChevronRight` | Right navigation icon                 |

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
