# meticulous-ui

A lightweight, modern React component library, following Semantic HTML & ARIA, designed for elegance and precision ✨

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

| Component       | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `Pagination`    | Fully responsive pagination component                            |
| `Toast`         | Push 4 types of notifications on screen                          |
| `Timer`         | Renders analog / digital clock with alarm                        |
| `OtpInput`      | Gives inputs to enter and edit OTP                               |
| `VideoPlayer`   | Renders video with keyboard shortcuts                            |
| `Image`         | Renders image with shimmer, lower resolution                     |
| `Input`         | Renders input box to let user enter input                        |
| `Checkbox`      | Renders checkbox to let user give boolean value                  |
| `RadioGroup`    | Renders radio options in a group to let user select              |
| `FileUploader`  | Renders a button type input from where user can upload           |
| `Textarea`      | Renders textarea box to let user enter description               |
| `Dropdown`      | Renders dropdown to select from options                          |
| `SelectBox`     | Renders selectbox to select multiple values from options         |
| `Spinner`       | Renders a spinner to show the loading state                      |
| `Loader`        | Renders a loader with dots to show the loading state             |
| `PageLoader`    | Renders a loader with line at the top of page                    |
| `Button`        | Renders a button to click & take an action                       |
| `Shimmer`       | Animated skeleton loading placeholder                            |
| `Carousel`      | Carousel providing slider between components displaying slides   |
| `RootComponent` | This is the required wrapper for any app that uses meticulous-ui |

## 📦 Icon Components

