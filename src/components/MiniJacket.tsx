import { useState } from "react";
import { IBasicPattern } from "../App";

export interface IMiniJacket {
  id: string;
  isSelected: boolean;
  jacketPattern?: IBasicPattern[];
  onClick: () => void;
}

const blackStrokeStyle = {
  stroke: "black",
  fill: "#ffffff",
};

const MiniJacket = (props: IMiniJacket) => {
  const { jacketPattern, id, isSelected, onClick } = props;
  const [miniJacketClicks, setMiniJacketClicks] = useState<number>(0);
  const selectedBorderColor = "#5ca7bd";

  const handleJacketClick = (props: { currentId: string }) => {
    console.log(props.currentId);
    onClick();
    if (miniJacketClicks <= 3) {
      if (miniJacketClicks === 3) {
        setMiniJacketClicks(0);
        return;
      }
      setMiniJacketClicks((prevClicks) => prevClicks + 1);
    }
  };

  let miniJacketStyle = {
    cursor: "pointer",
    border: `0.15em solid ${isSelected ? selectedBorderColor : "transparent"}`,
    borderRadius: "0.5em",
    background: isSelected ? "#eee" : "none",
  };

  return (
    <>
      {`${miniJacketClicks}`}
      <svg
        onClick={() => handleJacketClick({ currentId: id })}
        viewBox='0 0 183 158'
        preserveAspectRatio='xMinYMin meet'
        height='43'
        width='48'
        id={id}
        style={miniJacketStyle}
      >
        <g id='id5f' style={{ fill: "#FFF" }}>
          <g id='id60'>
            <g stroke='#000' id='id61'>
              <path
                transform='translate(-283.3125,-484.65625)'
                d='m327.79,560.03-9.5044-52.94s-8.3496,4.9072-9.9548,8.2996l-21.794,48.016-2.2583,9.7775,12.463,66.604,22.407-2.0475-2.0972-57.466,2.2474-10.33,8.4911-9.9137z'
              ></path>
              <path
                transform='translate(-283.3125,-484.65625)'
                d='m421.48,561.18,10.602-53.392c3.8888,1.9116,7.2675,4.9659,9.5825,9.0112l21.795,48.016,2.2575,10.365-12.464,66.606-22.406-2.05,2.0962-57.464-2.245-10.331-9.2188-10.76z'
              ></path>
              <path
                transform='translate(-283.3125,-484.65625)'
                d='m432.04,507.98c-31.777-21.967-83.222-21.967-115,0l25,125h65l25.001-125z'
              ></path>
              <path
                transform='translate(-283.3125,-484.65625)'
                d='m390.67,488.7c0-1.8835-1.5881-3.4095-3.5436-3.4095h-24.588c-1.958,0-3.5449,1.526-3.5449,3.4095s1.5869,3.4094,3.5449,3.4094h24.588c1.9555,0,3.5436-1.5259,3.5436-3.4094z'
              ></path>
              <path
                transform='translate(-283.3125,-484.65625)'
                d='m391.51,489.83c0-1.366-0.96425-2.5562-2.4048-3.2312l-8.7098,1.5612c-2.7759,0.49688-4.7241,2.5842-4.3505,4.6619,0.0525,0.29538,0.15863,0.56888,0.29413,0.82888h10.067c2.8174,0,5.1038-1.7102,5.1038-3.8208z'
              ></path>
              <path
                transform='translate(-283.3125,-484.65625)'
                d='m370.6,488.16-10.029-1.7969c-1.7578,0.603-2.9859,1.9239-2.9859,3.4669,0,2.1105,2.2864,3.8207,5.105,3.8207h11.964c0.13551-0.25999,0.243-0.5335,0.29538-0.82887,0.37363-2.0776-1.5746-4.165-4.3492-4.6619z'
              ></path>
              {jacketPattern?.map((path, index) => {
                return (
                  <path
                    id={`mini-jacket-${index}`}
                    key={`mini-jacket-path-${index}`}
                    transform={path.transform}
                    d={path.d}
                    style={blackStrokeStyle}
                  ></path>
                );
              })}
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default MiniJacket;
