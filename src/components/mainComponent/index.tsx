"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import TaskList from "../tasklist";
import { setTask } from "@/redux/taskSlice";

export const MainComponent = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");

  const handleSubmit = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(input);
    dispatch(setTask({
      text : input,
      isCompleted : false
    }));
    setInput("");
  };

  return (
    <div className="p-6  h-full w-full rounded-r-lg">
      <h2 className="p-1 text-3xl font-bold">All Tasks</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          className="px-3 py-2 w-full my-3 bg-whitesmoke rounded-lg text-lg font-normal"
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <TaskList />
    </div>
  );
};
  