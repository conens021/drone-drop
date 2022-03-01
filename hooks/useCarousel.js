import { useEffect, useState } from "react";

export const useCarousel = ({cardWidth}) => {
    const [left, setLeft] = useState(0);
    const [leftArrowVisible, setLeftArrowVisible] = useState(true);
    const [rightArrowVisible, setRightArrowVisible] = useState(true);
  
    useEffect(() => {
      toggleArrows();
    }, [left]);
  
    const toggleArrows = () => {
      if (left >= cardWidth) {
        setLeftArrowVisible(false);
      } else {
        setLeftArrowVisible(true);
      }
  
      if (left <= -cardWidth) {
        setRightArrowVisible(false);
      } else {
        setRightArrowVisible(true);
      }
    };

    return[left,leftArrowVisible,rightArrowVisible]
}