import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

/**
 * Generic, reusable Embla carousel with wheel gestures support.
 *
 * Props:
 * - slides: array of React nodes OR data items
 * - renderSlide: (slide, index) => ReactNode (if you pass data instead of ready nodes)
 * - options: EmblaOptionsType (loop, align, dragFree, slidesToScroll, axis, etc.)
 * - wheelGestures: boolean (enable mouse wheel scrolling)
 * - className: extra classes for the outer wrapper
 * - viewportClassName: extra classes for the viewport
 * - slideClassName: classes applied to each slide
 * - showArrows: boolean (prev/next buttons)
 * - showDots: boolean (pagination dots)
 */
const EmblaCarousel = ({
  slides = [],
  renderSlide,
  options,
  wheelGestures = true,
  className = "",
  viewportClassName = "",
  slideClassName = "",
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 4000,
}) => {
  const plugins = wheelGestures ? [WheelGesturesPlugin()] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  // Simple autoplay using setInterval when enabled
  useEffect(() => {
    if (!emblaApi || !autoPlay) return;

    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(id);
  }, [emblaApi, autoPlay, autoPlayInterval]);

  const renderContent = (slide, index) =>
    renderSlide ? renderSlide(slide, index) : slide;

  return (
    <div className={`embla ${className}`}>
      {showArrows && (
        <div className="mb-3 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-grey-300 bg-white text-grey-700 shadow-sm transition hover:bg-grey-100"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-grey-300 bg-white text-grey-700 shadow-sm transition hover:bg-grey-100"
          >
            ›
          </button>
        </div>
      )}

      <div className={`embla__viewport overflow-hidden ${viewportClassName}`} ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              className={`embla__slide flex-[0_0_100%] md:flex-[0_0_auto] ${slideClassName}`}
              key={index}
            >
              {renderContent(slide, index)}
            </div>
          ))}
        </div>
      </div>

      {showDots && scrollSnaps.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition ${
                index === selectedIndex
                  ? "bg-primary-main scale-110"
                  : "bg-grey-300 hover:bg-grey-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;

