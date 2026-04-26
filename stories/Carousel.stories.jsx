import { useState } from 'react';

import Carousel from '../src/components/Carousel';

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible carousel that maps over a data array using a render prop, giving you full control over how each slide looks. Supports chevron navigation, dot indicators, auto-play, drag, loop, and configurable visible slide count.',
      },
      source: {
        language: 'jsx',
        code: `
import Carousel from 'meticulous-ui/components/Carousel';

const images = [
  { id: 1, src: 'https://picsum.photos/seed/a/600/340', alt: 'Slide 1' },
  { id: 2, src: 'https://picsum.photos/seed/b/600/340', alt: 'Slide 2' },
  { id: 3, src: 'https://picsum.photos/seed/c/600/340', alt: 'Slide 3' },
];

const Example = () => (
  <Carousel
    data={images}
    visibleSlides={1}
    renderCarousel={(item) => (
      <div key={item.id} style={{ padding: '0 8px' }}>
        <img src={item.src} alt={item.alt} style={{ width: '100%', borderRadius: 8 }} />
      </div>
    )}
  />
);
        `,
      },
    },
  },
  argTypes: {
    data: {
      description: 'Array of items to render in the carousel.',
    },
    renderCarousel: {
      description:
        'Render prop called for each item in `data`. Must return a React element with a `key` prop.',
    },
    visibleSlides: {
      control: { type: 'number', min: 1 },
      description: 'Number of slides visible at once.',
    },
    overlayArrows: {
      control: { type: 'boolean' },
      description:
        'Render chevrons inside the slide area. They fade out after 2 s and reappear on interaction.',
    },
    arrowTop: {
      control: 'text',
      description:
        'Vertical position of the overlay chevrons. Accepts any CSS value (`"50%"`, `"80px"`) or a number (treated as px). Defaults to `"50%"`.',
    },
    areDotsHidden: {
      control: { type: 'boolean' },
      description: 'Hide the dot indicators.',
    },
    autoSlide: {
      control: { type: 'boolean' },
      description:
        'Auto-advance slides on an interval. Shows a pause/play button. Pauses on hover and keyboard focus.',
    },
    autoSlideSec: {
      control: { type: 'number', min: 1 },
      description: 'Interval in seconds between auto-advances. Only used when `autoSlide` is true.',
    },
    loop: {
      control: { type: 'boolean' },
      description:
        'Wrap navigation at both ends — prev on the first slide goes to the last, next on the last goes to the first. Chevrons are never disabled.',
    },
    dragToSlide: {
      control: { type: 'boolean' },
      description:
        'Enable mouse-drag navigation on the slide area. Uses the same threshold as touch swipe.',
    },
    liveDrag: {
      control: { type: 'boolean' },
      description:
        'Make the slide track follow the mouse pointer in real-time during drag. Pair with `dragToSlide`. Adds rubber-band resistance at the ends when `loop` is off.',
    },
    liveDragMobile: {
      control: { type: 'boolean' },
      description:
        'Make the slide track follow the touch pointer in real-time on mobile and tablet (≤ 1024px). Independent of `dragToSlide`. Defaults to `true`.',
    },
    showProgress: {
      control: { type: 'boolean' },
      description:
        'Show a thin progress bar that fills over `autoSlideSec` seconds. Only visible when `autoSlide` is true.',
    },
    defaultIndex: {
      control: { type: 'number', min: 0 },
      description: 'Index of the slide to show on first render.',
    },
    onSlideChange: {
      description:
        'Callback fired whenever the active slide changes. Receives the new zero-based index.',
    },
  },
};

const images = [
  { id: 1, src: 'https://picsum.photos/seed/alpha/800/500', alt: 'Mountain landscape' },
  { id: 2, src: 'https://picsum.photos/seed/beta/800/500', alt: 'Forest path' },
  { id: 3, src: 'https://picsum.photos/seed/gamma/800/500', alt: 'Ocean sunset' },
  { id: 4, src: 'https://picsum.photos/seed/delta/800/500', alt: 'City skyline' },
];

