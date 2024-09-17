import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MediaCarousel = ({ mediaUrls }) => {

    
  const getMediaType = (url) => {
  
    const extension = url?.split(".")?.pop()?.toLowerCase();
    if (["jpg", "jpeg", "png", "gif"]?.includes(extension)) {
      return "image";
    } else if (["mp4", "webm", "ogg"]?.includes(extension)) {
      return "video";
    } else {
      return "image";
    }
  };

  const validMediaItems = mediaUrls
    ?.map((url, index) => {
      const type = getMediaType(url);
      if (type === "image") {
        return (
          <div key={index} className="media-item">
            <img src={url} alt={`media-${index}`} className="media-img" />
          </div>
        );
      } else if (type === "video") {
        return (
          <div key={index} className="media-item">
            <video controls width="100%" className="media-video">
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);
    console.log("fghfgfdsffhdsffh",mediaUrls)

  // if (validMediaItems?.length == 0) {
  //     return <p>No media available.</p>;
  // }

  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      showArrows={true}
      infiniteLoop={true}
      interval={2000}
   
    >
      {validMediaItems}
    </Carousel>
  );
};

export default MediaCarousel;
