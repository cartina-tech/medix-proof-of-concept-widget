import { useState } from "react";
import "./App.css";

// Components
import Helmet from "./components/Helmet";
import Jacket from "./components/Jacket";

import MiniJacket from "./components/MiniJacket";
import ColorPalette from "./components/ColorPalette";
import { IBasicPattern, jacketBasicPatterns } from "./components/consts";

export interface IJacketProps {
  currentId?: string;
  jacketPattern: IBasicPattern[];
}

function App() {
  const [jacketPaths, setJacketPaths] = useState<IBasicPattern[]>();
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
    setJacketPaths(props.jacketPattern);
  };

  return (
    <>
      <div className='App'>
        <div className='dressPanel'>
          <Helmet
            {...{
              helmetIsFocused: helmetFocused,
              setHelmetIsFocused: setHelmetFocused,
            }}
          />
          <Jacket jacketPattern={jacketPaths || []} />
        </div>
        <div className='rightPanel'>
          <ColorPalette />
          <div className='jacketPatterns'>
            <p className='patternTitle'>Välj jacka, grundmönster</p>
            <MiniJacket
              key={0}
              isSelected={`mini-jacket-0` === miniJacketSelected.id}
              id={`mini-jacket-0`}
              onClick={() =>
                onClickMiniJacket({
                  currentId: `mini-jacket-0`,
                  jacketPattern: [],
                })
              }
              jacketPattern={[]}
            />
            {jacketBasicPatterns.map(
              (pattern: IBasicPattern[], index: number) => {
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
                        jacketPattern: pattern,
                      })
                    }
                    jacketPattern={pattern}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
