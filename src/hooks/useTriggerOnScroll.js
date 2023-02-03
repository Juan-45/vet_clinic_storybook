import { useState, useEffect } from "react";

const useTriggerOnScroll = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (yScroll > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrolling };
};

export default useTriggerOnScroll;
