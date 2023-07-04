import { handleUpdeteItems } from "../../utils/handles";
import { OtherItem } from "../items/OtherItem";

interface PropsRenderOtherItem {
  isActiveInput: boolean;
  value: string;
  keys: string;
  id: string;
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

export const RenderOtherItem: React.FC<PropsRenderOtherItem> = ({
  id,
  keys,
  value,
  handleUpdete,
  isActiveInput,
}) => {
  return (
    <OtherItem
      handleUpdeteItems={handleUpdeteItems({
        id,
        handleUpdete,
      })}
      isActiveInput={isActiveInput}
      value={value}
      itemsKey={keys}
    />
  );
};
