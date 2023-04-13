import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./Spinner";

export const Carrousel = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/photos");
      const data = response.data.slice(0, 20);
      setPhotos(data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const swiper = ref.current;
    if (!loading) {
      Object.assign(swiper, {
        pagination: {
          clickable: true,
        },
        navigation: {
          clickable: true,
        },
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      });
      swiper.initialize();
    }
  }, [photos]);

  return !loading ? (
    <swiper-container
      pagination="true"
      effect="coverflow"
      grab-cursor="true"
      centered-slides="true"
      coverflow-effect-rotate="50"
      coverflow-effect-stretch="0"
      coverflow-effect-depth="100"
      coverflow-effect-modifier="1"
      coverflow-effect-slide-shadows="true"
      init="false"
      ref={ref}
    >
      {photos.map((photo, indx) => (
        <swiper-slide key={indx}>
          <img src={photo.url} className="img-card" alt={photo.url} />
        </swiper-slide>
      ))}
    </swiper-container>
  ) : (
    <Spinner />
  );
};
