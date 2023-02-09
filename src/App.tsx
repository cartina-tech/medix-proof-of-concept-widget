import { useState } from "react";
import "./App.css";

// Components
import Helmet from "./components/Helmet";
import Jacket from "./components/Jacket";

import ColorPalette from "./components/ColorPalette";
import MiniJacket from "./components/MiniJacket";

export interface IJacketProps {
  id: number;
  jacketVariation: IVariation[];
}

export interface IVariation {
  transform: string;
  d: string;
}

interface IJacketVariations {
  [index: number]: IVariation[];
}

const jacketVariatonTwo: IVariation[] = [
  {
    transform: "",
    d: "M 76.015495,8.4171064 C 77.286657,147.73647 77.032424,147.73647 77.032424,147.73647 l -0.254232,0.25423 30.253658,0 -0.25423,-139.3193612 0.76269,0.2542324 z",
  },
];

const jacketVariationThree: IVariation[] = [
  {
    transform: "",
    d: "M 91.777905,8.6713388 92.28637,148.49917 107.03185,148.24494 106.77762,8.6713388 Z",
  },
  {
    transform: "",
    d: "M 91.777905,9.4340361 C 92.28637,147.99071 92.28637,147.99071 92.28637,147.99071 L 77.032424,148.49917 76.015495,8.6713388 Z",
  },
];

const jacketVariations = [jacketVariatonTwo, jacketVariationThree];

function App() {
  const [jacketPaths, setJacketPaths] = useState<IVariation[]>();
  const [helmetFocused, setHelmetFocused] = useState<boolean>(false);

  const onClickMiniJacket = (props: IJacketProps) => {
    setJacketPaths(props.jacketVariation);
  };

  return (
    <>
      <div className='App'>
        <div className='DressPanel'>
          <Helmet
            {...{
              helmetIsFocused: helmetFocused,
              setHelmetIsFocused: setHelmetFocused,
            }}
          />
          <Jacket jacketVariation={jacketPaths || []} />
        </div>
        <div className='RightPanel'>
          <ColorPalette />
          <div className='JacketVariations'>
            <MiniJacket
              key={0}
              onClick={() =>
                onClickMiniJacket({
                  id: 0,
                  jacketVariation: [],
                })
              }
              jacketVariation={[]}
            />
            {jacketVariations.map((variation: IVariation[], index: number) => {
              return (
                <MiniJacket
                  key={index + 1}
                  onClick={() =>
                    onClickMiniJacket({
                      id: index,
                      jacketVariation: variation,
                    })
                  }
                  jacketVariation={variation}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
