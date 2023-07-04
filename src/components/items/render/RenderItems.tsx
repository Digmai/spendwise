import { Dispatch, SetStateAction } from "react";
import { RenderNameItem } from "./RenderNameItem";
import { Item } from "../../../type";
import { checkKey } from "../../../utils/checkArrayMapping";
import { RenderOtherItem } from "./RenderOtherItem";

interface PropsRenderItems {
  isExpanded: boolean;
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
  isExpanded,
  items,
  lastNode,
  setIsExpanded,
  handleUpdete,
}) => {
  const keys = Object.keys(items);

  const render = () =>
    keys.map((key) => {
      if (checkKey(key)) {
        if (key === "name") {
          console.log(key, "<-----key", items[key]);

          return (
            <RenderNameItem
              {...{
                handleUpdete,
                arrayMapping,
                childLength,
                hendleAddInput,
                isExpanded,
                items,
                lastNode,
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
              hendleAddInput,
              pride: items.pride,
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