const slideStyle = {
  width: '100%',
  height: 300,
  objectFit: 'cover',
  borderRadius: 12,
  display: 'block',
};

export const ImageCarousel = (args) => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <Carousel
      data={images}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id} style={{ padding: '0 8px' }}>
          <img src={item.src} alt={item.alt} style={slideStyle} />
        </div>
      )}
      {...args}
    />
  </div>
);

ImageCarousel.storyName = 'Image Carousel';

ImageCarousel.parameters = {
  docs: {
    source: {
      language: 'jsx',
      code: `
import Carousel from 'meticulous-ui/components/Carousel';

const images = [
  { id: 1, src: 'https://picsum.photos/seed/alpha/800/500', alt: 'Mountain landscape' },
  { id: 2, src: 'https://picsum.photos/seed/beta/800/500', alt: 'Forest path' },
  { id: 3, src: 'https://picsum.photos/seed/gamma/800/500', alt: 'Ocean sunset' },
  { id: 4, src: 'https://picsum.photos/seed/delta/800/500', alt: 'City skyline' },
];

const ImageCarousel = () => (
  <Carousel
    data={images}
    visibleSlides={1}
    renderCarousel={(item) => (
      <div key={item.id} style={{ padding: '0 8px' }}>
        <img
          src={item.src}
          alt={item.alt}
          style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12 }}
        />
      </div>
    )}
  />
);
      `,
    },
  },
};

ImageCarousel.args = {
  data: images,
  visibleSlides: 1,
  renderCarousel: (item) => (
    <div key={item.id} style={{ padding: '0 8px' }}>
      <img src={item.src} alt={item.alt} style={slideStyle} />
    </div>
  ),
  overlayArrows: false,
  arrowTop: '50%',
  areDotsHidden: false,
  autoSlide: false,
  autoSlideSec: 3,
  loop: false,
  dragToSlide: false,
  liveDrag: false,
  liveDragMobile: true,
  showProgress: false,
  defaultIndex: 0,
  onSlideChange: (index) => {
    console.log('Current slide index:', index);
  },
};

const cards = [
  { id: 1, title: 'Design Systems', description: 'Build consistent UI at scale.' },
  {
    id: 2,
    title: 'Component Libraries',
    description: 'Reusable building blocks for every screen.',
  },
  { id: 3, title: 'Storybook Docs', description: 'Document your components as you build them.' },
  { id: 4, title: 'Accessibility', description: 'Keyboard and screen-reader support built in.' },
];

export const CardCarousel = () => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <Carousel
      data={cards}
      visibleSlides={2}
      renderCarousel={(card) => (
        <div key={card.id} style={{ padding: '0 8px' }}>
          <div
            style={{
              padding: '20px 24px',
              borderRadius: 12,
              background: '#fff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              height: 120,
            }}
          >
            <p style={{ margin: 0, fontWeight: 600, fontSize: 15 }}>{card.title}</p>
            <p style={{ margin: '8px 0 0', fontSize: 13, color: '#555' }}>{card.description}</p>
          </div>
        </div>
      )}
    />
  </div>
);

CardCarousel.storyName = 'Card Carousel (2 visible)';

CardCarousel.parameters = {
  docs: {
    description: {
      story:
        'Set `visibleSlides={2}` to show two slides at once. Use padding inside each item for gutters.',
    },
    source: {
      language: 'jsx',
      code: `
import Carousel from 'meticulous-ui/components/Carousel';

const cards = [
  { id: 1, title: 'Design Systems', description: 'Build consistent UI at scale.' },
  { id: 2, title: 'Component Libraries', description: 'Reusable building blocks for every screen.' },
  { id: 3, title: 'Storybook Docs', description: 'Document your components as you build them.' },
  { id: 4, title: 'Accessibility', description: 'Keyboard and screen-reader support built in.' },
];

const CardCarousel = () => (
  <Carousel
    data={cards}
    visibleSlides={2}
    renderCarousel={(card) => (
      <div key={card.id} style={{ padding: '0 8px' }}>
        <div style={{ padding: '20px 24px', borderRadius: 12, background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}>
          <p style={{ fontWeight: 600 }}>{card.title}</p>
          <p style={{ color: '#555' }}>{card.description}</p>
        </div>
      </div>
    )}
  />
);
      `,
    },
  },
};

