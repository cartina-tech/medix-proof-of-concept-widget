import { IJacketProps, ISelectedJacket, patternTypes } from "../App";
import { jacketBasicPatterns } from "./consts";

import BasicJacket from "./BasicJacket";
import { SetStateAction } from "react";

interface IListBasicProps {
  setSelectedJacket: React.Dispatch<
    SetStateAction<ISelectedJacket | undefined>
  >;
  selectedJacket: ISelectedJacket | undefined;
}

const ListBasic = ({ setSelectedJacket, selectedJacket }: IListBasicProps) => {
  const initId = "basic-jacket-pattern";

  const onClickBasic = (props: IJacketProps) => {
    setSelectedJacket({
      id: props.currentId || "",
      pattern: props.patterns as any,
      type: props.type,
      decors: props.decors,
    });
  };

  return (
    <>
      <BasicJacket
        key={0}
        isSelected={`${initId}-0` === selectedJacket?.id}
        id={`${initId}-0`}
        onClick={() =>
          onClickBasic({
            currentId: `${initId}-0`,
            patterns: [],
          })
        }
        pattern={[]}
      />
      {jacketBasicPatterns.map((basicJacket, index: number) => {
        const i = index + 1;
        return (
          <BasicJacket
            key={index + 1}
            isSelected={`${initId}-${i}` === selectedJacket?.id}
            id={`${initId}-${i}`}
            onClick={() =>
              onClickBasic({
                type: patternTypes.BASIC,
                currentId: `${initId}-${i}`,
                patterns: basicJacket.paths,
                decors: basicJacket.decors,
              })
            }
            pattern={basicJacket.paths}
          />
        );
      })}
    </>
  );
};

export default ListBasic;
