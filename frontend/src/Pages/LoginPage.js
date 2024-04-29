import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Enter all fields");
      return;
    }
    try {
      const { data } = await axios.post("/api/v1/user/login", {
        email: email,
        password: password,
      });
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("User Login Successfully");
        navigate("/about");
      }
    } catch (error) {
      console.log(error);
      toast.error("Email or password is incorrect");
    }
  };
  return (
    <>
      <div className="bg-black h-screen w-screen text-black">
        <div className="signUp p-2 flex justify-center items-center h-full">
          <div className="signup box">
            <div className="box bg-white p-4 w-96 rounded-xl shadow-lg flex flex-col justify-center items-center ">
              <div className="heading flex justify-center items-center w-full mt-2">
                <h1 className="font-bold text-4xl">LOGIN</h1>
              </div>

              <div className="username flex bg-slate-300 rounded-lg mt-10 w-80 p-2 justify-center items-center ">
                <input
                  className="bg-slate-300 p-1 rounded-lg w-80 placeholder-black font-semibold outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="username flex bg-slate-300 rounded-lg mt-10 w-80 p-2 justify-center items-center ">
                <input
                  className="bg-slate-300 p-1 rounded-lg w-80 placeholder-black font-semibold outline-none"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button mt-8 flex justify-center items-center">
                <button
                  className="bg-violet-400 cursor-pointer hover:bg-violet-500 font-bold p-2 w-[300px] rounded-xl"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="font-bold mt-8 flex justify-center items-center">
                <h1>
                  Don't have an account?{" "}
                  <Link className="underline underline-offset-2" to="/signUp">
                    Register
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-center" />
      </div>
    </>
  );
};

export default LoginPage;
