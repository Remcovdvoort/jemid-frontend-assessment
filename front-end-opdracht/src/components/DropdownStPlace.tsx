import React, { useEffect, useState } from "react";

type DropDownProps = {
  stPlaces: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  standingSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  stPlaces,
  standingSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (standing: string): void => {
    standingSelection(standing);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {stPlaces.map((standing: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(standing);
              }}
            >
              {standing}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
