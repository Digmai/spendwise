import { Dispatch, SetStateAction } from "react";
import { RenderNameItem } from "./RenderNameItem";
import { Item } from "../../../type";
import { checkKey } from "../../../utils/checkArrayMapping";
import { RenderOtherItem } from "./RenderOtherItem";

interface PropsRenderItems {
  inputValue: string;
  isExpanded: boolean;
  setInputValue: Dispatch<SetStateAction<string>>;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
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
  isExpanded,
  items,
  lastNode,
  setInputValue,
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
                isExpanded,
                items,
                lastNode,
                setInputValue,
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
              keys: key,
              value: items[key],
            }}
          />
        );
      }
    });

  return <>{render()}</>;
};
