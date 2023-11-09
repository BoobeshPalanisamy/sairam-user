import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // Scroll the 'body' element
    // document.documentElement.scrollTop = 0; // Scroll the 'html' element
  }, [pathname]);

  return null;
};

export default ScrollToTop;
