import React, { useState, useMemo } from "react";
import { IconButton, SvgIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArticlesCard } from "./articlesCard";
import { IInfo } from "./request";
import styles from "./articlesReactResponsiveCarousel.module.css";
import { useWindowSize } from "../../utils/widthWindow/useWindowSize";

interface Props {
  data: IInfo[];
}

export const Slides: React.FC<Props> = ({ data }) => {
  const { width } = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselWidth = useMemo(() => {
    const calculatedWidth = width - 100;
    return Math.min(Math.max(calculatedWidth, 0), 800);
  }, [width]);

  const centerSlidePercentage = useMemo(() => {
    return width < 769 ? 100 : 60;
  }, [width]);

  const next = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className={styles.divContainer}>
      <div className={styles.prevContendButton}>
        <IconButton onClick={prev}>
          <SvgIcon className={styles.arrowIcon}>
            <ArrowForwardIosIcon />
          </SvgIcon>
        </IconButton>
      </div>

      <div className={styles.nextContendButton}>
        <IconButton onClick={next}>
          <SvgIcon className={styles.arrowIcon}>
            <ArrowForwardIosIcon />
          </SvgIcon>
        </IconButton>
      </div>

      <div className={styles.carrouselContainer} style={{ width: `${carouselWidth}px` }}>
        <Carousel
          autoPlay={false}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
          showArrows={false}
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          infiniteLoop
          width={`${carouselWidth}px`}
          showThumbs={false}
        >
          {data.map((article, index) => (
            <ArticlesCard
              key={index}
              article={article}
              isActive={index === currentSlide}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};