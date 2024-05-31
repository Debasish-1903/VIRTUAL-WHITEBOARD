import { useEffect, useRef } from "react";
import rough from "roughjs";

function Board() {
  const canvasRef = useRef();  // use ref access the dom 

  useEffect(() => {
    const canvas = canvasRef.current; // selecting the canvas
    //const ctx=canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let roughCanvas = rough.canvas(canvas);
    let generator = roughCanvas.generator;
    let rect1 = generator.rectangle(10, 10, 100, 100);
    let rect2 = generator.rectangle(10, 120, 100, 100, {
      fill: "blue",
      stroke: "red",
    });
    roughCanvas.draw(rect1);
    roughCanvas.draw(rect2);
  }, []);

  return (
    <div className="Board">
      <canvas ref={canvasRef} width="100" height="120">
        {" "}
        hi
      </canvas>
      <h1>my whiteboard</h1>
    </div>
  );
}

export default Board;
