import { handleUpdeteItems } from "../../utils/handles";
import NewItem from "../items/NewItem";

interface PropsRenderInput {
  key: string;
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

export const RenderInput: React.FC<PropsRenderInput> = ({
  handleUpdete,
  id,
  key,
}) => {
  return (
    <NewItem
      handleUpdeteItems={handleUpdeteItems({
        id,
        handleUpdete,
      })}
      itemsKey={key}
    />
  );
};
