import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export default function TabActive({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<string>>;
}) {
  const tabMapping: { [key: string]: string } = {
    ตรวจความถูกต้อง: "รอตรวจสอบ",
    พิจารณาเอกสาร: "พิจารณาเอกสาร",
    ขึ้นทะเบียน: "ขึ้นทะเบียน",
    ออกเอกสาร: "ออกเอกสาร",
    แก้ไข: "แก้ไข",
  };

  const [activeTab, setActiveTab] = useState<string>("ตรวจความถูกต้อง");

  const handleClick = (label: string) => {
    const status = tabMapping[label];
    if (status) {
      setActiveTab(label);
      setShow(status);
    }
  };

  return (
    <Box className="px-4 flex gap-x-8 mt-5">
      {Object.keys(tabMapping).map((label) => (
        <Box
          key={label}
          component="button"
          onClick={() => handleClick(label)}
          className={`p-2 rounded-lg cursor-pointer ${
            activeTab === label ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <Typography>{label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
