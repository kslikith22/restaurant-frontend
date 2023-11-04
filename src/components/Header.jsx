import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {

  return (
    <div className="bg-card flex z-50 w-[100%] justify-between items-center py-6 px-4">
      <div className="">
        <span className="text-blue-500 text-2xl font-medium">Online</span>
        <span className=" text-2xl font-medium mx-2">Restaurants</span>
      </div>
      <div>
        <ul className="flex items-center gap-20 mr-20">
          <motion.li
            className="font-medium cursor-pointer"
            whileHover={{ scale: 0.8 }}
          >
            Home
          </motion.li>
          <motion.li
            className="font-medium cursor-pointer"
            whileHover={{ scale: 0.8 }}
          >
            About
          </motion.li>
          <motion.li
            className="font-medium cursor-pointer"
            whileHover={{ scale: 0.8 }}
          >
            Contact
          </motion.li>
          
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
