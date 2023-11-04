import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowUp,
  faClose,
  faEnvelope,
  faLocationPin,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import axios from "axios";

const MainContainer = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });

  //console.log(formData);

  const [resData, setResData] = useState("");

  const [updateOpen ,setUpdateOpen] = useState(false)


  const [updateData,setUpdateData ] = useState()
  //console.log(updateData)


  let count = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `http://localhost:8080/api/v1/resturants/create`,
      formData
    );
    console.log(res);
    alert("Added");
    window.location.reload();
  };

  const fetchRes = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/resturants/allres`
    );
    setResData(res.data);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:8080/api/v1/resturants/delete/${id}`
    );
   // console.log(res);
    alert("Deleted");
    window.location.reload();
  };

  const handleUpdate = async(x) =>{
    setUpdateData(x)
    setUpdateOpen(true)
  }

  const handleUpdate1 = async(e)=>{
    e.preventDefault()
    const res  = await axios.put(`http://localhost:8080/api/v1/resturants/update/${updateData.id}`,updateData)
   // console.log(res)
    if(res.data[0]  === 1){
      alert("Update Successful")
      window.location.reload()
    }else{
      alert("Something went wrong")
    }
  }

  useEffect(() => {
    fetchRes();
  }, []);

  return (
    <div className="mt-10 mb-20">
      <div className="flex justify-between items-center">
        <h1 className="mx-[2%] md:ml-[2%] lg:ml-[2%]  text-3xl font-medium">
          Available Restaurants
        </h1>
        {open ? (
          <motion.h1
            onClick={() => setOpen(false)}
            whileHover={{ scale: 0.95 }}
            className="bg-red-500 mr-10 cursor-pointer text-white font-medium py-2 px-5"
          >
            <FontAwesomeIcon icon={faXmark} />
          </motion.h1>
        ) : (
          <motion.h1
            onClick={() => setOpen(true)}
            whileHover={{ scale: 0.95 }}
            className="bg-blue-500 mr-10 cursor-pointer text-white font-medium p-3"
          >
            Add New
          </motion.h1>
        )}
      </div>
      <h1 className="bg-gradient-to-tr from-blue-400 to-blue-600 h-1 mx-[2%] md:ml-[2%] lg:ml-[2%] w-[40%] md:w-[12%]"></h1>
      {open ? (
        <div className="mx-[2%] mt-10 flex justify-center  md:ml-[2%] lg:ml-[2%] ">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex rounded-t-xl drop-shadow-lg bg-card p-10 flex-col gap-5"
          >
            <h1 className="text-center underline text-headingColor font-medium text-lg mb-5">
              Add New Restaurant
            </h1>
            <div className="flex flex-col   gap-2">
              <label htmlFor="">Name</label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                required
                type="text"
                className="h-10 w-72 border-gray-400 rounded-md border focus:outline-none p-1 text-textColor font-medium"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col   gap-2">
              <label htmlFor="">Address</label>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                value={formData.address}
                required
                type="text"
                className="h-10 w-72 border-gray-400 rounded-md border focus:outline-none p-1 text-textColor font-medium"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col  gap-2">
              <label htmlFor="">Contact </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                value={formData.contact}
                required
                type="number"
                className="h-10 w-72 border-gray-400 rounded-md border focus:outline-none p-1 text-textColor font-medium"
                name=""
                id=""
              />
            </div>
            <button
              className="border-blue-500 border uppercase py-2 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-300 "
              type="submit"
            >
              Add{" "}
            </button>
          </form>
        </div>
      ) : null}
      {updateOpen ?  <div className="mx-[2%] fixed top-[20%] mt-10 left-[35%]  md:ml-[2%] lg:ml-[2%] ">
          <form
            onSubmit={handleUpdate1}
            action=""
            className="flex rounded-t-xl drop-shadow-lg bg-white p-10 flex-col gap-5"
          >
            <div className="flex justify-between items-center mb-5 ">
            <h1 className="text-center text-headingColor  text-lg ">
              <span className="">Updating :</span> <span className="font-medium text-blue-500">{updateData.name}</span>
            </h1>
            <FontAwesomeIcon onClick={()=>setUpdateOpen(false)} className="text-red-500 text-xl cursor-pointer" icon={faClose}/>
            </div>
           
            <div className="flex flex-col   gap-2">
              <label htmlFor="">Name</label>
              <input
                onChange={(e) =>
                  setUpdateData({ ...updateData, name: e.target.value })
                }
                required
                type="text"
                className="h-10 w-72 border-gray-400 rounded-md border focus:outline-none p-1 text-textColor font-medium"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col   gap-2">
              <label htmlFor="">Address</label>
              <textarea
                onChange={(e) =>
                  setUpdateData({ ...updateData, address: e.target.value })
                }
                required
                type="text"
                className="h-10 w-72 border-gray-400 rounded-md border focus:outline-none p-1 text-textColor font-medium"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col  gap-2">
              <label htmlFor="">Contact </label>
              <input
                onChange={(e) =>
                  setUpdateData({ ...updateData, contact: e.target.value })
                }
                required
                type="number"
                className="h-10 w-72 border-gray-400 rounded-md border focus:outline-none p-1 text-textColor font-medium"
                name=""
                id=""
              />
            </div>
            <button
              className="border-blue-500 border uppercase py-2 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-300 "
              type="submit"
            >
              Update{" "}
            </button>
          </form>
          </div> : ""}
      {resData
        ? resData.map((x) => (
            <div className="mx-[2%] border flex justify-between px-10 border-blue-400 rounded-lg md:ml-[2%] mt-20 lg:ml-[2%]">
              <div className="flex flex-col py-5 gap-4 ml-5">
                <h1 className="text-3xl  text-headingColor font-medium">
                  <span className="font-normal text-2xl">{count++}.</span>&nbsp;{x.name}
                </h1>
                <h1 className=" mt-10 text-xl flex items-center gap-1">
                  <FontAwesomeIcon
                    className="text-blue-500"
                    icon={faLocationPin}
                  />
                  &nbsp;Address&nbsp;:&nbsp;
                  {x.address}
                </h1>
                <h1 className="mt-10">
                  <FontAwesomeIcon className="text-blue-500" icon={faPhone} />&nbsp;
                  Phone&nbsp;:&nbsp;{x.contact}
                </h1>
              </div>
              <div className="gap-5  ml-40 flex  items-center">
                <h1 onClick={()=>handleUpdate(x)} className="text-xl border rounded-md transition-all ease-in-out duration-300 p-2 border-green-500 hover:bg-green-500 hover:text-white cursor-pointer">
                  Update
                </h1>
                <h1
                  onClick={() => handleDelete(x.id)}
                  className="text-xl border rounded-md transition-all ease-in-out duration-300 p-2 border-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
                >
                  Delete
                </h1>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default MainContainer;
