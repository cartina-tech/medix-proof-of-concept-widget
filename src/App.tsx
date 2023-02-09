import { useState } from "react";
import "./App.css";

// Components
import Helmet from "./components/Helmet";
import Jacket from "./components/Jacket";

import ColorPalette from "./components/ColorPalette";
import MiniJacket from "./components/MiniJacket";

export interface IJacketProps {
  currentId?: string;
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
    d: "m 122.68486,10.839626 -0.32847,137.466174 -15.60249,0 0,-140.2581986 c 17.24653,2.8155036 11.53061,1.9229126 15.93096,2.7920246 z",
  },
  {
    transform: "",
    d: "M 57.975578,11.332337 59.946418,148.47004 77.027042,148.14156 75.877385,7.8833647 C 70.7555,8.4362252 66.571725,8.6080633 57.975578,11.332337 Z",
  },
];

const jacketVariationFour: IVariation[] = [
  {
    transform: "translate(-283.3125,-484.65625)",
    d: "m 346.99147,494.71879 -5.3682,1.4337 -6.04997,2.11777 7.15386,134.62845 11.7813,-0.12854 -7.38886,-138.53868 z",
  },
  {
    transform: "translate(-283.3125,-484.65625)",
    d: "m 361.8662,493.22414 -2.1736,-0.58424 -2.7466,0.37515 3.5961,139.85267 11.86153,0 -3.72559,-139.1344 z",
  },
  {
    transform: "translate(-283.3125,-484.65625)",
    d: "m 403.74,495.49 6.3305,1.9151 5.215,1.909 -7.97097,133.55267 -11.86153,0.12854 8.2874,-137.51121 z",
  },
  {
    transform: "translate(-283.3125,-484.65625)",
    d: "m 388.09406,493.47414 3.07334,-0.58414 2.7466,0.37446 -3.72603,139.60267 -11.60447,0 3.98397,-139.13146 z",
  },
];

// array of variations
const jacketVariations = [
  jacketVariatonTwo,
  jacketVariationThree,
  jacketVariationFour,
];

function App() {
  const [jacketPaths, setJacketPaths] = useState<IVariation[]>();
  const [helmetFocused, setHelmetFocused] = useState<boolean>(false);
  const [miniJacketSelected, setMiniJacketSelected] = useState({
    id: "",
    selected: false,
  });

  const onClickMiniJacket = (props: IJacketProps) => {
    setMiniJacketSelected({
      id: props.currentId || "",
      selected: true,
    });
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
              isSelected={`mini-jacket-0` === miniJacketSelected.id}
              id={`mini-jacket-0`}
              onClick={() =>
                onClickMiniJacket({
                  currentId: `mini-jacket-0`,
                  jacketVariation: [],
                })
              }
              jacketVariation={[]}
            />
            {jacketVariations.map((variation: IVariation[], index: number) => {
              return (
                <MiniJacket
                  key={index + 1}
                  isSelected={
                    `mini-jacket-${index + 1}` === miniJacketSelected.id
                  }
                  id={`mini-jacket-${index + 1}`}
                  onClick={() =>
                    onClickMiniJacket({
                      currentId: `mini-jacket-${index + 1}`,
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
