import React, { useState, useEffect } from "react";
import "./index.scss";
import Review from "../Review";

function Carousel({ carouselItems, isReviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Update the number of items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1440) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow(); // Initial check
    window.addEventListener("resize", updateItemsToShow); // Listen for screen size changes

    return () => window.removeEventListener("resize", updateItemsToShow); // Cleanup
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  // Get the items to display based on the current index and itemsToShow
  const visibleItems = carouselItems.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  // Handle wrapping around when reaching the end of the array
  if (visibleItems.length < itemsToShow) {
    visibleItems.push(
      ...carouselItems.slice(0, itemsToShow - visibleItems.length)
    );
  }

  return (
    <div className="carousel">
      <div className="carousel__content">
        {visibleItems.map((item, index) =>
          isReviews ? (
            <div key={index} className="carousel__item">
              <Review key={index} content={item.content} />
            </div>
          ) : (
            <div key={index} className="carousel__item">
              {item.content}
            </div>
          )
        )}
      </div>
      <div className="carousel__controls">
        <button onClick={handlePrev} className="carousel__button">
          Prev
        </button>
        <button onClick={handleNext} className="carousel__button">
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
