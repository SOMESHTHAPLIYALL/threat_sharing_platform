import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import doc from "../utils/doc.png";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const HistoryPage = () => {
  const navigate = useNavigate();
  const [threats, setThreats] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user._id;

  const getThreats = async () => {
    try {
      const { data } = await axios.get(`/api/v1/threats/${id}`);
      if (data?.success) {
        setThreats(data?.threats);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const { data } = await axios.delete(`/api/v1/threats/del/${id}`);
      if (data?.success) {
        window.location.reload();
      } else {
        toast.error("Cannot delete threat");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThreats();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-blue-100 min-h-screen">
        <div className="content p-4">
          <div className="render-threats p-4 flex flex-wrap gap-10 ">
            {threats.map((item) => {
              return (
                <>
                  <div className=" bg-white flex flex-col gap-5 shadow-xl p-4 rounded-xl w-[450px] h-[600px] mt-10 overflow-auto">
                    <div className="flex justify-center items-center">
                      <a
                        href={item.file}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={doc} className="h-32 w-32" />
                      </a>
                    </div>

                    <div className="flex flex-col">
                      <h1 className="font-bold text-lg">Threat Name:</h1>
                      <p className="font-semibold text-base">{item.name}</p>
                    </div>
                    {item.description ? (
                      <div className="flex flex-col">
                        <h1 className="font-bold text-lg">Description:</h1>
                        <p className="font-semibold text-base">
                          {item.description}
                        </p>
                      </div>
                    ) : null}

                    {item.solution ? (
                      <div className="flex flex-col">
                        <h1 className="font-bold text-lg">Solution:</h1>
                        <p className="font-semibold text-base">
                          {item.solution}
                        </p>
                      </div>
                    ) : null}

                    <div className="flex justify-start items-center gap-2">
                      <h1 className="font-bold text-lg">Created By:</h1>
                      <p className="font-semibold text-base">{item.userName}</p>
                    </div>

                    <div className="flex justify-evenly items-center gap-20">
                      <button
                        className="font-bold bg-green-400 p-4 rounded-xl hover:bg-green-500 cursor-pointer flex justify-center items-center gap-1 "
                        onClick={() => navigate(`/update/${item._id}`)}
                      >
                        <RxUpdate size={20} />
                        Update
                      </button>
                      <button
                        className="font-bold bg-red-400 p-4 rounded-xl hover:bg-red-500 cursor-pointer flex justify-center items-center gap-1"
                        onClick={() => handleDelete(item._id)}
                      >
                        <MdDelete size={20} />
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Toaster position="top-center" reverseOrder="false" />
      </div>
    </>
  );
};

export default HistoryPage;
