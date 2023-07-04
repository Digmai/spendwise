import { isMobile } from "./isMobile";
import { onKeyDown } from "./onKeyDown";

export const handleDivClick =
  (setIsActiveBtnName: (value: React.SetStateAction<boolean>) => void) =>
  () => {
    if (isMobile()) {
      setIsActiveBtnName((e) => !e);
    }
  };

export const handleUpdateItems =
  (handleUpdate: () => void, fn: () => void) =>
  (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown(event)) {
      fn();
      handleUpdate();
    }
  };

export const handleToggle =
  ({
    isExpanded,
    setIsExpanded,
  }: {
    isExpanded: boolean;
    setIsExpanded: (value: React.SetStateAction<boolean>) => void;
  }) =>
  () => {
    setIsExpanded(!isExpanded);
  };

export const hendleInput =
  ({
    setInputValue,
  }: {
    setInputValue: (value: React.SetStateAction<string>) => void;
  }) =>
  (value: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value.target.value);
  };
