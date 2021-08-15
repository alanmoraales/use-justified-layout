import React from "react";
import { imagesProvider } from "./images";
import useJustifiedLayout from "../lib/main";

const images = imagesProvider.get();

function App() {
  const [layout, layoutIsReady] = useJustifiedLayout({
    layoutInput: images,
  });

  return (
    <div>
      {layout.boxes.map(({ width, height, top, left }, index) => (
        <img
          width={width}
          height={height}
          style={{ top, left, position: "absolute" }}
          src={images[index].url}
        />
      ))}
    </div>
  );
}

export default App;
