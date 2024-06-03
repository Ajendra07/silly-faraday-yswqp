import React, { useState, ReactNode, useEffect } from "react";
import "./index.scss";

interface Props {
  children: ReactNode[];
  setActiveIdx?: CallableFunction;
}

const Carousel: React.FC<Props> = ({ children, setActiveIdx }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let startX: number | null = null;

  const updateSlidePosition = (index: number) => {
    const offset = -index * 414;
    const slidesElement = document.querySelector(".slides") as HTMLElement;
    if (slidesElement) {
      slidesElement.style.transform = `translateX(${offset}px)`;
    }

    setTimeout(() => {
      const slides: NodeListOf<HTMLDivElement> =
        document.querySelectorAll(".slide");
      slides.forEach((slide: HTMLDivElement | undefined, i: number) => {
        if (slide instanceof HTMLElement) {
          if (i === index) {
            slide.classList.add("active");
            slide.classList.remove("next", "prev");
          } else if (i < index) {
            slide.classList.remove("active", "next");
            slide.classList.add("prev");
          } else {
            slide.classList.remove("active", "prev");
            slide.classList.add("next");
          }
        }
      });
    }, 50);
  };

  useEffect(() => {
    updateSlidePosition(currentIndex);
  }, [currentIndex]);

  const goToNextSlide = () => {
    if (currentIndex < React.Children.count(children) - 1) {
      const nextIndex = (currentIndex + 1) % children.length;
      setCurrentIndex(nextIndex);
      setActiveIdx?.(nextIndex);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      const nextIndex = (currentIndex - 1 + children.length) % children.length;
      setCurrentIndex(nextIndex);
      setActiveIdx?.(nextIndex);
    }
  };

  const handleSwipeStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleSwipeEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!startX) return;
    const endX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const sensitivity = 50;
    const deltaX = endX - startX;

    if (deltaX > sensitivity) {
      goToPrevSlide();
    } else if (deltaX < -sensitivity) {
      goToNextSlide();
    }

    startX = null;
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
      onMouseDown={handleSwipeStart}
      onMouseUp={handleSwipeEnd}
      onMouseLeave={handleSwipeEnd}
    >
      <div className="slides">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="pagination">
        {React.Children.map(children, (_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => {
              setCurrentIndex(index);
              setActiveIdx?.(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
