import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Menu() {
  const [active, setActive] = useState(null);

  const handleClick = (index: any) => {
    setActive(index);
  };

  return (
    <Box pt={5} ml={5}>
      <Box className="flex flex-col">
        {["หน้าหลัก", "ขึ้นทะเบียนสำเร็จ", "User Management"].map(
          (text, index) => (
            <Box
              key={index}
              onClick={() => handleClick(index)}
              className={`flex items-center cursor-pointer pl-3 py-2 mb-2
              ${
                active === index ? "bg-white" : "bg-transparent"
              } rounded-l-full cursor-pointer`}
            >
              <Box
                className={`h-6 w-6 rounded-full inline-block mr-2 border  border-gray-400  ${
                  active === index ? "bg-gray-200" : "bg-white"
                }`}
              />
              <Typography fontWeight="bold" fontSize={18} className={`p-5 `}>
                {text}
              </Typography>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
