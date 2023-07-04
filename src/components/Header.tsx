import React from "react";

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full min-h-min p-4 text-center text-yellow-50 bg-gray-700 border-b border-yellow-50/50">
      {title}
    </div>
  );
};

export default Header;