const testimonials = [
  {
    id: 1,
    quote: 'Shipped our design system in half the time.',
    author: 'Priya S., Lead Engineer',
  },
  { id: 2, quote: 'The components just work out of the box.', author: 'Arjun M., Frontend Dev' },
  {
    id: 3,
    quote: 'Storybook integration made handoff painless.',
    author: 'Chen W., Product Designer',
  },
];

export const TestimonialCarousel = () => (
  <div style={{ width: 480, margin: '0 auto' }}>
    <Carousel
      data={testimonials}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id} style={{ padding: '0 8px' }}>
          <div style={{ padding: '24px 28px', borderRadius: 16, background: '#f5f5f5' }}>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: 15, color: '#333' }}>
              "{item.quote}"
            </p>
            <p style={{ margin: '12px 0 0', fontSize: 12, fontWeight: 600, color: '#888' }}>
              — {item.author}
            </p>
          </div>
        </div>
      )}
    />
  </div>
);

TestimonialCarousel.storyName = 'Testimonial Carousel';

TestimonialCarousel.parameters = {
  docs: {
    description: {
      story: 'Quotes or testimonials as a single-slide carousel with dots for navigation.',
    },
    source: {
      language: 'jsx',
      code: `
import Carousel from 'meticulous-ui/components/Carousel';

const testimonials = [
  { id: 1, quote: 'Shipped our design system in half the time.', author: 'Priya S., Lead Engineer' },
  { id: 2, quote: 'The components just work out of the box.', author: 'Arjun M., Frontend Dev' },
  { id: 3, quote: 'Storybook integration made handoff painless.', author: 'Chen W., Product Designer' },
];

const TestimonialCarousel = () => (
  <Carousel
    data={testimonials}
    visibleSlides={1}
    renderCarousel={(item) => (
      <div key={item.id} style={{ padding: '0 8px' }}>
        <div style={{ padding: '24px 28px', borderRadius: 16, background: '#f5f5f5' }}>
          <p style={{ fontStyle: 'italic' }}>"{item.quote}"</p>
          <p style={{ fontWeight: 600, color: '#888' }}>— {item.author}</p>
        </div>
      </div>
    )}
  />
);
      `,
    },
  },
};

export const OverlayArrows = () => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <Carousel
      overlayArrows
      data={images}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} style={slideStyle} />
        </div>
      )}
    />
  </div>
);

OverlayArrows.storyName = 'Overlay Arrows';

OverlayArrows.parameters = {
  docs: {
    description: {
      story:
        'Pass `overlayArrows` to render the navigation arrows inside the slide area. They fade out after 2 seconds and reappear on hover, tap, or click — ideal for image galleries.',
    },
    source: {
      language: 'jsx',
      code: `
<Carousel
  overlayArrows
  data={images}
  visibleSlides={1}
  renderCarousel={(item) => (
    <div key={item.id}>
      <img src={item.src} alt={item.alt} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12 }} />
    </div>
  )}
/>
      `,
    },
  },
};

export const ArrowPosition = () => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <Carousel
      overlayArrows
      arrowTop='20%'
      data={images}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} style={slideStyle} />
        </div>
      )}
    />
  </div>
);

ArrowPosition.storyName = 'Arrow Position';

