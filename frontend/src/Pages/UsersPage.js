import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { CiUser } from "react-icons/ci";

const UsersPage = () => {
  const [users, setAllusers] = useState([]);
  const [totalusers, setTotalusers] = useState(0);
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/user/allusers");
      if (data?.success) {
        setAllusers(data?.users);
        setTotalusers(data?.UserCount);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="usersData min-h-screen">
        <div className="content p-4">
          <div className="flex flex-wrap gap-5 justify-center items-center mt-10">
            {users &&
              users.map((user) => {
                return (
                  <>
                    <div className="bg-slate-300 p-5 rounded-xl shadow-2xl w-64 overflow-auto h-64 font-bold text-lg ">
                      <div className="flex flex-col justify-center items-center gap-5">
                        <CiUser size={30} />
                        <h1>Name: {user.username}</h1>
                        <h1>Email: {user.email}</h1>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
