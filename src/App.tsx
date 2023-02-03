import { useState } from "react";
import "./App.css";
import ColorPalette from "./components/ColorPalette";
import JacketSvgIcon1 from "./components/JacketSvgIcon1";
import JacketSvgIcon2 from "./components/JacketSvgIcon2";
import MainBodySvg from "./components/MainBodySvg";

export interface IPathProps {
  d: string[];
}

export interface IJacket {
  id: number;
  variations: IVariation[];
}

export interface IVariation {
  id: string;
  d: string;
  label: string;
}

const jacket1: IJacket = {
  id: 1,
  variations: [
    {
      id: 1,
      label: "lalala",
    },
  ],
};

const jacketVariatonTwo = [
  "M 76.015495,8.4171064 C 77.286657,147.73647 77.032424,147.73647 77.032424,147.73647 l -0.254232,0.25423 30.253658,0 -0.25423,-139.3193612 0.76269,0.2542324 z",
];

const jacketVariationThree = [
  "M 91.777905,8.6713388 92.28637,148.49917 107.03185,148.24494 106.77762,8.6713388 Z",
  "M 91.777905,9.4340361 C 92.28637,147.99071 92.28637,147.99071 92.28637,147.99071 L 77.032424,148.49917 76.015495,8.6713388 Z",
];

function App() {
  const [path, setPath] = useState<IPathProps>({ d: [""] });
  const [clicks, setClicks] = useState<number>(0);
  const [currentJacket, setJacket] = useState<number>(0);

  const onClickJacket = (path: IPathProps) => {
    setPath(path);
    setClicks(clicks + 1);
  };

  return (
    <>
      <div className='App'>
        <div className='DressPanel'>
          {`Clicks ${clicks}`}
          <MainBodySvg {...path} />
        </div>
        <div className='RightPanel'>
          <ColorPalette />
          <div className='JacketVariations'>
            <div
              className='jacketIcon'
              onClick={() =>
                onClickJacket({
                  d: [""],
                })
              }
            >
              <JacketSvgIcon1 />
            </div>
            <div
              className='jacketIcon'
              onClick={() =>
                onClickJacket({
                  d: jacketVariatonTwo,
                })
              }
            >
              <JacketSvgIcon2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