ArrowPosition.parameters = {
  docs: {
    description: {
      story:
        'Use `arrowTop` to pin the overlay chevrons to a specific vertical position. Accepts any CSS string (`"20%"`, `"80px"`) or a number (treated as px). Defaults to `"50%"`.',
    },
    source: {
      language: 'jsx',
      code: `
<Carousel
  overlayArrows
  arrowTop="20%"
  data={images}
  visibleSlides={1}
  renderCarousel={(item) => (
    <div key={item.id}>
      <img src={item.src} alt={item.alt} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12 }} />
    </div>
  )}
/>
      `,
    },
  },
};

export const AutoSlide = () => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <Carousel
      autoSlide
      autoSlideSec={2}
      showProgress
      data={images}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id} style={{ padding: '0 8px' }}>
          <img src={item.src} alt={item.alt} style={slideStyle} />
        </div>
      )}
    />
  </div>
);

AutoSlide.storyName = 'Auto Slide';

AutoSlide.parameters = {
  docs: {
    description: {
      story:
        'Pass `autoSlide` to advance slides automatically. A pause/play button appears in the bottom-right corner of the slide area (WCAG 2.2.2). `showProgress` adds a thin progress bar that fills over `autoSlideSec` seconds and resets on each advance. Auto-play also pauses on hover and keyboard focus.',
    },
    source: {
      language: 'jsx',
      code: `
<Carousel
  autoSlide
  autoSlideSec={2}
  showProgress
  data={images}
  visibleSlides={1}
  renderCarousel={(item) => (
    <div key={item.id} style={{ padding: '0 8px' }}>
      <img src={item.src} alt={item.alt} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12 }} />
    </div>
  )}
/>
      `,
    },
  },
};

export const HiddenDots = () => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <Carousel
      areDotsHidden
      data={images}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id} style={{ padding: '0 8px' }}>
          <img src={item.src} alt={item.alt} style={slideStyle} />
        </div>
      )}
    />
  </div>
);

HiddenDots.storyName = 'Hidden Dots';

HiddenDots.parameters = {
  docs: {
    description: {
      story:
        'Pass `areDotsHidden` to remove the dot indicators — useful when slide position is conveyed another way, or when a minimal look is preferred.',
    },
    source: {
      language: 'jsx',
      code: `
<Carousel
  areDotsHidden
  data={images}
  visibleSlides={1}
  renderCarousel={(item) => (
    <div key={item.id} style={{ padding: '0 8px' }}>
      <img src={item.src} alt={item.alt} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12 }} />
    </div>
  )}
/>
      `,
    },
  },
};

export const Loop = () => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <Carousel
      loop
      data={images}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id} style={{ padding: '0 8px' }}>
          <img src={item.src} alt={item.alt} style={slideStyle} />
        </div>
      )}
    />
  </div>
);

Loop.storyName = 'Loop';

Loop.parameters = {
  docs: {
    description: {
      story:
        'Pass `loop` to enable infinite navigation. Pressing next on the last slide wraps to the first, and prev on the first wraps to the last. Both chevrons stay enabled at all times.',
    },
    source: {
      language: 'jsx',
      code: `
<Carousel
  loop
  data={images}
  visibleSlides={1}
  renderCarousel={(item) => (
    <div key={item.id} style={{ padding: '0 8px' }}>
      <img src={item.src} alt={item.alt} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12 }} />
    </div>
  )}
/>
      `,
    },
  },
};

export const DragToSlide = () => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <p style={{ textAlign: 'center', fontSize: 13, color: '#888', marginBottom: 12 }}>
      Click and drag the image left or right to navigate
    </p>
    <Carousel
      dragToSlide
      data={images}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id} style={{ padding: '0 8px' }}>
          <img
            src={item.src}
            alt={item.alt}
            style={{ ...slideStyle, userSelect: 'none', pointerEvents: 'none' }}
          />
        </div>
      )}
    />
  </div>
);

DragToSlide.storyName = 'Drag to Slide';

