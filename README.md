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

| Icons                        | Description                        |
| ---------------------------- | ---------------------------------- |
| `AddCircleFilled`            | Add circle filled icon             |
| `AddCircle`                  | Add circle icon                    |
| `Add`                        | Add icon                           |
| `ArrowDown`                  | Arrow down icon                    |
| `ArrowLeft`                  | Arrow left icon                    |
| `ArrowRight`                 | Arrow right icon                   |
| `ArrowUp`                    | Arrow up icon                      |
| `BagFilled`                  | Bag filled icon                    |
| `BagOutline`                 | Bag outline icon                   |
| `BellFilled`                 | Bell filled icon                   |
| `BellOffFilled`              | Bell off filled icon               |
| `BellOffOutline`             | Bell off outline icon              |
| `BellOutline`                | Bell outline icon                  |
| `BookmarkFilled`             | Bookmark filled icon               |
| `BookmarkOutline`            | Bookmark outline icon              |
| `BoxCoveredFilled`           | Box covered filled icon            |
| `BoxCoveredOutline`          | Box covered outline icon           |
| `BoxFilled`                  | Box filled icon                    |
| `BoxOutline`                 | Box outline icon                   |
| `CalendarDays`               | Calendar days icon                 |
| `CalendarLinesPen`           | Calendar lines pen icon            |
| `CartCheckFilled`            | Cart check filled icon             |
| `CartCheckOutline`           | Cart check outline icon            |
| `CartCrossFilled`            | Cart cross filled icon             |
| `CartCrossOutline`           | Cart cross outline icon            |
| `CartFilled`                 | Cart filled icon                   |
| `CartMinusFilled`            | Cart minus filled icon             |
| `CartMinusOutline`           | Cart minus outline icon            |
| `CartOutline`                | Cart outline icon                  |
| `CartPlusFilled`             | Cart plus filled icon              |
| `CartPlusOutline`            | Cart plus outline icon             |
| `CheckDouble`                | Check double icon                  |
| `Check`                      | Check icon                         |
| `ChevronDown`                | Chevron down icon                  |
| `ChevronLeft`                | Chevron left icon                  |
| `ChevronRight`               | Chevron right icon                 |
| `ChevronUp`                  | Chevron up icon                    |
| `ClockCircleOutline`         | Clock circle outline icon          |
| `ClockSquareOutline`         | Clock square outline icon          |
| `CloseCircleFilled`          | Close circle filled icon           |
| `CloseCircleOutline`         | Close circle outline icon          |
| `Close`                      | Close icon                         |
| `CommentBubbleFilled`        | Comment bubble filled icon         |
| `CommentBubbleOutline`       | Comment bubble outline icon        |
| `CommentFilled`              | Comment filled icon                |
| `CommentLineFilled`          | Comment line filled icon           |
| `CommentLineOutline`         | Comment line outline icon          |
| `CommentOutline`             | Comment outline icon               |
| `ContactDetailsFilled`       | Contact details filled icon        |
| `ContactDetailsOutline`      | Contact details outline icon       |
| `DeliveryTruckFastFilled`    | Delivery truck fast filled icon    |
| `DeliveryTruckFastOutline`   | Delivery truck fast outline icon   |
| `DeliveryTruckLeftFilled`    | Delivery truck left filled icon    |
| `DeliveryTruckLeftOutline`   | Delivery truck left outline icon   |
| `DeliveryTruckRightFilled`   | Delivery truck right filled icon   |
| `DeliveryTruckRightOutline`  | Delivery truck right outline icon  |
| `DetailsOutline`             | Details outline icon               |
| `DiscordConversation`        | Discord conversation icon          |
| `DiscordFilled`              | Discord filled icon                |
| `DiscordOutline`             | Discord outline icon               |
| `DoorClosedFilled`           | Door closed filled icon            |
| `DoorClosedOutline`          | Door closed outline icon           |
| `DoorOpenFilled`             | Door open filled icon              |
| `DoorOpenOutline`            | Door open outline icon             |
| `DotsHorizontalFilled`       | Dots horizontal filled icon        |
| `DotsHorizontalOutline`      | Dots horizontal outline icon       |
| `DotsVerticalFilled`         | Dots vertical filled icon          |
| `DotsVerticalOutline`        | Dots vertical outline icon         |
| `DownloadBoxFilled`          | Download box filled icon           |
| `DownloadBoxOutline`         | Download box outline icon          |
| `Download`                   | Download icon                      |
| `EditBoxThick`               | Edit box thick icon                |
| `EditBoxThin`                | Edit box thin icon                 |
| `EmailFilled`                | Email filled icon                  |
| `EmailOutline`               | Email outline icon                 |
| `ExitArrowInOutline`         | Exit arrow in outline icon         |
| `ExitArrowOutOutline`        | Exit arrow out outline icon        |
| `EyeClosed`                  | Eye closed icon                    |
| `EyeFilled`                  | Eye filled icon                    |
| `EyeOutline`                 | Eye outline icon                   |
| `FacebookFilled`             | Facebook filled icon               |
| `FacebookMessengerOutline`   | Facebook messenger outline icon    |
| `FacebookOutline`            | Facebook outline icon              |
| `FacebookRoundFilled`        | Facebook round filled icon         |
| `FilterList`                 | Filter list icon                   |
| `FilterThickFilled`          | Filter thick filled icon           |
| `FilterThickOutline`         | Filter thick outline icon          |
| `Filter`                     | Filter icon                        |
| `FullScreenArrowThick`       | Full screen arrow thick icon       |
| `FullScreenArrowThin`        | Full screen arrow thin icon        |
| `FullScreenFilled`           | Full screen filled icon            |
| `FullScreenOutline`          | Full screen outline icon           |
| `HamburgerMenu`              | Hamburger menu icon                |
| `HamburgerSpaced`            | Hamburger spaced icon              |
| `HeartFilled`                | Heart filled icon                  |
| `HeartOutline`               | Heart outline icon                 |
| `HelpCircleFilled`           | Help circle filled icon            |
| `HelpCircleOutline`          | Help circle outline icon           |
| `Help`                       | Help icon                          |
| `HomeFilled`                 | Home filled icon                   |
| `HomeOutline`                | Home outline icon                  |
| `InfoCircleFilled`           | Info circle filled icon            |
| `InfoCircleOutline`          | Info circle outline icon           |
| `InfoSquareFilled`           | Info square filled icon            |
| `InfoSquareOutline`          | Info square outline icon           |
| `Info`                       | Info icon                          |
| `InstagramOuline`            | Instagram ouline icon              |
| `InstagramRoundFilled`       | Instagram round filled icon        |
| `KeyFilled`                  | Key filled icon                    |
| `KeyInSquareFilled`          | Key in square filled icon          |
| `KeyInSquareOutline`         | Key in square outline icon         |
| `KeyOutline`                 | Key outline icon                   |
| `KeySideSquareFilled`        | Key side square filled icon        |
| `KeySideSquareOutline`       | Key side square outline icon       |
| `KeySquareFilled`            | Key square filled icon             |
| `KeySquareOutline`           | Key square outline icon            |
| `Link`                       | Link icon                          |
| `LinkedinFilled`             | Linkedin filled icon               |
| `LinkedinOutline`            | Linkedin outline icon              |
| `LinkedinRoundFilled`        | Linkedin round filled icon         |
| `Loading`                    | Loading icon                       |
| `LocationArrowFilled`        | Location arrow filled icon         |
| `LocationArrowOutline`       | Location arrow outline icon        |
| `LocationFilled`             | Location filled icon               |
| `LocationOutline`            | Location outline icon              |
| `LockKeyholeOutline`         | Lock keyhole outline icon          |
| `LockKeyholeUnlockedOutline` | Lock keyhole unlocked outline icon |
| `LockKeyholeUnlocked`        | Lock keyhole unlocked icon         |
| `LockKeyhole`                | Lock keyhole icon                  |
| `MediaPauseCircleFilled`     | Media pause circle filled icon     |
| `MediaPauseCircleOuline`     | Media pause circle ouline icon     |
| `MediaPauseFilled`           | Media pause filled icon            |
| `MediaPauseOutline`          | Media pause outline icon           |
| `MediaPlayCircleFilled`      | Media play circle filled icon      |
| `MediaPlayCircleOutline`     | Media play circle outline icon     |
| `MediaPlayFilled`            | Media play filled icon             |
| `MediaPlayOutline`           | Media play outline icon            |
| `MediaStopCircleFilled`      | Media stop circle filled icon      |
| `MediaStopCircleOutline`     | Media stop circle outline icon     |
| `MediaStopFilled`            | Media stop filled icon             |
| `MediaStopOutline`           | Media stop outline icon            |
| `MinusCircleFilled`          | Minus circle filled icon           |
| `MinusCircle`                | Minus circle icon                  |
| `Minus`                      | Minus icon                         |
| `MoneyBagOutline`            | Money bag outline icon             |
| `MoneyBriefcaseFilled`       | Money briefcase filled icon        |
| `MoneyBriefcaseOutline`      | Money briefcase outline icon       |
| `NoEntryFilled`              | No entry filled icon               |
| `NoEntryOutline`             | No entry outline icon              |
| `NoEntry`                    | No entry icon                      |
| `PaymentCardFilled`          | Payment card filled icon           |
| `PaymentCardOutline`         | Payment card outline icon          |
| `PhoneCallingFilled`         | Phone calling filled icon          |
| `PhoneCallingOutline`        | Phone calling outline icon         |
| `PhoneFilled`                | Phone filled icon                  |
| `PhoneOutline`               | Phone outline icon                 |
| `PinAddFilled`               | Pin add filled icon                |
| `PinAddOutline`              | Pin add outline icon               |
| `PinCircleFilled`            | Pin circle filled icon             |
| `PinCircleOutline`           | Pin circle outline icon            |
| `PinFilled`                  | Pin filled icon                    |
| `PinOutline`                 | Pin outline icon                   |
| `PinSubFilled`               | Pin sub filled icon                |
| `PinSubOutline`              | Pin sub outline icon               |
| `Pin`                        | Pin icon                           |
| `PinterestFilled`            | Pinterest filled icon              |
| `PinterestOutline`           | Pinterest outline icon             |
| `ProfileFemaleOutline`       | Profile female outline icon        |
| `ProfileGroupFilled`         | Profile group filled icon          |
| `ProfileMaleFilled`          | Profile male filled icon           |
| `ProfileMaleOutline`         | Profile male outline icon          |
| `RedditFilled`               | Reddit filled icon                 |
| `RedditOutline`              | Reddit outline icon                |
| `RedditRoundFilled`          | Reddit round filled icon           |
| `RedditRoundOutline`         | Reddit round outline icon          |
| `RupeeOutlined`              | Rupee outline icon                 |
| `RupeeSign`                  | Rupee sign icon                    |
| `SaveFilled`                 | Save filled icon                   |
| `SaveOutline`                | Save outline icon                  |
| `Search`                     | Search icon                        |
| `SettingFilled`              | Setting filled icon                |
| `SettingOutline`             | Setting outline icon               |
| `ShareAllFilled`             | Share all filled icon              |
| `ShareAllOutline`            | Share all outline icon             |
| `ShareBoxOutline`            | Share box outline icon             |
| `ShareFilled`                | Share filled icon                  |
| `ShareOutline`               | Share outline icon                 |
| `ShareThickFilled`           | Share thick filled icon            |
| `ShieldCheckFilled`          | Shield check filled icon           |
| `ShieldCheckOutline`         | Shield check outline icon          |
| `ShieldCrossFilled`          | Shield cross filled icon           |
| `ShieldCrossOutline`         | Shield cross outline icon          |
| `ShieldFilled`               | Shield filled icon                 |
| `ShieldOutline`              | Shield outline icon                |
| `ShieldWarningFilled`        | Shield warning filled icon         |
| `ShieldWarningOutline`       | Shield warning outline icon        |
| `SnapchatFilled`             | Snapchat filled icon               |
| `SnapchatOutline`            | Snapchat outline icon              |
| `SortBottomToTop`            | Sort bottom to top icon            |
| `SortHorizontal`             | Sort horizontal icon               |
| `SortTopToBottom`            | Sort top to bottom icon            |
| `SortVertical`               | Sort vertical icon                 |
| `StarFilled`                 | Star filled icon                   |
| `StarOutline`                | Star outline icon                  |
| `TelegramFilled`             | Telegram filled icon               |
| `TelegramOutline`            | Telegram outline icon              |
| `TelegramRoundFilled`        | Telegram round filled icon         |
| `ThumbsDownFilled`           | Thumbs down filled icon            |
| `ThumbsDownOutline`          | Thumbs down outline icon           |
| `ThumbsUpFilled`             | Thumbs up filled icon              |
| `ThumbsUpOutline`            | Thumbs up outline icon             |
| `TiktokBox`                  | Tiktok box icon                    |
| `TiktokThickFilled`          | Tiktok thick filled icon           |
| `TiktokThinFilled`           | Tiktok thin filled icon            |
| `TrashBigFilled`             | Trash big filled icon              |
| `TrashBigOutline`            | Trash big outline icon             |
| `TrashFilled`                | Trash filled icon                  |
| `TrashLinesFilled`           | Trash lines filled icon            |
| `TrashLinesOutline`          | Trash lines outline icon           |
| `TrashOutline`               | Trash outline icon                 |
| `UploadBoxFilled`            | Upload box filled icon             |
| `UploadBoxOutline`           | Upload box outline icon            |
| `Upload`                     | Upload icon                        |
| `VolumeFilled`               | Volume filled icon                 |
| `VolumeMuteFilled`           | Volume mute filled icon            |
| `VolumeMuteOutline`          | Volume mute outline icon           |
| `VolumeOffFilled`            | Volume off filled icon             |
| `VolumeOffOutline`           | Volume off outline icon            |
| `VolumeOutline`              | Volume outline icon                |
| `WalletFilled`               | Wallet filled icon                 |
| `WalletOutline`              | Wallet outline icon                |
| `WarningCircleFilled`        | Warning circle filled icon         |
| `WarningCircleOutline`       | Warning circle outline icon        |
| `WarningSmall`               | Warning small icon                 |
| `WarningTriangleFilled`      | Warning triangle filled icon       |
| `WarningTriangleOutline`     | Warning triangle outline icon      |
| `Warning`                    | Warning icon                       |
| `WhatsappFilled`             | Whatsapp filled icon               |
| `WhatsappOutline`            | Whatsapp outline icon              |
| `YoutubeFilled`              | Youtube filled icon                |
| `YoutubeRoundFilled`         | Youtube round filled icon          |
| `Youtube`                    | Youtube icon                       |

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
