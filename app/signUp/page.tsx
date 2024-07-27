const signUp = () => {
  return (
    <div className="w-full h-full flex justify-center items-center page-gradient">
      <div className="bg-gradient w-[648px] border-[1px] rounded-2xl h-auto flex-row items-center justify-center text-center p-[60px]">
        <p className="font-barlow font-semibold text-5xl loading-[58px] mb-[32px] text-customBlack">
          Welcome to <span className="text-customPurple">Workflo</span>!
        </p>
        <form>
          <input
            className="w-[528px] mx-auto block  mb-[24px] px-3 py-4 rounded-lg font-inter text-customGrey bg-bgInput"
            type="text"
            placeholder="Joe Gardner"
          ></input>
          <input
            className="w-[528px] mx-auto block  mb-[24px] px-3 py-4 rounded-lg font-inter text-customGrey bg-bgInput"
            type="email"
            placeholder="jgardner@gmail.com"
          ></input>
          <input
            className="w-[528px] mx-auto block  mb-[22px] px-3 py-4 rounded-lg text-customGrey bg-bgInput"
            type="password"
            placeholder="*************"
          ></input>

          <button className="font-inter w-[528px] border-2 py-[14px] text-2xl leading-6 btn-gradient rounded-lg">
            Sign up
          </button>
        </form>

        <p className="mt-8 font-inter text-2xl text-customGrey">
          Already have an account?
          <span className="text-customBlue"> Log in.</span>
        </p>
      </div>
    </div>
  );
};

export default signUp;