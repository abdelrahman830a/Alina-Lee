import React, { useState, useEffect, createContext } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBg, setCursorBg] = useState("default");

  const mobileViewPortIsActive = window.innerWidth < 768;

  useEffect(() => {
    if(!mobileViewPortIsActive){
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", move);
  
      return () => {
        window.removeEventListener("mousemove", move);
      };
    }else{
      setCursorBg('none')
    }
  });


  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 75,
      y: cursorPos.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255,255,255,1)'
    }
  };

  const mouseEnterHandler = () => {
    setCursorBg("text");
  };
  const mouseLeaveHandler = () => {
    setCursorBg("default");
  };
  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBg, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
