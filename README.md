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

| Group                 | Icons                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Arrows & Chevrons     | `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ChevronDown`, `ChevronLeft`, `ChevronRight`, `ChevronUp`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Actions               | `Add`, `AddCircle`, `AddCircleFilled`, `Minus`, `MinusCircle`, `MinusCircleFilled`, `Close`, `CloseCircleFilled`, `CloseCircleOutline`, `Check`, `CheckDouble`, `Link`, `Search`, `Loading`                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Bells & Dots          | `BellFilled`, `BellOutline`, `BellOffFilled`, `BellOffOutline`, `DotsHorizontalFilled`, `DotsHorizontalOutline`, `DotsVerticalFilled`, `DotsVerticalOutline`                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Bookmarks & Reactions | `BookmarkFilled`, `BookmarkOutline`, `HeartFilled`, `HeartOutline`, `StarFilled`, `StarOutline`, `ThumbsUpFilled`, `ThumbsUpOutline`, `ThumbsDownFilled`, `ThumbsDownOutline`                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Calendar & Clock      | `CalendarDays`, `CalendarLinesPen`, `ClockCircleOutline`, `ClockSquareOutline`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Commerce              | `BagFilled`, `BagOutline`, `CartFilled`, `CartOutline`, `CartCheckFilled`, `CartCheckOutline`, `CartCrossFilled`, `CartCrossOutline`, `CartMinusFilled`, `CartMinusOutline`, `CartPlusFilled`, `CartPlusOutline`, `PaymentCardFilled`, `PaymentCardOutline`, `WalletFilled`, `WalletOutline`, `MoneyBagOutline`, `MoneyBriefcaseFilled`, `MoneyBriefcaseOutline`, `RupeeOutlined`, `RupeeSign`                                                                                                                                                                                                                           |
| Communication         | `CommentFilled`, `CommentOutline`, `CommentBubbleFilled`, `CommentBubbleOutline`, `CommentLineFilled`, `CommentLineOutline`, `EmailFilled`, `EmailOutline`, `PhoneFilled`, `PhoneOutline`, `PhoneCallingFilled`, `PhoneCallingOutline`, `ContactDetailsFilled`, `ContactDetailsOutline`                                                                                                                                                                                                                                                                                                                                  |
| Delivery & Boxes      | `BoxFilled`, `BoxOutline`, `BoxCoveredFilled`, `BoxCoveredOutline`, `DeliveryTruckFastFilled`, `DeliveryTruckFastOutline`, `DeliveryTruckLeftFilled`, `DeliveryTruckLeftOutline`, `DeliveryTruckRightFilled`, `DeliveryTruckRightOutline`                                                                                                                                                                                                                                                                                                                                                                                |
| Doors & Exit          | `DoorClosedFilled`, `DoorClosedOutline`, `DoorOpenFilled`, `DoorOpenOutline`, `ExitArrowInOutline`, `ExitArrowOutOutline`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Edit & Files          | `EditBoxThick`, `EditBoxThin`, `SaveFilled`, `SaveOutline`, `Download`, `DownloadBoxFilled`, `DownloadBoxOutline`, `Upload`, `UploadBoxFilled`, `UploadBoxOutline`                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Eye & Fullscreen      | `EyeClosed`, `EyeFilled`, `EyeOutline`, `FullScreenFilled`, `FullScreenOutline`, `FullScreenArrowThick`, `FullScreenArrowThin`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Filter, Sort & Menu   | `Filter`, `FilterList`, `FilterThickFilled`, `FilterThickOutline`, `SortBottomToTop`, `SortTopToBottom`, `SortHorizontal`, `SortVertical`, `HamburgerMenu`, `HamburgerSpaced`, `SettingFilled`, `SettingOutline`                                                                                                                                                                                                                                                                                                                                                                                                         |
| Home & Location       | `HomeFilled`, `HomeOutline`, `LocationFilled`, `LocationOutline`, `LocationArrowFilled`, `LocationArrowOutline`, `Pin`, `PinFilled`, `PinOutline`, `PinAddFilled`, `PinAddOutline`, `PinCircleFilled`, `PinCircleOutline`, `PinSubFilled`, `PinSubOutline`                                                                                                                                                                                                                                                                                                                                                               |
| Info & Help           | `Info`, `InfoCircleFilled`, `InfoCircleOutline`, `InfoSquareFilled`, `InfoSquareOutline`, `Help`, `HelpCircleFilled`, `HelpCircleOutline`, `DetailsOutline`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Keys & Locks          | `KeyFilled`, `KeyOutline`, `KeyInSquareFilled`, `KeyInSquareOutline`, `KeySideSquareFilled`, `KeySideSquareOutline`, `KeySquareFilled`, `KeySquareOutline`, `LockKeyhole`, `LockKeyholeOutline`, `LockKeyholeUnlocked`, `LockKeyholeUnlockedOutline`                                                                                                                                                                                                                                                                                                                                                                     |
| Media & Volume        | `MediaPlayFilled`, `MediaPlayOutline`, `MediaPlayCircleFilled`, `MediaPlayCircleOutline`, `MediaPauseFilled`, `MediaPauseOutline`, `MediaPauseCircleFilled`, `MediaPauseCircleOuline`, `MediaStopFilled`, `MediaStopOutline`, `MediaStopCircleFilled`, `MediaStopCircleOutline`, `VolumeFilled`, `VolumeOutline`, `VolumeMuteFilled`, `VolumeMuteOutline`, `VolumeOffFilled`, `VolumeOffOutline`                                                                                                                                                                                                                         |
| Profile               | `ProfileMaleFilled`, `ProfileMaleOutline`, `ProfileFemaleOutline`, `ProfileGroupFilled`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Security & Shield     | `ShieldFilled`, `ShieldOutline`, `ShieldCheckFilled`, `ShieldCheckOutline`, `ShieldCrossFilled`, `ShieldCrossOutline`, `ShieldWarningFilled`, `ShieldWarningOutline`, `NoEntry`, `NoEntryFilled`, `NoEntryOutline`                                                                                                                                                                                                                                                                                                                                                                                                       |
| Share                 | `ShareFilled`, `ShareOutline`, `ShareAllFilled`, `ShareAllOutline`, `ShareBoxOutline`, `ShareThickFilled`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Social Media          | `DiscordConversation`, `DiscordFilled`, `DiscordOutline`, `FacebookFilled`, `FacebookOutline`, `FacebookMessengerOutline`, `FacebookRoundFilled`, `InstagramOuline`, `InstagramRoundFilled`, `LinkedinFilled`, `LinkedinOutline`, `LinkedinRoundFilled`, `PinterestFilled`, `PinterestOutline`, `RedditFilled`, `RedditOutline`, `RedditRoundFilled`, `RedditRoundOutline`, `SnapchatFilled`, `SnapchatOutline`, `TelegramFilled`, `TelegramOutline`, `TelegramRoundFilled`, `TiktokBox`, `TiktokThickFilled`, `TiktokThinFilled`, `WhatsappFilled`, `WhatsappOutline`, `Youtube`, `YoutubeFilled`, `YoutubeRoundFilled` |
| Trash                 | `TrashFilled`, `TrashOutline`, `TrashBigFilled`, `TrashBigOutline`, `TrashLinesFilled`, `TrashLinesOutline`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Warnings & Errors     | `Warning`, `WarningSmall`, `WarningCircleFilled`, `WarningCircleOutline`, `WarningTriangleFilled`, `WarningTriangleOutline`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

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

