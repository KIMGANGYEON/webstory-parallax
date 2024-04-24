import { useEffect } from "react";

const Svvg = () => {
  useEffect(() => {
    let path = document.getElementById("svgAni01");
    let pathLength = path.getTotalLength();
    console.log(pathLength);
  }, []);
  return null;
};

export default Svvg;
