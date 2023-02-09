import { Dispatch, SetStateAction } from "react";

const helmetSvgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "helmet",
  viewBox: "-15 -15 700 110",
  preserveAspectRatio: "xMinYMin meet",
  height: "110",
  width: "130",
  id: "id4b",
};

const helmetId: string = "helmet_svg";

const blackStrokeStyle = {
  stroke: "black",
  fill: "#ffffff",
};

interface IHelmetProps {
  helmetIsFocused: boolean;
  setHelmetIsFocused: Dispatch<SetStateAction<boolean>>;
}

const renderHelmet = (props: IHelmetProps) => {
  const { helmetIsFocused, setHelmetIsFocused } = props;

  const helmetClickHandler = () => {
    setHelmetIsFocused(true);
  };

  return (
    <svg
      {...helmetSvgProps}
      style={{ float: "left" }}
      onClick={helmetClickHandler}
    >
      <filter id={helmetId}>
        <feOffset result='offOut' in='SourceGraphic' dx='20' dy='20'></feOffset>
        <feColorMatrix
          result='matrixOut'
          in='offOut'
          type='matrix'
          values='0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0'
        ></feColorMatrix>
        <feGaussianBlur
          result='blurOut'
          in='matrixOut'
          stdDeviation='10'
        ></feGaussianBlur>
        <feBlend in='SourceGraphic' in2='blurOut' mode='normal'></feBlend>
      </filter>
      <g
        transform='translate(-68.731309,-109.49979)'
        filter={`url(#${helmetId})`}
        id='id4c'
        style={blackStrokeStyle}
      >
        <path
          d='M 619.71948,439.66142 C 652.92354,-56.72263 -72.61383,35.14613 94.76331,534.61119 c 41.45722,7.11979 77.28144,7.43538 104.61518,5.4796 35.98058,-2.56644 57.22268,-9.05624 57.22268,-9.05624 84.86941,30.26924 239.58756,50.57764 401.04757,12.42173 96.10022,-36.83229 -37.92926,-103.79486 -37.92926,-103.79486 -78.70528,-51.17749 -287.97709,13.28334 -363.11831,91.37313'
          id={helmetId}
          style={{
            cursor: "pointer",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: helmetIsFocused ? "red" : "black",
            strokeWidth: "5.175",
          }}
        ></path>
      </g>
    </svg>
  );
};

// Helmet
const Helmet = (props: IHelmetProps) => {
  return renderHelmet({ ...props });
};

export default Helmet;
