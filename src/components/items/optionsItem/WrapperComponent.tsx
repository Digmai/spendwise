import React, { memo } from "react";

interface PropsWrapperComponent {
  children: JSX.Element;
}

const WrapperComponent: React.FC<PropsWrapperComponent> = memo(
  ({ children }) => {
    return (
      <div className="relative h-full flex  items-center">
        <div className="relative w-full  h-5/6 flex justify-center items-center">
          {children}
        </div>
      </div>
    );
  }
);
export default WrapperComponent;
