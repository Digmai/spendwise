import { isMobile } from "./isMobile";
import { onKeyDown } from "./onKeyDown";

export const handleDivClick =
  (setIsActiveBtnName: (value: React.SetStateAction<boolean>) => void) =>
  () => {
    if (isMobile()) {
      setIsActiveBtnName((e) => !e);
    }
  };

export const hendleEditeInput =
  (setIsActiveInput: (value: React.SetStateAction<boolean>) => void) => () => {
    setIsActiveInput((e) => !e);
  };

export const handleUpdeteItems =
  ({
    handleUpdete,
    id,
  }: {
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
  }) =>
  <T extends string>(key: T, value: T) =>
  (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown(event)) {
      handleUpdete({ id, key, value });
    }
  };

export const handleActive =
  ({
    setIsActiveBtnName,
  }: {
    setIsActiveBtnName: (value: React.SetStateAction<boolean>) => void;
  }) =>
  () => {
    setIsActiveBtnName((e) => !e);
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
