import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "../axios";

interface TaskModalProps {
  handleClose: () => void;
  carddata: () => object;
  handleUpdate: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  handleClose,
  carddata,
  handleUpdate,
}) => {
  const [data, setData] = useState({
    title: "",
    status: "",
    priority: "",
    deadline: "",
    description: "",
  });

  const [error, setError] = useState(" ");
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // console.log("===============", ((Boolean)carddata));
    if (carddata) {
      setData(carddata);
      if (carddata?.status) {
        // console.log("==========================================");
        setEditMode(true);
      }
    }
  }, [carddata]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();

    try {
      const response = editMode
        ? await axios.put(`/task/${carddata?._id}`, data)
        : await axios.post("/task/", data);

      if (response.data.error) {
        setError("Please try again!!");
      }

      if (response.data.success) {
        handleUpdate();
        handleClose();
      }

      console.log(response);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setError("");
    if (carddata?._id) {
      try {
        const response = await axios.delete(`/task/${carddata?._id}`);

        if (response.data.error) {
          setError("Please try again!!");
        }

        if (response.data.success) {
          handleUpdate();
          handleClose();
        }
      } catch (err) {
        console.log("Something went wrong", err);
      }
    }
  };

  console.log("this is data", data.deadline);

  return (
    <div className="w-[670px] bg-lightGrey">
      <div className="mt-[16px] w-full">
        <div className="mx-[24px] mb-[84px]">
          <div className="w-full h-[40px] flex justify-between">
            <div className="w-16 h-6 flex my-[8px] justify-between">
              <div className="cursor-pointer" onClick={handleClose}>
                <Image src="close.svg" height={24} width={24} alt="close" />
              </div>
              <Image
                src="expand.svg"
                height={24}
                width={24}
                alt="expand
              "
              />
            </div>
            <div className="w-[230px] h-[40px] flex justify-between">
              <Image src="share-modal.svg" height={40} width={98} alt="share" />
              <Image
                src="favourite-modal.svg"
                height={40}
                width={116}
                alt="favourite"
              />
            </div>
          </div>
          <div className="w-full mt-[27px]">
            <form className="w-full">
              <input
                className="h-[58px] font-barlow font-semibold text-3xl/[57.6px] text-[#CCCCCC] px-2 bg-lightGrey active:bg-white"
                type="text"
                placeholder="Title"
                name="title"
                value={data.title}
                onChange={handleOnChange}
              />

              <div className="w-full mt-8 ">
                <div className="w-full flex items-center">
                  <div className="w-[136px]">
                    <div className="w-[97px] flex items-center justify-between">
                      <Image
                        src="status-modal.svg"
                        height={24}
                        width={24}
                        alt="status"
                      />
                      <p className="font-inter my-[2.5px] text-base/[19px] font-normal text-[#666666]">
                        Status
                      </p>
                    </div>
                  </div>
                  <div className="ml-[60px]">
                    {/* <p className="font-inter text-base font-normal text-[#000000]">
                      To do
                    </p> */}
                    <select
                      id="dropdown"
                      name="status"
                      className="my-[2.5px] block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-lightGrey"
                      value={data?.status}
                      onChange={handleOnChange}
                    >
                      <option className="font-inter" value="" disabled>
                        Select an option
                      </option>
                      <option className="font-inter" value="To-Do">
                        To-Do
                      </option>
                      <option className="font-inter" value="In Progress">
                        In Progress
                      </option>
                      <option className="font-inter" value="Under Review">
                        Under Review
                      </option>
                      <option className="font-inter" value="Completed">
                        Completed
                      </option>
                    </select>
                  </div>
                </div>
                <div className="w-full flex mt-4 items-center">
                  <div className="w-[136px]">
                    <div className="w-[100px] flex items-center justify-between">
                      <Image
                        src="priority-modal.svg"
                        height={24}
                        width={24}
                        alt="priority"
                      />
                      <p className="my-[2.5px] font-inter font-normal text-base/[19px] text-[#666666]">
                        Priority
                      </p>
                    </div>
                  </div>
                  <div className="ml-[60px]">
                    <select
                      id="dropdown"
                      name="priority"
                      className="my-[2.5px] block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-lightGrey"
                      value={data?.priority}
                      onChange={handleOnChange}
                    >
                      <option className="font-inter" value="" disabled>
                        Select an option
                      </option>
                      <option className="font-inter" value="Low">
                        Low
                      </option>
                      <option className="font-inter" value="Medium">
                        Medium
                      </option>
                      <option className="font-inter" value="Urgent">
                        Urgent
                      </option>
                    </select>
                  </div>
                </div>
                <div className="w-full flex mt-4 items-center">
                  <div className="w-[136px]">
                    <div className="w-[136px] flex items-center ">
                      <Image
                        src="deadline-modal.svg"
                        height={24}
                        width={24}
                        alt="deadline"
                      />
                      <p className="ml-[25px] my-[2.5px] font-inter font-normal text-base/[19px] text-[#666666]">
                        Deadline
                      </p>
                    </div>
                  </div>
                  <div className="ml-[60px]">
                    <input
                      name="deadline"
                      type="date"
                      placeholder="Not selected"
                      className="font-inter text-base font-normal placeholder:text-[#C1BDBD] pl-3 pr-4 py-2 bg-lightGrey active:bg-white"
                      onChange={handleOnChange}
                      value={data?.deadline?.split("T")[0]}
                    />
                  </div>
                </div>
                <div className="w-full flex mt-8">
                  <div className="w-[136px]">
                    <div className="w-[136px] flex items-center justify-between">
                      <Image
                        src="description-modal.svg"
                        height={24}
                        width={24}
                        alt="description"
                      />
                      <p className="w-[87px] my-[2.5px] font-inter font-normal text-base/[19px] text-[#666666]">
                        Description
                      </p>
                    </div>
                  </div>
                  <div className="ml-[60px]">
                    <textarea
                      name="description"
                      rows={2}
                      placeholder="Please add a description"
                      className="font-inter text-base font-normal placeholder:text-[#C1BDBD] pl-3 pr-4 py-2 bg-lightGrey active:bg-white"
                      onChange={handleOnChange}
                      value={data.description}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-[38px] w-[208px] flex items-center justify-between">
              <Image src="plus-modal.svg" height={24} width={24} alt="plus" />
              <p className="w-[161px]  my-[2.5px] font-inter font-normal text-base/[19px] text-[#666666]">
                Add custom property
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="mt-6 w-[200px] px-4 py-2 hover:bg-customPurple hover:text-white hover:shadow-lg rounded-md border-2"
            >
              Submit Task
            </button>

            {carddata?._id && (
              <button
                onClick={handleDelete}
                className="mt-6 w-[200px] px-4 py-2 hover:bg-red-500 hover:text-white hover:shadow-lg rounded-md border-2"
              >
                Delete Task
              </button>
            )}
          </div>
        </div>
        <div className="mx-[24px] border border-[#DEDEDE]" />
        <p className="mx-[24px] mt-[32px] font-inter font-normal text-base/[19.36px] text-[#C0BDBD]">
          Start writing, or drag your own files here.
        </p>
      </div>
    </div>
  );
};

export default TaskModal;
