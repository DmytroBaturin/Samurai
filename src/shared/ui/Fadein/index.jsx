import React, { useEffect, useState } from "react";

const FadeIn = ({ children, delay = 2000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`fade-in ${isVisible ? "visible" : ""}`}>{children}</div>
  );
};

export default FadeIn;
