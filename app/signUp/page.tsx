"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const signup = () => {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(" ");

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
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/signup",
        data
      );

      if (response.data.error) {
        setError(response.data.message);
      }

      if (response.data.success) {
        router.push("/login");
      }

      console.log(error);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center page-gradient">
      <div className="bg-gradient w-[648px] border-[1px] rounded-2xl h-auto flex-row items-center justify-center text-center p-[60px]">
        <p className="font-barlow font-semibold text-5xl loading-[58px] mb-[32px] text-customBlack">
          Welcome to <span className="text-customPurple">Workflo</span>!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="w-[528px] mx-auto block  mb-[24px] px-3 py-4 rounded-lg font-inter text-customGrey bg-bgInput"
            type="text"
            onChange={handleOnChange}
            placeholder="Joe Gardner"
            name="username"
            value={data.username}
          ></input>
          <input
            className="w-[528px] mx-auto block  mb-[24px] px-3 py-4 rounded-lg font-inter text-customGrey bg-bgInput"
            type="email"
            placeholder="jgardner@gmail.com"
            onChange={handleOnChange}
            name="email"
            value={data.email}
          ></input>
          <input
            className="w-[528px] mx-auto block  mb-[22px] px-3 py-4 rounded-lg text-customGrey bg-bgInput"
            type="password"
            placeholder="*************"
            onChange={handleOnChange}
            name="password"
            value={data.password}
          ></input>

          <button className="font-inter w-[528px] border-2 py-[14px] text-2xl leading-6 btn-gradient rounded-lg">
            Sign up
          </button>
        </form>

        <p className="mt-8 font-inter text-2xl text-customGrey">
          Already have an account?
          <Link href="/login">
            <span className="text-customBlue"> Log in.</span>
          </Link>
        </p>

        <p className="mt-4 font-inter text-xs text-red-500">{error}</p>
      </div>
    </div>
  );
};

export default signup;
