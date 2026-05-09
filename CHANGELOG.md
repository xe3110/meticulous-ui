# Changelog

All notable changes to meticulous-ui are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [3.9.1] — 2026-05-09

### Fixed

- Form: errors clear immediately on any field value change instead of waiting for re-validation (`src/components/Form/FormField.jsx`)
- Form: invalid field shakes after scroll-into-view on submit, sequenced so the animation fires once the viewport shift settles (`src/components/Form/FormField.jsx`, `src/components/Form/Form.jsx`)
- Form: browser-native validation tooltip suppressed via `noValidate` so custom field errors always take precedence (`src/components/Form/Form.jsx`)

---

## [3.9.0] — 2026-05-09

### Added

- Form component (`src/components/Form/`, `src/index.js`) — field-level validation, imperative `getValues` ref, `disableUntilValid` support
- `Form` and `FormHandle` types added to `index.d.ts`
- `showSelectedDisplay` prop added to `DatePicker` and `index.d.ts`

### Fixed

- Form validation and layout shift now only trigger on submit button click, not on every field change (`src/components/Form/FormField.jsx`)
- DatePicker buttons inside a `<form>` no longer trigger form submission — all buttons now carry `type="button"` (`src/components/DatePicker/DatePicker.jsx`)
- OtpInput Tab key now exits the component in one press instead of cycling through each cell; only the active cell (first empty / last filled) is in the tab order (`src/components/OtpInput/OtpInput.jsx`)

---

## [3.8.6] — 2026-05-08

### Added

- Grid component (`src/components/Grid/`)
- Switch component key press handling (`src/components/Switch/Switch.jsx`)

---

## [3.8.5] — 2026-05-08

### Changed

- Storybook layout order (`stories/Grid.stories.jsx`, `.storybook/preview.js`)
- Grid stories expanded

---

## [3.8.4] — 2026-05-08

### Fixed

- Switch glass mode transition (`src/components/Switch/Switch.jsx`)
- Switch story and docs updated (`stories/Switch.stories.jsx`, `stories/docs/Switch.mdx`)

---

## [3.8.3] — 2026-05-08

### Fixed

- Switch glass transition fix (`src/components/Switch/Switch.jsx`)

---

## [3.8.2] — 2026-05-07

### Added

- Switch `isGlass` prop (`src/components/Switch/Switch.jsx`)

---

## [3.8.1] — 2026-05-07

### Added

- Switch component (`src/components/Switch/`, `src/index.js`)
- Switch story and docs (`stories/Switch.stories.jsx`, `stories/docs/Switch.mdx`)

---

## [3.8.0] — 2026-05-06

### Added

- Link component (`src/components/Link/`, `src/index.js`)
- Link story and docs (`stories/Link.stories.jsx`, `stories/docs/Link.mdx`)
- Improved tree-shaking
- Optimized icon loading

---

## [3.7.13] — 2026-05-05

### Changed

- Reverted vite config changes (`vite.config.js`)

---

## [3.7.12] — 2026-05-05

### Changed

- Re-enabled minification (`vite.config.js`)

---

## [3.7.11] — 2026-05-05

### Changed

- Disabled minification for debugging (`vite.config.js`)

---

## [3.7.10] — 2026-05-04

### Changed

- Build target set to `es2018` (`vite.config.js`)

---

## [3.7.9] — 2026-05-04

### Fixed

- Tree-shaking not working correctly (`package.json`)

---

## [3.7.8] — 2026-05-04

### Changed

- All icons now exposed in dist output (`vite.config.js`)

---

## [3.7.7] — 2026-05-04

### Fixed

- Icon rendering inside Input and Textarea (`src/components/Input/Input/Input.jsx`, `src/components/Input/Textarea/Textarea.jsx`)
- Input and Textarea stories and docs updated

---

## [3.7.6] — 2026-05-04

### Changed

- Icons lazy loaded via `iconsMap.js` (`src/components/Icons/iconsMap.js`)

---

## [3.7.5] — 2026-05-04

### Fixed

- Icon resolution fix
