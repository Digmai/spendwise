import { handleUpdeteItems } from "../../../utils/handles";
import { OtherItem } from "../optionsItem/OtherItem";

interface PropsRenderOtherItem {
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
}) => {
  return (
    <OtherItem
      handleUpdeteItems={handleUpdeteItems({
        id,
        handleUpdete,
      })}
      value={value}
      itemsKey={keys}
    />
  );
};
