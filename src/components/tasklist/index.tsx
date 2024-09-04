import { useAppDispatch, useAppSelector } from "@/redux/store";
import { deleteTask, setCompleted } from "@/redux/taskSlice";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const TaskList = () => {
  const dispatch = useAppDispatch();
  const task = useAppSelector((state) => state.task);
  // setAllTask(task)
  // console.log(task);

  const params = useSearchParams();
  const currentView = params.get("current");
  // if (currentView === "Active") {
  //  setActiveView()
  // }

  console.log(currentView, "currentview");

  const handleComplete = (i: number) => {
    const selectedTask = task[i].text;
    console.log(selectedTask);
    dispatch(setCompleted(i));

    console.log(task);
  };
  const handleDelete = (i: number) => {
    // console.log(task);

    const deletedTask = task[i];
    // console.log(deletedTask);
    dispatch(deleteTask(i));
  };

  return (
    <ul className="my-2">
      {task
        .filter((filter) => {
          if (currentView === "all" || currentView === null) {
            return filter;
          }
          if (currentView === "Active") {
            return !filter.isCompleted;
          }
          if (currentView === "Completed") {
            return filter.isCompleted;
          }
        })
        .map((t, i) => (
          <li
            key={i}
            className="flex justify-between my-2 group cursor-pointer"
          >
            <span className="flex items-center">
              <input
                className="mr-5 cursor-pointer  "
                type="checkbox"
                onClick={() => handleComplete(i)}
                checked={t.isCompleted}
              />{" "}
              <span
                className={`text-lg font-normal   ${
                  t.isCompleted == true
                    ? "line-through text-gray"
                    : "no-underline"
                }`}
              >
                {t.text}
              </span>
            </span>
            <span
              onClick={() => {
                handleDelete(i);
              }}
              className="hidden group-hover:block group-hover:text-pink"
            >
              <RiDeleteBin5Line size={22} />
            </span>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
