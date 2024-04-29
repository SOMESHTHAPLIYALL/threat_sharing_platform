import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [solution, setSolution] = useState("");
  const [showName, setShowName] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const id = useParams().id;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const getThreat = async () => {
    try {
      const { data } = await axios.get(`/api/v1/threats/singlethreat/${id}`);
      if (data?.success) {
        setName(data?.threat?.name);
        setDescription(data?.threat?.description);
        setSolution(data?.threat?.solution);
        setShowName(data?.threat?.showName);
        setFile(data?.threat?.file);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!file) {
        throw new Error("Please select a file");
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "s4ayvdkr"); // Replace with your Cloudinary upload preset
      formData.append("resource_type", "auto"); // Auto-detect file type

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/didyxuyd5/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      const fileUrl = data.secure_url;

      try {
        const { data } = await axios.put(`/api/v1/threats/update/${id}`, {
          name: name,
          description: description,
          solution: solution,
          file: fileUrl,
          userid: user?._id,
          showName: showName,
          userName: user?.username,
        });
        if (data?.success) {
          toast.success("Threat updated succesfully");
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
    setFile(null);
    setName("");
    setDescription("");
    setSolution("");
    setShowName("");
  };

  useEffect(() => {
    getThreat();
  }, [id]);

  return (
    <>
      <Header />
      <div className="bg-blue-100 min-h-screen">
        <div className="content p-4 flex justify-center items-center">
          <div className="box bg-white w-[800px] p-4 mt-10 rounded-xl">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="file"
              >
                Select File
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="file"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Threat Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="solution"
              >
                Solution
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="solution"
                placeholder="Solution"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
              ></textarea>
            </div>
            <div className="button flex justify-center items-center gap-10">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[150px]"
                onClick={() => {
                  toast.success(
                    "Your Name will be public to other users as well."
                  );
                  setShowName("true");
                }}
              >
                Public
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-[150px]"
                onClick={() => {
                  toast.success(
                    "Your Name will not be displayed to other users."
                  );
                  setShowName("false");
                }}
              >
                Anonymous
              </button>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[400px]"
                onClick={handleSubmit}
              >
                UPDATE
              </button>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </>
  );
};

export default UpdatePage;
