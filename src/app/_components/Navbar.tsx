import React from "react";
import { Icons } from "./Icons";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="hidden items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:flex">
        <Icons.search />
        <input
          type="text"
          placeholder="Search Dashboard"
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>
      <div className="flex w-full items-center justify-end gap-6">
        <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Icons.msg />
        </div>
        <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Icons.bell />
          <div className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">Jhon doe</span>
          <span className="text-right text-[10px] text-muted-foreground">
            Admin
          </span>
        </div>

        <Icons.user className="rounded-full bg-white" />
      </div>
    </div>
  );
};

export default NavBar;