| Category           | Functions                                                                                                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **String**         | `capFirstLetter`, `capitalize`, `titleCase`, `camelCase`, `snakeCase`, `kebabCase`, `slugify`, `truncate`, `removeExtraSpaces`, `maskEmail`, `maskPhone`, `generateInitials`,      |
| **Number**         | `clamp`, `formatCurrency`, `formatNumber`, `formatCompactNumber`, `percentage`, `randomInt`, `randomBetween`, `randomValue`, `roundTo`,                                            |
| **Date-Time**      | `formatDate`, `formatTime`, `addDays`, `differenceInDays`, `isToday`, `isPast`, `timeAgo`, `getGreetingByTime`, `countdown`,                                                       |
| **Data**           | `deepClone`, `mergeDeep`, `pick`, `omit`, `isEmpty`, `isEqual`, `hasEqualProps`, `isNonEmptyArray`, `flattenObject`, `groupBy`, `keyBy`, `uniqueBy`, `sortBy`, `chunk`, `compose`, |
| **Validation**     | `isEmail`, `isPhone`, `isURL`, `isPasswordStrong`, `isPAN`, `isAadhaar`, `isGST`, `isRequired`, `minLength`, `maxLength`,                                                          |
| **Device**         | `isMobile`, `isIOS`, `isAndroid`, `isSafari`, `isDarkMode`, `isOnline`, `copyToClipboard`, `downloadFile`, `openInNewTab`, `getScreenSize`,                                        |
| **Storage**        | `setLocalStorage`, `getLocalStorage`, `removeLocalStorage`, `setSessionStorage`, `getSessionStorage`, `clearStorage`,                                                              |
| **Routing**        | `getQueryParams`, `setQueryParam`, `removeQueryParam`, `buildURL`, `redirectTo`, `getCurrentPath`, `isActiveRoute`,                                                                |
| **UI**             | `scrollToTop`, `scrollToElement`, `lockBodyScroll`, `unlockBodyScroll`, `toggleFullscreen`, `focusElement`, `detectOutsideClick`, `measureElement`,                                |
| **Performance**    | `debounce`, `throttle`, `memoize`, `lazyLoadComponent`, `requestIdleTask`, `rafThrottle`,                                                                                          |
| **Async**          | `retry`, `sleep`, `withTimeout`, `parallel`, `sequential`, `safeAsync`, `cancelablePromise`                                                                                        |
| **Accessibility**  | `announceToScreenReader`, `trapFocus`, `generateAriaId`, `handleKeyboardNavigation`                                                                                                |
| **Error Handling** | `logError`, `captureException`, `safeJSONParse`, `safeJSONStringify`, `fallback`                                                                                                   |
| **Auth**           | `isAuthenticated`, `getToken`, `setToken`, `removeToken`, `decodeJWT`, `hasPermission`                                                                                             |
| **Feature Flags**  | `isFeatureEnabled`, `getVariant`                                                                                                                                                   |

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
