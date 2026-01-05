import React from "react";

const AnimatedBox = ({ length = 18 }) => {
  return (
    <>
      {Array.from({ length }).map((_, idx) => {
        const size = Math.floor(Math.random() * 30) + 5; // 5-35px
        const duration = Math.floor(Math.random() * 20) + 10; // 10-30s
        const x = Math.floor(Math.random() * 300) - 150; // -150px do 150px
        const y = Math.floor(Math.random() * 400) - 200; // -200px do 200px
        const isTop = idx < length / 2;

        const style = {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--top": isTop ? `${Math.random() * 30 + 5}%` : "auto",
          "--left": isTop ? `${Math.random() * 80}%` : "auto",
          "--bottom": !isTop ? `${Math.random() * 20}%` : "auto",
          "--right": !isTop ? `${Math.random() * 80}%` : "auto",
          "--x-move-25": `${x * 0.25}px`,
          "--y-move-25": `${y * 0.25}px`,
          "--x-move-50": `${x * 0.5}px`,
          "--y-move-50": `${y * 0.5}px`,
          "--x-move-75": `${x * 0.75}px`,
          "--y-move-75": `${y * 0.75}px`,
          "--x-move-100": `${x}px`,
          "--y-move-100": `${y}px`,
        };

        return <div className="animated-box" key={idx} style={style}></div>;
      })}
    </>
  );
};

export default AnimatedBox;
