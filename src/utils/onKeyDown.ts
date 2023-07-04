export const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
  if (event.key === "Enter") {
    return true;
  }
  return false;
};
