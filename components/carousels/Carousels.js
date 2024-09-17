import React, { useState } from "react";

const Carousels = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("images", images);
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  console.log("carousel images",images)

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {images && images.map((image, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === currentIndex ? "active" : ""}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {images?.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={`${item}`}
              alt="noimage"
              className="w-100 exploreContent"
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      { images?.length > 1 && (
        <button
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          style={{ fontSize: "24px", width: "50px", height: "50px" }}
          onClick={goToPrevSlide}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="sr-only">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </span>
        </button>
      )}
      {images?.length > 1 && (
        <button
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          style={{ fontSize: "24px", width: "50px", height: "50px" }}
          onClick={goToNextSlide}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </button>
      )}
    </div>
  );
};

export default Carousels;
