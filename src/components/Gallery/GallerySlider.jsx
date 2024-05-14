import React from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import { galleryImages } from "../../constants/data.js";

const GallerySlider = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center">
          <LightGallery
            id="lightGallery"
            plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen, lgShare]}
            mode="lg-fade"
            elementClassNames="photobanner whitespace-nowrap flex items-center gap-4 h-64 hover:animation-paused"
            options={{
              thumbnail: true,
              autoplay: true,
            }}
          >
            {galleryImages.map((image, index) => (
              <a
                key={index}
                href={image.url}
                data-src={image.url}
                data-lg-size="1920-1080"
                className={`relative ${
                  index % 2 === 0 ? "w-96" : "w-52"
                } h-64 mr-4 object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`relative ${
                    index % 2 === 0 ? "w-96" : "w-52"
                  } h-64 mr-4 object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer`}
                  loading="lazy"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </>
  );
};

export default GallerySlider;
