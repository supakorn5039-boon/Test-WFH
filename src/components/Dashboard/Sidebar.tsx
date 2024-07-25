import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Icon from "../../../public/assets/icon.png";
import React from "react";
import { Test } from "@/types/API";
import Menu from "./Menu";
import Footer from "./Footer";

type Props = {
  data: Test[];
};

export default function Sidebar({ data }: Props) {
  const item = data.find((e) => e.verifyBy);

  return (
    <Box className="bg-gray-200 h-screen flex flex-col">
      <Box className="flex flex-col justify-center items-center flex-none p-4">
        <Image
          src={Icon}
          alt=""
          width={150}
          height={100}
          className="block mb-4"
        />
        <Typography fontSize={"1.15rem"}>
          {item ? item.verifyBy : "No name found"}
        </Typography>
        <Typography fontSize={"0.8rem"}>
          กระทรวงสาธารณะสุข กรมควบคุมโรค
        </Typography>
      </Box>
      <Menu />
      <Box className="flex-grow" />
      <Footer />
    </Box>
  );
}
