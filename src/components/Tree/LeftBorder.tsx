interface PropsBar {
  left: number;
  height: string;
  classNames: string;
}

export const LeftBorder: React.FC<PropsBar> = ({
  classNames,
  height,
  left,
}) => {
  return (
    <div
      style={{ left: `-${left}px`, width: left + "px" }}
      className={`absolute  h-${height} ${classNames}`}
    ></div>
  );
};