| Group | Icons |
| --- | --- |
| Arrows & Chevrons | `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ChevronDown`, `ChevronLeft`, `ChevronRight`, `ChevronUp` |
| Actions | `Add`, `AddCircle`, `AddCircleFilled`, `Minus`, `MinusCircle`, `MinusCircleFilled`, `Close`, `CloseCircleFilled`, `CloseCircleOutline`, `Check`, `CheckDouble`, `Link`, `Search`, `Loading` |
| Bells & Dots | `BellFilled`, `BellOutline`, `BellOffFilled`, `BellOffOutline`, `DotsHorizontalFilled`, `DotsHorizontalOutline`, `DotsVerticalFilled`, `DotsVerticalOutline` |
| Bookmarks & Reactions | `BookmarkFilled`, `BookmarkOutline`, `HeartFilled`, `HeartOutline`, `StarFilled`, `StarOutline`, `ThumbsUpFilled`, `ThumbsUpOutline`, `ThumbsDownFilled`, `ThumbsDownOutline` |
| Calendar & Clock | `CalendarDays`, `CalendarLinesPen`, `ClockCircleOutline`, `ClockSquareOutline` |
| Commerce | `BagFilled`, `BagOutline`, `CartFilled`, `CartOutline`, `CartCheckFilled`, `CartCheckOutline`, `CartCrossFilled`, `CartCrossOutline`, `CartMinusFilled`, `CartMinusOutline`, `CartPlusFilled`, `CartPlusOutline`, `PaymentCardFilled`, `PaymentCardOutline`, `WalletFilled`, `WalletOutline`, `MoneyBagOutline`, `MoneyBriefcaseFilled`, `MoneyBriefcaseOutline`, `RupeeOutlined`, `RupeeSign` |
| Communication | `CommentFilled`, `CommentOutline`, `CommentBubbleFilled`, `CommentBubbleOutline`, `CommentLineFilled`, `CommentLineOutline`, `EmailFilled`, `EmailOutline`, `PhoneFilled`, `PhoneOutline`, `PhoneCallingFilled`, `PhoneCallingOutline`, `ContactDetailsFilled`, `ContactDetailsOutline` |
| Delivery & Boxes | `BoxFilled`, `BoxOutline`, `BoxCoveredFilled`, `BoxCoveredOutline`, `DeliveryTruckFastFilled`, `DeliveryTruckFastOutline`, `DeliveryTruckLeftFilled`, `DeliveryTruckLeftOutline`, `DeliveryTruckRightFilled`, `DeliveryTruckRightOutline` |
| Doors & Exit | `DoorClosedFilled`, `DoorClosedOutline`, `DoorOpenFilled`, `DoorOpenOutline`, `ExitArrowInOutline`, `ExitArrowOutOutline` |
| Edit & Files | `EditBoxThick`, `EditBoxThin`, `SaveFilled`, `SaveOutline`, `Download`, `DownloadBoxFilled`, `DownloadBoxOutline`, `Upload`, `UploadBoxFilled`, `UploadBoxOutline` |
| Eye & Fullscreen | `EyeClosed`, `EyeFilled`, `EyeOutline`, `FullScreenFilled`, `FullScreenOutline`, `FullScreenArrowThick`, `FullScreenArrowThin` |
| Filter, Sort & Menu | `Filter`, `FilterList`, `FilterThickFilled`, `FilterThickOutline`, `SortBottomToTop`, `SortTopToBottom`, `SortHorizontal`, `SortVertical`, `HamburgerMenu`, `HamburgerSpaced`, `SettingFilled`, `SettingOutline` |
| Home & Location | `HomeFilled`, `HomeOutline`, `LocationFilled`, `LocationOutline`, `LocationArrowFilled`, `LocationArrowOutline`, `Pin`, `PinFilled`, `PinOutline`, `PinAddFilled`, `PinAddOutline`, `PinCircleFilled`, `PinCircleOutline`, `PinSubFilled`, `PinSubOutline` |
| Info & Help | `Info`, `InfoCircleFilled`, `InfoCircleOutline`, `InfoSquareFilled`, `InfoSquareOutline`, `Help`, `HelpCircleFilled`, `HelpCircleOutline`, `DetailsOutline` |
| Keys & Locks | `KeyFilled`, `KeyOutline`, `KeyInSquareFilled`, `KeyInSquareOutline`, `KeySideSquareFilled`, `KeySideSquareOutline`, `KeySquareFilled`, `KeySquareOutline`, `LockKeyhole`, `LockKeyholeOutline`, `LockKeyholeUnlocked`, `LockKeyholeUnlockedOutline` |
| Media & Volume | `MediaPlayFilled`, `MediaPlayOutline`, `MediaPlayCircleFilled`, `MediaPlayCircleOutline`, `MediaPauseFilled`, `MediaPauseOutline`, `MediaPauseCircleFilled`, `MediaPauseCircleOuline`, `MediaStopFilled`, `MediaStopOutline`, `MediaStopCircleFilled`, `MediaStopCircleOutline`, `VolumeFilled`, `VolumeOutline`, `VolumeMuteFilled`, `VolumeMuteOutline`, `VolumeOffFilled`, `VolumeOffOutline` |
| Profile | `ProfileMaleFilled`, `ProfileMaleOutline`, `ProfileFemaleOutline`, `ProfileGroupFilled` |
| Security & Shield | `ShieldFilled`, `ShieldOutline`, `ShieldCheckFilled`, `ShieldCheckOutline`, `ShieldCrossFilled`, `ShieldCrossOutline`, `ShieldWarningFilled`, `ShieldWarningOutline`, `NoEntry`, `NoEntryFilled`, `NoEntryOutline` |
| Share | `ShareFilled`, `ShareOutline`, `ShareAllFilled`, `ShareAllOutline`, `ShareBoxOutline`, `ShareThickFilled` |
| Social Media | `DiscordConversation`, `DiscordFilled`, `DiscordOutline`, `FacebookFilled`, `FacebookOutline`, `FacebookMessengerOutline`, `FacebookRoundFilled`, `InstagramOuline`, `InstagramRoundFilled`, `LinkedinFilled`, `LinkedinOutline`, `LinkedinRoundFilled`, `PinterestFilled`, `PinterestOutline`, `RedditFilled`, `RedditOutline`, `RedditRoundFilled`, `RedditRoundOutline`, `SnapchatFilled`, `SnapchatOutline`, `TelegramFilled`, `TelegramOutline`, `TelegramRoundFilled`, `TiktokBox`, `TiktokThickFilled`, `TiktokThinFilled`, `WhatsappFilled`, `WhatsappOutline`, `Youtube`, `YoutubeFilled`, `YoutubeRoundFilled` |
| Trash | `TrashFilled`, `TrashOutline`, `TrashBigFilled`, `TrashBigOutline`, `TrashLinesFilled`, `TrashLinesOutline` |
| Warnings & Errors | `Warning`, `WarningSmall`, `WarningCircleFilled`, `WarningCircleOutline`, `WarningTriangleFilled`, `WarningTriangleOutline` |

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

### General

| Function      | Signature                  | Description                               |
| ------------- | -------------------------- | ----------------------------------------- |
| `compose`     | `(...funcs) → (val) → any` | Right-to-left function composition        |
| `randomInt`   | `(min, max) → number`      | Random integer in `[min, floor(max + 1))` |
| `randomValue` | `(min, max) → number`      | Random float in `[min, max + 1)`          |

