import { useEffect, useRef, useState } from 'react';

import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';

import {
  Wrapper,
  SlideArea,
  SlideViewport,
  SlideTrack,
  NavButton,
  DotsWrapper,
  Dot,
  ProgressBar,
  PauseButton,
} from './styles';

const SWIPE_THRESHOLD = 50;
const ARROW_HIDE_DELAY = 2000;

const PauseIcon = () => (
  <svg width={12} height={12} viewBox='0 0 12 12' fill='currentColor' aria-hidden='true'>
    <rect x='2' y='1' width='3' height='10' rx='1' />
    <rect x='7' y='1' width='3' height='10' rx='1' />
  </svg>
);

const PlayIcon = () => (
  <svg width={12} height={12} viewBox='0 0 12 12' fill='currentColor' aria-hidden='true'>
    <path d='M2 1.5l9 4.5-9 4.5V1.5z' />
  </svg>
);

const Carousel = ({
  data,
  renderCarousel,
  visibleSlides = 1,
  hasArrow = true,
  overlayArrows = false,
  arrowTop,
  areDotsHidden = false,
  autoSlide = false,
  autoSlideSec = 3,
  loop = false,
  dragToSlide = false,
  liveDrag = false,
  liveDragMobile = true,
  showProgress = false,
  defaultIndex = 0,
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const [arrowsVisible, setArrowsVisible] = useState(true);
  const [viewportFocused, setViewportFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const touchStartX = useRef(null);
  const dragStartX = useRef(null);
  const hideTimer = useRef(null);
  const viewportRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1024px)');
    setIsMobileOrTablet(mq.matches);
    const handler = (e) => setIsMobileOrTablet(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const maxIndex = data.length - visibleSlides;

  const prev = () => setCurrentIndex((i) => (loop && i === 0 ? maxIndex : Math.max(i - 1, 0)));
  const next = () =>
    setCurrentIndex((i) => (loop && i >= maxIndex ? 0 : Math.min(i + 1, maxIndex)));

  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex]);

  const showArrows = () => {
    if (!overlayArrows) return;
    clearTimeout(hideTimer.current);
    setArrowsVisible(true);
    hideTimer.current = setTimeout(() => setArrowsVisible(false), ARROW_HIDE_DELAY);
  };

  const handleMouseEnter = () => {
    setPaused(true);
    if (!overlayArrows) return;
    clearTimeout(hideTimer.current);
    setArrowsVisible(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
    if (!overlayArrows) return;
    hideTimer.current = setTimeout(() => setArrowsVisible(false), ARROW_HIDE_DELAY);
  };

  useEffect(() => {
    if (!overlayArrows) return;
    hideTimer.current = setTimeout(() => setArrowsVisible(false), ARROW_HIDE_DELAY);
    return () => clearTimeout(hideTimer.current);
  }, [overlayArrows]);

  useEffect(() => {
    if (!autoSlide || paused) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, autoSlideSec * 1000);
    return () => clearInterval(id);
  }, [autoSlide, autoSlideSec, paused, maxIndex]);

  const getResistantOffset = (offsetPx) => {
    if (loop) return offsetPx;
    if (currentIndex === 0 && offsetPx > 0) return offsetPx * 0.3;
    if (currentIndex === maxIndex && offsetPx < 0) return offsetPx * 0.3;
    return offsetPx;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    if (liveDragMobile && isMobileOrTablet) setDragging(true);
    showArrows();
  };

  const handleTouchMove = (e) => {
    if (!liveDragMobile || !isMobileOrTablet || touchStartX.current === null) return;
    setDragOffsetPx(getResistantOffset(e.touches[0].clientX - touchStartX.current));
  };

  const handleTouchEnd = (e) => {
    if (liveDragMobile && isMobileOrTablet) {
      setDragging(false);
      setDragOffsetPx(0);
    }
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > SWIPE_THRESHOLD) next();
    else if (delta < -SWIPE_THRESHOLD) prev();
    touchStartX.current = null;
  };

  const handleMouseDown = (e) => {
    if (!dragToSlide) return;
    dragStartX.current = e.clientX;
    if (liveDrag) setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragToSlide || !liveDrag || dragStartX.current === null) return;
    setDragOffsetPx(getResistantOffset(e.clientX - dragStartX.current));
  };

  const handleMouseUp = (e) => {
    if (!dragToSlide || dragStartX.current === null) return;
    if (liveDrag) {
      setDragging(false);
      setDragOffsetPx(0);
    }
    const delta = dragStartX.current - e.clientX;
    if (delta > SWIPE_THRESHOLD) next();
    else if (delta < -SWIPE_THRESHOLD) prev();
    dragStartX.current = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  const containerWidth = viewportRef.current?.clientWidth ?? 0;
  const dragOffsetPercent = containerWidth > 0 ? (dragOffsetPx / containerWidth) * 100 : 0;
  const translateX = -(currentIndex * (100 / visibleSlides)) + dragOffsetPercent;
  const arrowTopValue =
    arrowTop !== undefined
      ? typeof arrowTop === 'number'
        ? `${arrowTop}px`
        : arrowTop
      : undefined;

  const totalSlides = maxIndex + 1;

  return (
    <Wrapper
      onClick={showArrows}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      role='region'
      aria-label='Carousel'
    >
      <SlideArea
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {hasArrow && (
          <NavButton
            onClick={prev}
            disabled={!loop && currentIndex === 0}
            aria-label='Previous slide'
            $overlay={overlayArrows}
            $visible={arrowsVisible}
            $arrowTop={arrowTopValue}
            $viewportFocused={viewportFocused}
          >
            <ChevronLeft size={20} aria-hidden='true' />
          </NavButton>
        )}

        <SlideViewport
          ref={viewportRef}
          tabIndex={0}
          aria-label='Carousel slides. Use arrow keys to navigate.'
          $draggable={dragToSlide}
          onFocus={() => {
            setViewportFocused(true);
            setPaused(true);
          }}
          onBlur={() => {
            setViewportFocused(false);
            setPaused(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={(e) => {
            if (e.buttons === 1) return;
            if (liveDrag && dragging) {
              setDragging(false);
              setDragOffsetPx(0);
            }
            dragStartX.current = null;
          }}
        >
          <SlideTrack $translateX={translateX} $visibleSlides={visibleSlides} $dragging={dragging}>
            {data.map(renderCarousel)}
          </SlideTrack>
        </SlideViewport>

        {hasArrow && (
          <NavButton
            onClick={next}
            disabled={!loop && currentIndex === maxIndex}
            aria-label='Next slide'
            $overlay={overlayArrows}
            $visible={arrowsVisible}
            $arrowTop={arrowTopValue}
            $viewportFocused={viewportFocused}
          >
            <ChevronRight size={20} aria-hidden='true' />
          </NavButton>
        )}

        {autoSlide && (
          <PauseButton
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          >
            {paused ? <PlayIcon /> : <PauseIcon />}
          </PauseButton>
        )}
      </SlideArea>

      <div
        aria-live='polite'
        aria-atomic='true'
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
        }}
      >
        Slide {currentIndex + 1} of {totalSlides}
      </div>

      {autoSlide && showProgress && (
        <ProgressBar key={currentIndex} $duration={autoSlideSec} $paused={paused} />
      )}

      {!areDotsHidden && (
        <DotsWrapper>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <Dot
              key={i}
              $active={i === currentIndex}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Slide ${i + 1} of ${totalSlides}`}
              aria-current={i === currentIndex ? 'true' : undefined}
            />
          ))}
        </DotsWrapper>
      )}
    </Wrapper>
  );
};

export default Carousel;