DragToSlide.parameters = {
  docs: {
    description: {
      story:
        "Pass `dragToSlide` to enable mouse-drag navigation on desktop. The slide area shows a grab cursor and responds to the same swipe threshold as touch. Set `pointerEvents: none` on images to prevent the browser's native image drag from interfering.",
    },
    source: {
      language: 'jsx',
      code: `
<Carousel
  dragToSlide
  data={images}
  visibleSlides={1}
  renderCarousel={(item) => (
    <div key={item.id} style={{ padding: '0 8px' }}>
      <img
        src={item.src}
        alt={item.alt}
        style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12, pointerEvents: 'none' }}
      />
    </div>
  )}
/>
      `,
    },
  },
};

export const LiveDrag = () => (
  <div style={{ width: 560, margin: '0 auto' }}>
    <p style={{ textAlign: 'center', fontSize: 13, color: '#888', marginBottom: 12 }}>
      Drag or swipe — the slide follows your pointer in real-time
    </p>
    <Carousel
      dragToSlide
      liveDrag
      data={images}
      visibleSlides={1}
      renderCarousel={(item) => (
        <div key={item.id} style={{ padding: '0 8px' }}>
          <img
            src={item.src}
            alt={item.alt}
            style={{ ...slideStyle, userSelect: 'none', pointerEvents: 'none' }}
          />
        </div>
      )}
    />
  </div>
);

LiveDrag.storyName = 'Live Drag';

LiveDrag.parameters = {
  docs: {
    description: {
      story:
        'Pass `liveDrag` to make the slide track follow the pointer in real-time during drag. The transition is disabled while dragging so the track sticks to the pointer exactly. On release, if the drag exceeded the threshold the carousel snaps to the next/previous slide; otherwise it bounces back to the current one — both using the standard `0.35s ease` transition. At the first and last slide (when `loop` is off), the track applies 30% resistance so it feels like iOS rubber-banding rather than a hard stop. Works on both touch and mouse — pair with `dragToSlide` to enable mouse drag.',
    },
    source: {
      language: 'jsx',
      code: `
<Carousel
  dragToSlide
  liveDrag
  data={images}
  visibleSlides={1}
  renderCarousel={(item) => (
    <div key={item.id} style={{ padding: '0 8px' }}>
      <img
        src={item.src}
        alt={item.alt}
        style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12, pointerEvents: 'none' }}
      />
    </div>
  )}
/>
      `,
    },
  },
};

export const ExternalControl = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div style={{ width: 560, margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
          padding: '8px 12px',
          borderRadius: 8,
          background: '#f5f5f5',
          fontSize: 13,
          color: '#555',
        }}
      >
        <span>
          Slide <strong>{currentSlide + 1}</strong> of {images.length}
        </span>
        <span style={{ color: '#aaa' }}>onSlideChange is firing</span>
      </div>
      <Carousel
        defaultIndex={1}
        data={images}
        visibleSlides={1}
        onSlideChange={setCurrentSlide}
        renderCarousel={(item) => (
          <div key={item.id} style={{ padding: '0 8px' }}>
            <img src={item.src} alt={item.alt} style={slideStyle} />
          </div>
        )}
      />
    </div>
  );
};

ExternalControl.storyName = 'External Control';

ExternalControl.parameters = {
  docs: {
    description: {
      story:
        'Use `defaultIndex` to set the initial slide without controlling it, and `onSlideChange` to receive the current index whenever navigation occurs. Useful for syncing an external caption, driving analytics, or reflecting state in a URL.',
    },
    source: {
      language: 'jsx',
      code: `
import { useState } from 'react';
import Carousel from 'meticulous-ui/components/Carousel';

const ExternalControl = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div>
      <p>Slide {currentSlide + 1} of {images.length}</p>
      <Carousel
        defaultIndex={1}
        data={images}
        visibleSlides={1}
        onSlideChange={setCurrentSlide}
        renderCarousel={(item) => (
          <div key={item.id} style={{ padding: '0 8px' }}>
            <img src={item.src} alt={item.alt} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 12 }} />
          </div>
        )}
      />
    </div>
  );
};
      `,
    },
  },
};
