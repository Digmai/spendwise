import { handleUpdeteItems } from "../../../utils/handles";
import InputItem from "../optionsItem/InputItem";

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
    <InputItem
      handleUpdeteItems={handleUpdeteItems({
        id,
        handleUpdete,
      })}
      itemsKey={key}
      value={""}
    />
  );
};
