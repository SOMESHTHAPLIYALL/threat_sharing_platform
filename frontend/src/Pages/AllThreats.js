import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import doc from "../utils/doc.png";

const AllThreats = () => {
  const [threats, setThreats] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getThreats = async () => {
    try {
      const { data } = await axios.get("/api/v1/threats/get-threats");
      if (data?.success) {
        setThreats(data?.threats);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThreats();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredThreats = threats.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="bg-blue-100 min-h-screen">
        <div className="p-4 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search threats..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 mt-5"
          />
        </div>
        <div className="render-threats p-4 flex flex-wrap gap-10 ">
          {filteredThreats.map((item, index) => (
            <div
              key={index}
              className=" bg-white flex flex-col gap-5 shadow-xl p-4 rounded-xl w-[450px] h-[600px] mt-10 overflow-auto"
            >
              <div className="flex justify-center items-center">
                <a href={item.file} target="_blank" rel="noopener noreferrer">
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
                  <p className="font-semibold text-base">{item.description}</p>
                </div>
              ) : null}

              {item.solution ? (
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">Solution:</h1>
                  <p className="font-semibold text-base">{item.solution}</p>
                </div>
              ) : null}

              <div className="flex justify-start items-center gap-2">
                <h1 className="font-bold text-lg">Created By:</h1>
                <p className="font-semibold text-base">
                  {item.showName == "true" ? item.userName : "Anonymous"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllThreats;
