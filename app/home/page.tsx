"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TaskModal from "./taskmodel";
import axios from "../axios";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  deadline: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponse {
  data: Task[];
  success: boolean;
  error: boolean;
  message: string;
}

interface FilteredTasks {
  todo: Task[];
  inProgress: Task[];
  underReview: Task[];
  completed: Task[];
}

const filterTasksByStatus = (tasks: Task[]): FilteredTasks => {
  const todo = tasks.filter((task) => task.status === "To-Do");
  const inProgress = tasks.filter((task) => task.status === "In Progress");
  const underReview = tasks.filter((task) => task.status === "Under Review");
  const completed = tasks.filter((task) => task.status === "Completed");

  return { todo, inProgress, underReview, completed };
};

const home = () => {
  const [filteredTasks, setFilteredTasks] = useState<FilteredTasks>({
    todo: [],
    inProgress: [],
    underReview: [],
    completed: [],
  });

  const [modal, showModal] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [updateSuccessfull, setUpdateSuccessfull] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<ApiResponse>("/task", {
          withCredentials: true, // Necessary to receive cookies
        });
        if (updateSuccessfull) {
          console.log("rerendered!");
        }

        if (response.data.success) {
          const filtered = filterTasksByStatus(response.data.data);
          setFilteredTasks(filtered);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [updateSuccessfull]);
  console.log(updateSuccessfull);

  const handleClick = () => {
    setCurrentCard({});
    showModal(true);
  };

  const handleClose = () => {
    console.log("coming here");
    showModal(false);
  };

  const editCard = (data) => {
    console.log(data);
    setCurrentCard(data);
    showModal(true);
  };

  const handleUpdate = () => {
    setUpdateSuccessfull((prev) => !prev);
  };

  console.log(filteredTasks);
  return (
    <>
      <div className="w-full h-full flex ">
        <div className="w-[285px] h-full py-6 px-4">
          <div className="w-full h-full ">
            <div className="h-[31px]  flex font-inter font-medium text-xl leading-6 text-textgrey mb-2 items-center">
              <Image
                src="user.svg"
                alt="profile pic"
                className="h-full w-[31px] mr-2"
                width={31}
                height={31}
              />
              <p>Joe Gardner</p>
            </div>

            <div className="h-[40px] flex justify-between">
              <div className="flex justify-between items-center w-[112px]">
                <Image src="icon1.svg" alt="icon" width={24} height={24} />
                <Image src="icon2.svg" alt="icon" width={24} height={24} />
                <Image src="icon3.svg" alt="icon" width={24} height={24} />
              </div>

              <button className="bg-whiteSmoke text-customGrey p-2 w-[69px] rounded-lg">
                Logout
              </button>
            </div>

            <Image
              src="menu2.svg"
              alt="menu"
              width={253}
              height={268}
              className="mt-4"
            />

            <Image
              src="createTask.svg"
              alt="menu"
              width={253}
              height={52}
              className="mt-4 cursor-pointer"
              onClick={handleClick}
            />
          </div>
        </div>

        <div className="pt-6 pr-8 pl-4 w-[100%]">
          <div className="h-full  w-[1107px]">
            <div className="ml-4 flex justify-between items-center">
              <div>
                <p className="font-barlow font-semibod text-5xl text-textgrey">
                  Good morning, <span>Joe!</span>
                </p>
              </div>

              <div className="py-[17px]">
                <Image src="help.svg" alt="help" width={157} height={24} />
              </div>
            </div>

            <Image
              src="features.svg"
              height={123}
              width={1107}
              alt="features"
            />

            <div className="my-4 flex">
              <Image
                src="search.svg"
                alt="search bar"
                height={40}
                width={196}
                className="mt-4"
              />

              <Image
                src="filterMenu.svg"
                alt="search bar"
                height={40}
                width={541}
                className="mt-4 ml-[218px]"
              />

              <Image
                src="createNew.svg"
                alt="search bar"
                height={40}
                width={136}
                className="mt-4 ml-4"
                onClick={handleClick}
              />
            </div>

            <div className="flex justify-between">
              <div className=" flex-1 mx-2">
                <div className="flex justify-between text-davysGrey my-4">
                  <p className="font-inter font-normal text-xl">To do</p>

                  <Image
                    src="3lines.svg"
                    height={24}
                    width={24}
                    alt="dropdown"
                  />
                </div>

                {filteredTasks.todo.map((task) => {
                  return (
                    <>
                      <div
                        onClick={(e) => editCard(task)}
                        className="h-auto px-[13px] py-[14px] border-[1px] border-grey87 rounded-lg bg-lightGrey mb-4"
                      >
                        <p className="text-base leading-5 font-inter font-medium text-customGrey mb-1">
                          {task.title}
                        </p>
                        <p className="text-platinumGrey font-inter font-normal text-sm leading-4 mb-[13px]">
                          {task.description}
                        </p>

                        {/* <Image src="low.svg" height={27} width={40} alt="low" /> */}
                        <Image
                          src="medium.svg"
                          height={27}
                          width={62}
                          alt="medium"
                        />
                        {/* <Image
                          src="urgent.svg"
                          height={27}
                          width={55}
                          alt="urgent"
                        /> */}

                        <div className="mt-[13px] flex items-center">
                          <Image
                            src="clock.svg"
                            width={24}
                            height={24}
                            alt="clock"
                          />
                          <p className="font-inter font-semibold text-base leading-4 text-customGrey ml-2">
                            {task.deadline.split("T")[0]}
                          </p>
                        </div>

                        <p className="mt-4 font-inter font-medium text-sm leading-4 text-platinumGrey">
                          1 hr ago
                        </p>
                      </div>
                    </>
                  );
                })}
                <div className="flex justify-between items-center add-new text-gainsboro mt-4 p-2 rounded-lg">
                  <p>Add new</p>
                  <Image src="plus.svg" height={24} width={24} alt="plus" />
                </div>
              </div>

              <div className=" flex-1 mx-2">
                <div className="flex justify-between text-davysGrey my-4">
                  <p className="font-inter font-normal text-xl">In progress</p>

                  <Image
                    src="3lines.svg"
                    height={24}
                    width={24}
                    alt="dropdown"
                  />
                </div>

                {filteredTasks.inProgress.map((task) => {
                  return (
                    <>
                      <div
                        onClick={(e) => editCard(task)}
                        className="h-auto px-[13px] py-[14px] border-[1px] border-grey87 rounded-lg bg-lightGrey mb-4"
                      >
                        <p className="text-base leading-5 font-inter font-medium text-customGrey mb-1">
                          {task.title}
                        </p>
                        <p className="text-platinumGrey font-inter font-normal text-sm leading-4 mb-[13px]">
                          {task.description}
                        </p>

                        {/* <Image src="low.svg" height={27} width={40} alt="low" /> */}
                        {/* <Image src="medium.svg" height={27} width={62} alt="medium" /> */}
                        <Image
                          src="urgent.svg"
                          height={27}
                          width={55}
                          alt="urgent"
                        />

                        <div className="mt-[13px] flex items-center">
                          <Image
                            src="clock.svg"
                            width={24}
                            height={24}
                            alt="clock"
                          />
                          <p className="font-inter font-semibold text-base leading-4 text-customGrey ml-2">
                            {task.deadline.split("T")[0]}
                          </p>
                        </div>

                        <p className="mt-4 font-inter font-medium text-sm leading-4 text-platinumGrey">
                          1 hr ago
                        </p>
                      </div>
                    </>
                  );
                })}
                <div className="flex justify-between items-center add-new text-gainsboro mt-4 p-2 rounded-lg">
                  <p>Add new</p>
                  <Image src="plus.svg" height={24} width={24} alt="plus" />
                </div>
              </div>

              <div className=" flex-1 mx-2">
                <div className="flex justify-between text-davysGrey my-4">
                  <p className="font-inter font-normal text-xl">Under review</p>

                  <Image
                    src="3lines.svg"
                    height={24}
                    width={24}
                    alt="dropdown"
                  />
                </div>

                {filteredTasks.underReview.map((task) => {
                  return (
                    <>
                      <div
                        onClick={(e) => editCard(task)}
                        className="h-auto px-[13px] py-[14px] border-[1px] border-grey87 rounded-lg bg-lightGrey mb-4"
                      >
                        <p className="text-base leading-5 font-inter font-medium text-customGrey mb-1">
                          {task.title}
                        </p>
                        <p className="text-platinumGrey font-inter font-normal text-sm leading-4 mb-[13px]">
                          {task.description}
                        </p>

                        {/* <Image src="low.svg" height={27} width={40} alt="low" /> */}
                        {/* <Image src="medium.svg" height={27} width={62} alt="medium" /> */}
                        <Image
                          src="urgent.svg"
                          height={27}
                          width={55}
                          alt="urgent"
                        />

                        <div className="mt-[13px] flex items-center">
                          <Image
                            src="clock.svg"
                            width={24}
                            height={24}
                            alt="clock"
                          />
                          <p className="font-inter font-semibold text-base leading-4 text-customGrey ml-2">
                            {task.deadline.split("T")[0]}
                          </p>
                        </div>

                        <p className="mt-4 font-inter font-medium text-sm leading-4 text-platinumGrey">
                          1 hr ago
                        </p>
                      </div>
                    </>
                  );
                })}
                <div className="flex justify-between items-center add-new text-gainsboro mt-4 p-2 rounded-lg">
                  <p>Add new</p>
                  <Image src="plus.svg" height={24} width={24} alt="plus" />
                </div>
              </div>

              <div className=" flex-1 mx-2">
                <div className="flex justify-between text-davysGrey my-4">
                  <p className="font-inter font-normal text-xl">Completed</p>

                  <Image
                    src="3lines.svg"
                    height={24}
                    width={24}
                    alt="dropdown"
                  />
                </div>

                {filteredTasks.completed.map((task) => {
                  return (
                    <>
                      <div
                        onClick={(e) => editCard(task)}
                        className="h-auto px-[13px] py-[14px] border-[1px] border-grey87 rounded-lg bg-lightGrey mb-4"
                      >
                        <p className="text-base leading-5 font-inter font-medium text-customGrey mb-1">
                          {task.title}
                        </p>
                        <p className="text-platinumGrey font-inter font-normal text-sm leading-4 mb-[13px]">
                          {task.description}
                        </p>

                        {/* <Image src="low.svg" height={27} width={40} alt="low" /> */}
                        {/* <Image src="medium.svg" height={27} width={62} alt="medium" /> */}
                        <Image
                          src="urgent.svg"
                          height={27}
                          width={55}
                          alt="urgent"
                        />

                        <div className="mt-[13px] flex items-center">
                          <Image
                            src="clock.svg"
                            width={24}
                            height={24}
                            alt="clock"
                          />
                          <p className="font-inter font-semibold text-base leading-4 text-customGrey ml-2">
                            {task.deadline.split("T")[0]}
                          </p>
                        </div>

                        <p className="mt-4 font-inter font-medium text-sm leading-4 text-platinumGrey">
                          1 hr ago
                        </p>
                      </div>
                    </>
                  );
                })}
                <div className="flex justify-between items-center add-new text-gainsboro mt-4 p-2 rounded-lg">
                  <p>Add new</p>
                  <Image src="plus.svg" height={24} width={24} alt="plus" />
                </div>
              </div>
            </div>
          </div>

          {/* Taskbar */}
        </div>
      </div>

      {modal && (
        <div className="fixed top-0 w-full flex justify-center h-full backdrop-blur-3xl  z-20 ">
          <TaskModal
            carddata={currentCard}
            handleUpdate={handleUpdate}
            handleClose={handleClose}
          />
        </div>
      )}
    </>
  );
};

export default home;
