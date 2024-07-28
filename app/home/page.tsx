import Image from "next/image";
import { inherits } from "util";

const home = () => {
  return (
    <div className="w-full h-full flex">
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
            src="menu.svg"
            alt="menu"
            width={253}
            height={268}
            className="mt-4"
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

          <Image src="features.svg" height={123} width={1107} alt="features" />

          <Image
            src="search.svg"
            alt="search bar"
            height={40}
            width={1107}
            className="mt-4"
          />

          <div className="flex justify-between">
            <div className=" flex-1 mx-2">
              <div className="flex justify-between text-davysGrey my-4">
                <p className="font-inter font-normal text-xl">To do</p>
                <Image src="3lines.svg" height={24} width={24} alt="dropdown" />
              </div>

              <div className="h-auto px-[13px] py-[14px] border-[1px] border-grey87 rounded-lg bg-lightGrey">
                <p className="text-base leading-5 font-inter font-medium text-customGrey mb-1">
                  Implement User Authentication
                </p>
                <p className="text-platinumGrey font-inter font-normal text-sm leading-4 mb-[13px]">
                  Develop and integrate user authentication using email and
                  password.
                </p>

                {/* <Image src="low.svg" height={27} width={40} alt="low" /> */}
                {/* <Image src="medium.svg" height={27} width={62} alt="medium" /> */}
                <Image src="urgent.svg" height={27} width={55} alt="urgent" />

                <div className="mt-[13px] flex items-center">
                  <Image src="clock.svg" width={24} height={24} alt="clock" />
                  <p className="font-inter font-semibold text-base leading-4 text-customGrey ml-2">
                    2024-08-15
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
            </div>
            <div className="border-2 flex-1 mx-2">1</div>
            <div className="border-2 flex-1 mx-2 ">1</div>
            <div className="border-2 flex-1 mx-2 ">1</div>
          </div>
        </div>

        {/* Taskbar */}
      </div>
    </div>
  );
};

export default home;
