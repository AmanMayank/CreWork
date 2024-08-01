"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(" ");
  const router = useRouter();

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
        "http://localhost:8080/api/login",
        data,
        {
          withCredentials: true, // Necessary to receive cookies
        }
      );

      if (response.data.error) {
        setError(response.data.message);
      }

      if (response.data.success) {
        router.push("/home");
      }

      console.log(response);
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
            Login
          </button>
        </form>

        <p className="mt-8 font-inter text-2xl text-customGrey">
          Don’t have an account? Create a{" "}
          <Link href="/signup">
            <span className="text-customBlue">new account</span>
          </Link>
        </p>

        <p className="mt-4 font-inter text-xs text-red-500">{error}</p>
      </div>
    </div>
  );
};

export default login;
