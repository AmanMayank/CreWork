import Image from "next/image";
import { inherits } from "util";

const home = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[285px] h-full   py-6 px-4">
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
        <div className="h-full border-2 w-[100%]">
          <div className="ml-4 flex justify-between items-center">
            <div>
              <p className="font-barlow font-semibold text-5xl text-textgrey">
                Good morning, <span>Joe!</span>
              </p>
            </div>

            <div className="py-[17px]">
              <Image src="help.svg" alt="help" width={157} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
