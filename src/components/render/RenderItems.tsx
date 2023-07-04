import { Dispatch, SetStateAction } from "react";
import { RenderNameItem } from "./RenderNameItem";
import { Item } from "../../type";
import { checkKey } from "../../utils/checkArrayMapping";
import { RenderOtherItem } from "./RenderOtherItem";

interface PropsRenderItems {
  inputValue: string;
  isExpanded: boolean;
  isActiveBtnName: boolean;
  isActiveInput: boolean;
  setInputValue: Dispatch<SetStateAction<string>>;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  setIsActiveInput: Dispatch<SetStateAction<boolean>>;
  setIsActiveBtnName: Dispatch<SetStateAction<boolean>>;
  arrayMapping: boolean[];
  childLength: number;
  items: Item;
  lastNode: number;
  hendleAddInput: () => void;
  handleUpdete: ({
    value,
    key,
    id,
  }: {
    value: string;
    key: string;
    id: string;
  }) => void;
}

export const RenderItems: React.FC<PropsRenderItems> = ({
  arrayMapping,
  childLength,
  hendleAddInput,
  inputValue,
  isActiveBtnName,
  isActiveInput,
  isExpanded,
  items,
  lastNode,
  setInputValue,
  setIsActiveBtnName,
  setIsActiveInput,
  setIsExpanded,
  handleUpdete,
}) => {
  const keys = Object.keys(items);

  const render = () =>
    keys.map((key) => {
      if (checkKey(key)) {
        if (key === "name") {
          return (
            <RenderNameItem
              {...{
                handleUpdete,
                arrayMapping,
                childLength,
                hendleAddInput,
                inputValue,
                isActiveBtnName,
                isActiveInput,
                isExpanded,
                items,
                lastNode,
                setInputValue,
                setIsActiveBtnName,
                setIsActiveInput,
                setIsExpanded,
                id: items.id,
                keys: key,
                value: items[key],
              }}
            />
          );
        }

        return (
          <RenderOtherItem
            {...{
              handleUpdete,
              id: items.id,
              isActiveInput,
              keys: key,
              value: items[key],
            }}
          />
        );
      }
    });

  return <>{render()}</>;
};
