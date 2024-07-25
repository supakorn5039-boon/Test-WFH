import { Typography } from "@mui/material";
import React from "react";

export default function Label() {
  return (
    <div className="flex w-fit items-center gap-x-6 rounded-lg px-4  text-base ">
      <Typography className="min-w-[190px] text-gray-300">
        ชื่อหน่วยงาน
      </Typography>
      <Typography className=" min-w-[170px] text-gray-300">
        รหัสหน่วยบริการ
      </Typography>
      <Typography className=" min-w-[150px] text-gray-300">
        วันที่ขึ้นทะเบียน
      </Typography>
      <Typography className="min-w-[155px] text-gray-300">
        ชื่อผู้ตรวจสอบ
      </Typography>
      <Typography className=" min-w-[120px] text-gray-300">
        วันที่ตรวจสอบ
      </Typography>
      <Typography className="min-w-[180px] flex justify-center text-gray-300">
        สถานะ
      </Typography>
    </div>
  );
}
