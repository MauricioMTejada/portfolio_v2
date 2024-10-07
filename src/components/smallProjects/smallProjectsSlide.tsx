import React, { useState, useMemo } from "react";
import { IconButton, SvgIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProjectsCard } from "../projects/projectsCard";
import styles from "./smallProjectSlide.module.css";
import { IDataProjectWithTech } from "../../utils/data/dataProjectsWithTechnologies";
import { useWindowSize } from "../../utils/widthWindow/useWindowSize";

interface SmallProjectsSlideProps {
  smallProjectsData: IDataProjectWithTech[];
}

export const SmallProjectsSlide: React.FC<SmallProjectsSlideProps> = ({
  smallProjectsData,
}) => {
  const { width } = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselWidth = useMemo(() => {
    const calculatedWidth = width - 100;
    return Math.min(Math.max(calculatedWidth, 0), 900);
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
    <div className={styles.centered}>
      <div className={`${styles.centered} ${styles.contentButton}`}>
        <IconButton onClick={prev}>
          <SvgIcon className={styles.arrowIconLeft}>
            <ArrowForwardIosIcon />
          </SvgIcon>
        </IconButton>
      </div>

      <div className={styles.carouselContainer} style={{ width: `${carouselWidth}px` }}>
        <Carousel
          autoPlay={false}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
          showArrows={false}
          centerMode
          centerSlidePercentage={100}
          infiniteLoop
          showThumbs={false}
        >
          {smallProjectsData.map(
            (data: IDataProjectWithTech, index: number) => (
              <ProjectsCard
                key={index}
                data={data}
                index={index}
              />
            )
          )}
        </Carousel>
      </div>

      <div className={`${styles.centered} ${styles.contentButton}`}>
        <IconButton onClick={next}>
          <SvgIcon className={styles.arrowIconRight}>
            <ArrowForwardIosIcon />
          </SvgIcon>
        </IconButton>
      </div>
    </div>
  );
};