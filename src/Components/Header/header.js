import React from "react";

const Header = () => {
  return (
    <div class="sticky top-0 border bg-white h-16 w-full p-2 drop-shadow-md filter">
      <div className="flex justify-end">
        <button className="p-2 border bg-blue-400 text-white rounded-lg drop-shadow-sm filter hover:bg-blue-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
