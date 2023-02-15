import { useState } from "react";
import "./App.css";

// Components
import Helmet from "./components/Helmet";
import Jacket from "./components/Jacket";

import ColorPalette from "./components/ColorPalette";

import { IBasicPattern, IDecor } from "./components/consts";

import ListBasic from "./components/ListBasic";
import ListDecor from "./components/ListDecor";

export interface IJacketProps {
  currentId?: string;
  patterns: IBasicPattern[];
  decors?: IDecor[][];
  type?: patternTypes;
  currentDecor?: IDecor[];
}

export interface ISelectedJacket {
  id: string;
  pattern: IBasicPattern[];
  type?: patternTypes;
  decors?: IDecor[][];
  currentDecor?: IDecor[];
}

export enum patternTypes {
  BASIC,
  DECOR,
  ADDITIONAL,
}

function App() {
  const [helmetFocused, setHelmetFocused] = useState<boolean>(false);
  const [selectedJacket, setSelectedJacket] = useState<ISelectedJacket>();

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
          <Jacket
            decors={selectedJacket?.decors || []}
            patterns={selectedJacket?.pattern || []}
            type={selectedJacket?.type}
            currentDecor={selectedJacket?.currentDecor}
          />
        </div>
        <div className='rightPanel'>
          <ColorPalette />
          <div className='jacketPatterns'>
            <p className='patternTitle'>Välj jacka, grundmönster</p>
            <ListBasic
              setSelectedJacket={setSelectedJacket}
              selectedJacket={selectedJacket}
            />
            <ListDecor
              setSelectedJacket={setSelectedJacket}
              selectedJacket={selectedJacket}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
