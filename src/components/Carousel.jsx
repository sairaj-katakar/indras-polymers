
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export default function Carousel({
  items = [],
  autoPlay = true,
  interval = 4000,
  showArrows = true,
  showDots = true,
  showPlayPause = false,
  loop = true,
  aspectRatio = "16 / 9",
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStart = useRef(null);
  const timerRef = useRef(null);

  const totalSlides = items.length;

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;

    setCurrentIndex((previous) => {
      if (previous >= totalSlides - 1) {
        return loop ? 0 : previous;
      }
      return previous + 1;
    });
  }, [totalSlides, loop]);

  const previousSlide = useCallback(() => {
    if (totalSlides <= 1) return;

    setCurrentIndex((previous) => {
      if (previous <= 0) {
        return loop ? totalSlides - 1 : previous;
      }
      return previous - 1;
    });
  }, [totalSlides, loop]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) return;

    timerRef.current = setInterval(nextSlide, interval);

    return () => clearInterval(timerRef.current);
  }, [autoPlay, isPaused, interval, nextSlide, totalSlides]);

  // Keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") previousSlide();
  };

  // Touch swipe
  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart.current - touchEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStart.current = null;
  };

  if (!items.length) return null;

  return (
    <section
      className={`universal-carousel ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
      aria-label="Image carousel"
      tabIndex={0}
    >
      <div
        className="carousel-viewport"
        style={{ aspectRatio }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              className="carousel-slide"
              key={item.id || item.src || index}
              aria-hidden={index !== currentIndex}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="carousel-image-link"
                  tabIndex={index === currentIndex ? 0 : -1}
                >
                  <img
                    src={item.src}
                    alt={item.alt || item.title || `Slide ${index + 1}`}
                    className="carousel-image"
                    draggable="false"
                  />
                </a>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt || item.title || `Slide ${index + 1}`}
                  className="carousel-image"
                  draggable="false"
                />
              )}

              {(item.title || item.description) && (
                <div className="carousel-caption">
                  {item.title && <h3>{item.title}</h3>}
                  {item.description && <p>{item.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        {showArrows && totalSlides > 1 && (
          <>
            <button
              type="button"
              className="carousel-arrow carousel-prev"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              className="carousel-arrow carousel-next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {showPlayPause && autoPlay && totalSlides > 1 && (
          <button
            type="button"
            className="carousel-play-pause"
            onClick={() => setIsPaused((previous) => !previous)}
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        )}
      </div>

      {showDots && totalSlides > 1 && (
        <div className="carousel-dots" aria-label="Choose slide">
          {items.map((item, index) => (
            <button
              key={item.id || index}
              type="button"
              className={`carousel-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .universal-carousel {
          width: 100%;
          outline: none;
        }

        .carousel-viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          background: #071b30;
          touch-action: pan-y;
        }

        .carousel-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .carousel-slide {
          position: relative;
          flex: 0 0 100%;
          min-width: 0;
          height: 100%;
          overflow: hidden;
        }

        .carousel-image,
        .carousel-image-link {
          display: block;
          width: 100%;
          height: 100%;
        }

        .carousel-image {
          object-fit: cover;
          object-position: center;
          user-select: none;
        }

        .carousel-arrow,
        .carousel-play-pause {
          position: absolute;
          z-index: 3;
          display: grid;
          place-items: center;
          color: #fff;
          background: rgba(5, 22, 40, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .carousel-arrow {
          top: 50%;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transform: translateY(-50%);
        }

        .carousel-prev {
          left: 16px;
        }

        .carousel-next {
          right: 16px;
        }

        .carousel-arrow:hover,
        .carousel-play-pause:hover {
          color: #071b30;
          background: #35c6e7;
          border-color: #35c6e7;
        }

        .carousel-play-pause {
          right: 16px;
          bottom: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }

        .carousel-caption {
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 65px 30px 25px;
          color: #fff !important;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(3, 16, 30, 0.35) 35%,
            rgba(3, 16, 30, 0.92) 100%
          );
          pointer-events: none;
        }

        .carousel-caption h3 {
          margin: 0 0 8px;
          color: #fff !important;
          font-size: clamp(18px, 3vw, 28px);
          font-weight: 800;
          line-height: 1.25;
        }

        .carousel-caption p {
          margin: 0;
          color: #eaf4fb !important;
          font-size: 14px;
          line-height: 1.6;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          padding: 16px 0 5px;
        }

        .carousel-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 0;
          border-radius: 20px;
          background: #bdcbd5;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          width: 27px;
          background: #11b8e8;
        }

        .universal-carousel button:focus-visible,
        .universal-carousel a:focus-visible {
          outline: 3px solid #35c6e7;
          outline-offset: 3px;
        }

        /* Tablet */
        @media (min-width: 601px) and (max-width: 900px) {
          .carousel-caption {
            padding: 50px 22px 20px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .carousel-viewport {
            aspect-ratio: 4 / 3 !important;
            min-height: 210px;
            max-height: 280px;
            border-radius: 9px;
          }

          .carousel-slide {
            height: 100%;
          }

          .carousel-image,
          .carousel-image-link {
            width: 100%;
            height: 100%;
          }

          .carousel-image {
            object-fit: cover;
          }

          .carousel-arrow {
            width: 36px;
            height: 36px;
          }

          .carousel-prev {
            left: 10px;
          }

          .carousel-next {
            right: 10px;
          }

          .carousel-caption {
            padding: 55px 16px 17px;
          }

          .carousel-caption h3 {
            font-size: 19px;
            margin-bottom: 5px;
          }

          .carousel-caption p {
            font-size: 12px;
            line-height: 1.45;
          }

          .carousel-dots {
            gap: 8px;
            padding: 13px 0 4px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-track,
          .carousel-arrow,
          .carousel-dot {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
