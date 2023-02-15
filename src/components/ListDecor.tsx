import { SetStateAction } from "react";
import { IJacketProps, ISelectedJacket, patternTypes } from "../App";
import BasicJacket from "./BasicJacket";

interface IListDecorProps {
  setSelectedJacket: React.Dispatch<
    SetStateAction<ISelectedJacket | undefined>
  >;
  selectedJacket: ISelectedJacket | undefined;
}

const ListDecor = ({ selectedJacket, setSelectedJacket }: IListDecorProps) => {
  const initId = "decor-jacket-pattern";

  const onClickDecor = (props: IJacketProps) => {
    setSelectedJacket({
      id: props.currentId || "",
      pattern: props.patterns as any,
      type: props.type,
      decors: props.decors,
      currentDecor: props.currentDecor,
    });
  };

  return (
    <>
      {selectedJacket?.decors && selectedJacket?.decors.length > 0 && (
        <>
          <p className='patternTitle'>Välj jacka dekor för grundmönster</p>
          <BasicJacket
            key={0}
            isSelected={`${initId}-0` === selectedJacket?.id}
            id={`${initId}-0`}
            onClick={() =>
              onClickDecor({
                type: patternTypes.DECOR,
                currentId: `${initId}-0`,
                patterns: selectedJacket.pattern,
                decors: selectedJacket.decors,
              })
            }
            pattern={[]}
          />
        </>
      )}
      {selectedJacket?.decors &&
        selectedJacket?.decors.length > 0 &&
        selectedJacket?.decors.map((decor, index: number) => {
          const i = index + 1;
          return (
            <BasicJacket
              pattern={decor}
              id={`${index}-id`}
              isSelected={`${initId}-${i}` === selectedJacket?.id}
              onClick={() =>
                onClickDecor({
                  type: patternTypes.DECOR,
                  currentId: `${initId}-${i}`,
                  patterns: selectedJacket.pattern,
                  decors: selectedJacket.decors,
                  currentDecor: decor,
                })
              }
            />
          );
        })}
    </>
  );
};

export default ListDecor;
