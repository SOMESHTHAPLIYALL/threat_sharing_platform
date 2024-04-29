import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({
  isVisible,
  name,
  description,
  solution,
  userName,
  onClose,
}) => {
  const [name1, setName1] = useState(name);
  const [description1, setDescription1] = useState(description);
  const [solution1, setSolution1] = useState(solution);
  const [showName, setShowName] = useState("true");

  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white p-2 rounded-xl">
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
                // onChange={handleFileChange}
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
                value={name1}
                onChange={(e) => setName1(e.target.value)}
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
                value={description1}
                onChange={(e) => setDescription1(e.target.value)}
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
                value={solution1}
                onChange={(e) => setSolution1(e.target.value)}
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
                // onClick={handleSubmit}
              >
                UPDATE
              </button>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder="false" />
      </div>
    </>
  );
};

export default Modal;