### Data Utilities

| Function          | Signature                        | Description                                                              |
| ----------------- | -------------------------------- | ------------------------------------------------------------------------ |
| `deepClone`       | `(obj) → any`                    | Recursively clones objects, arrays, and Dates with no shared references  |
| `mergeDeep`       | `(target, source) → object`      | Deep-merges source into target; source wins on conflicts                 |
| `pick`            | `(obj, keys) → object`           | Returns a new object with only the specified keys                        |
| `omit`            | `(obj, keys) → object`           | Returns a new object without the specified keys                          |
| `isEmpty`         | `(value) → boolean`              | `true` for `null`, `undefined`, `""`, `[]`, `{}`                         |
| `isEqual`         | `(a, b) → boolean`               | Deep structural equality — handles objects, arrays, and Dates            |
| `hasEqualProps`   | `(oldProps, newProps) → boolean` | Deep equality ignoring function-valued keys; ideal for `React.memo`      |
| `isNonEmptyArray` | `(arr) → boolean`                | `true` only when the value is an array with at least one element         |
| `flattenObject`   | `(obj, prefix?) → object`        | Collapses nested object to dot-notation keys                             |
| `groupBy`         | `(array, key) → object`          | Groups array items into an object of arrays keyed by a field or function |
| `keyBy`           | `(array, key) → object`          | Converts an array into a lookup object keyed by a field or function      |
| `uniqueBy`        | `(array, key) → array`           | Removes duplicates by a field or function; first occurrence wins         |
| `sortBy`          | `(array, key) → array`           | Ascending sort by a field or function; non-mutating                      |
| `chunk`           | `(array, size) → array[]`        | Splits array into consecutive chunks of the given size                   |

### String Utilities

| Function            | Signature               | Description                                                         |
| ------------------- | ----------------------- | ------------------------------------------------------------------- |
| `capFirstLetter`    | `(str) → string`        | Takes a string and returns with first letter capitalised            |
| `capitalize`        | `(str) → string`        | Uppercases first character, lowercases the rest                     |
| `titleCase`         | `(str) → string`        | Capitalizes the first letter of every word                          |
| `camelCase`         | `(str) → string`        | Converts to `camelCase` from spaces, hyphens, or underscores        |
| `snakeCase`         | `(str) → string`        | Converts to `snake_case` from camelCase, spaces, or hyphens         |
| `kebabCase`         | `(str) → string`        | Converts to `kebab-case` from camelCase, spaces, or underscores     |
| `truncate`          | `(str, limit) → string` | Trims to `limit` characters and appends `…`                         |
| `slugify`           | `(str) → string`        | URL-safe slug — strips diacritics, removes special chars            |
| `removeExtraSpaces` | `(str) → string`        | Trims and collapses internal whitespace runs to a single space      |
| `maskEmail`         | `(str) → string`        | Shows only the first character of the local part, e.g. `j***@x.com` |
| `maskPhone`         | `(str) → string`        | Masks all digits except the last four; preserves formatting chars   |
| `generateInitials`  | `(name) → string`       | Extracts uppercased first letter of each word, e.g. `"JD"`          |

### Validation Utilities

| Function           | Signature              | Description                                                                  |
| ------------------ | ---------------------- | ---------------------------------------------------------------------------- |
| `isEmail`          | `(value) → boolean`    | Valid email — must have local part, `@`, and domain with dot                 |
| `isPhone`          | `(value) → boolean`    | Plausible phone — optional `+`, 7–15 digits, allows spaces/hyphens/parens   |
| `isURL`            | `(value) → boolean`    | Valid `http` or `https` URL via native `URL` constructor                     |
| `isPasswordStrong` | `(value) → boolean`    | 8+ chars with uppercase, lowercase, digit, and special character             |
| `isPAN`            | `(value) → boolean`    | Indian PAN — `AAAAA0000A` (5 letters, 4 digits, 1 letter)                   |
| `isAadhaar`        | `(value) → boolean`    | Indian Aadhaar — 12 digits, first digit non-zero; strips spaces              |
| `isGST`            | `(value) → boolean`    | Indian GSTIN — 2-digit state code + PAN + entity digit + `Z` + check char   |
| `isRequired`       | `(value) → boolean`    | `false` for `null`, `undefined`, blank strings, and empty arrays             |
| `minLength`        | `(value, n) → boolean` | `true` when `value.length >= n`                                              |
| `maxLength`        | `(value, n) → boolean` | `true` when `value.length <= n`                                              |

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
