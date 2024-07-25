import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box className="flex flex-col items-center mt-auto ">
      <Typography className="cursor-pointer" fontSize={18} mt={1}>
        บริการอื่นๆ
      </Typography>
      <Typography className="cursor-pointer" fontSize={18}>
        คำถามที่พบบ่อย
      </Typography>
      <Typography
        className="cursor-pointer"
        fontSize={20}
        mt={3}
        mb={1}
        fontWeight={"bold"}
      >
        ออกจากระบบ
      </Typography>
    </Box>
  );
}
