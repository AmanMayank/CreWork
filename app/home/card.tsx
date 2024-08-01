import Image from "next/image";

const card = () => {
  return;
  <>
    <div className="flex justify-between text-davysGrey my-4">
      <p className="font-inter font-normal text-xl">Completed</p>
      <Image src="3lines.svg" height={24} width={24} alt="dropdown" />
    </div>

    <div className="h-auto px-[13px] py-[14px] border-[1px] border-grey87 rounded-lg bg-lightGrey">
      <p className="text-base leading-5 font-inter font-medium text-customGrey mb-1">
        {task.title}
      </p>
      <p className="text-platinumGrey font-inter font-normal text-sm leading-4 mb-[13px]">
        {task.description}
      </p>

      {/* <Image src="low.svg" height={27} width={40} alt="low" /> */}
      {/* <Image src="medium.svg" height={27} width={62} alt="medium" /> */}
      <Image src="urgent.svg" height={27} width={55} alt="urgent" />

      <div className="mt-[13px] flex items-center">
        <Image src="clock.svg" width={24} height={24} alt="clock" />
        <p className="font-inter font-semibold text-base leading-4 text-customGrey ml-2">
          {task.deadline.split("T")[0]}
        </p>
      </div>

      <p className="mt-4 font-inter font-medium text-sm leading-4 text-platinumGrey">
        1 hr ago
      </p>
    </div>

    <div className="flex justify-between items-center add-new text-gainsboro mt-4 p-2 rounded-lg">
      <p>Add new</p>
      <Image src="plus.svg" height={24} width={24} alt="plus" />
    </div>
  </>;
};
