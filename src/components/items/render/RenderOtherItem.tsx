import { handleUpdeteItems } from "../../../utils/handles";
import { OtherItem } from "../optionsItem/OtherItem";

interface PropsRenderOtherItem {
  pride: number;
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

  hendleAddInput: () => void;
}

export const RenderOtherItem: React.FC<PropsRenderOtherItem> = ({
  id,
  keys,
  pride,
  value,
  handleUpdete,
  hendleAddInput,
}) => {
  return (
    <OtherItem
      hendleAddInput={hendleAddInput}
      pride={pride}
      handleUpdeteItems={handleUpdeteItems({
        id,
        handleUpdete,
      })}
      value={value}
      itemsKey={keys}
    />
  );
};
