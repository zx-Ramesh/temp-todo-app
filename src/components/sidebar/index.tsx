import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SideBar = () => {
  const router = useRouter();

  const currentParam = useSearchParams().get("current");

  const list = ["All", "Active", "Completed"];

  const handleClick = (value: string, i: any) => {
    if (i == 0) {
      router.push("/");
    } else {
      router.push(`?current=${value}`);
    }
  };

  return (
    <div className="h-full w-[30%] px-9 bg-white rounded-l-lg border-r-2 border-gray">
      <ul className="h-[70%] w-full py-24 ">
        {list.map((item, i) => (
          <li
            onClick={() => {
              handleClick(item, i);
            }}
            key={i}
            className={`p-1 cursor-pointer hover:text-pink text-xl font-normal ${
              currentParam === item
                ? "text-pink"
                :
                  currentParam === "All" ||
                  item === "All" && currentParam === null
                ? "text-pink"
                : "text-black"
            } `}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
