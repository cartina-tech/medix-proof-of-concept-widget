import { IJacketProps } from "../App";

const jacketSvgProps = {
  id: "jacket_svg",
  className: "jacket",
  viewBox: "-2 0 190 160",
  preserveAspectRatio: "xMinYMin meet",
  height: "250",
  width: "250",
};

const blackStrokeStyle = {
  stroke: "black",
  fill: "#ffffff",
};

const renderJacket = (props: IJacketProps) => {
  const { jacketPattern: jacketPatterns } = props;

  return (
    <svg {...jacketSvgProps} style={{ float: "left", cursor: "pointer" }}>
      <defs>
        <clipPath id='clipPath14471123691'></clipPath>
        <clipPath id='clipPath14471123692'></clipPath>
        <clipPath id='clipPath14471123693'></clipPath>
        <clipPath id='clipPath14471123694'></clipPath>
      </defs>
      <filter id='i2' x='0' y='0' width='200%' height='200%'>
        <feOffset dx='3' dy='3' result='offOut' in='SourceGraphic'></feOffset>
        <feColorMatrix
          values='0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0.4 0 0 0 0'
          result='matrixOut'
          in='offOut'
          type='matrix'
        ></feColorMatrix>
        <feGaussianBlur
          stdDeviation='1'
          result='blurOut'
          in='matrixOut'
        ></feGaussianBlur>
        <feBlend in='SourceGraphic' in2='blurOut' mode='normal'></feBlend>
      </filter>
      <g filter='url(#i2)' id='idb83'>
        <g id='idb84'>
          <g stroke='#000' id='idb85'>
            <path
              transform='translate(-283.3125,-484.65625)'
              d='m327.79,560.03-9.5044-52.94s-8.3496,4.9072-9.9548,8.2996l-21.794,48.016-2.2583,9.7775,12.463,66.604,22.407-2.0475-2.0972-57.466,2.2474-10.33,8.4911-9.9137z'
              id='idb38'
              style={blackStrokeStyle}
            ></path>
            <path
              transform='translate(-283.3125,-484.65625)'
              d='m421.48,561.18,10.602-53.392c3.8888,1.9116,7.2675,4.9659,9.5825,9.0112l21.795,48.016,2.2575,10.365-12.464,66.606-22.406-2.05,2.0962-57.464-2.245-10.331-9.2188-10.76z'
              id='idb39'
              style={blackStrokeStyle}
            ></path>
            <path
              transform='translate(-283.3125,-484.65625)'
              d='m432.04,507.98c-31.777-21.967-83.222-21.967-115,0l25,125h65l25.001-125z'
              id='idb3a'
              style={blackStrokeStyle}
            ></path>
            <path
              transform='translate(-283.3125,-484.65625)'
              d='m390.67,488.7c0-1.8835-1.5881-3.4095-3.5436-3.4095h-24.588c-1.958,0-3.5449,1.526-3.5449,3.4095s1.5869,3.4094,3.5449,3.4094h24.588c1.9555,0,3.5436-1.5259,3.5436-3.4094z'
              id='idb3b'
              style={{
                stroke: "black",
                fill: "#ffffff",
              }}
            ></path>
            <path
              transform='translate(-283.3125,-484.65625)'
              d='m391.51,489.83c0-1.366-0.96425-2.5562-2.4048-3.2312l-8.7098,1.5612c-2.7759,0.49688-4.7241,2.5842-4.3505,4.6619,0.0525,0.29538,0.15863,0.56888,0.29413,0.82888h10.067c2.8174,0,5.1038-1.7102,5.1038-3.8208z'
              id='idb3c'
              style={blackStrokeStyle}
            ></path>
            <path
              transform='translate(-283.3125,-484.65625)'
              d='m370.6,488.16-10.029-1.7969c-1.7578,0.603-2.9859,1.9239-2.9859,3.4669,0,2.1105,2.2864,3.8207,5.105,3.8207h11.964c0.13551-0.25999,0.243-0.5335,0.29538-0.82887,0.37363-2.0776-1.5746-4.165-4.3492-4.6619z'
              id='idb3d'
              style={blackStrokeStyle}
            ></path>
            {jacketPatterns?.map((pattern, index) => {
              const { d, transform } = pattern;
              return (
                <path
                  id={`jacket-pattern-${index + 1}`}
                  key={index}
                  transform={transform}
                  d={d}
                  style={blackStrokeStyle}
                ></path>
              );
            })}
            <g
              style={{
                clipPath: "url(#clipPath14471123691)",
              }}
            />
            <g
              style={{
                clipPath: "url(#clipPath14471123692)",
              }}
            />
          </g>
        </g>
      </g>
      <g
        style={{
          clipPath: "url(#clipPath14471123693)",
        }}
      />
      <g
        style={{
          clipPath: "url(#clipPath14471123694)",
        }}
      />
    </svg>
  );
};

// Jacket
const Jacket = (props: IJacketProps) => {
  return renderJacket(props);
};

export default Jacket;
