"use client";

import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div
      className={`fixed bottom-15 right-5 w-12 h-12 bg-primary rounded-full flex justify-center items-center transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="scroll to top"
        className="w-full h-full text-white"
        onClick={scrollTop}
      >
        <span className="block text-2xl leading-none">
          <BsArrowUp className="inline-block" />
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
