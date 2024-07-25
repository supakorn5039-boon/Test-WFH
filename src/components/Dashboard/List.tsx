import { Test } from "@/types/API";
import { Box, styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  data: Test[];
  Loading: boolean;
  filterStatus: string;
};

const statusColorMap: { [key: string]: string } = {
  รอตรวจสอบ: "dodgerblue",
  พิจารณาเอกสาร: "darkorange",
  ขึ้นทะเบียน: "green",
  ออกเอกสาร: "mediumturquoise",
  แก้ไข: "slateblue",
};

const getStatusColor = (status: string) => {
  if (status.includes("แก้ไข")) {
    return statusColorMap["แก้ไข"];
  }
  const color = statusColorMap[status];
  return color || "blue";
};

const ItemList = styled(Typography)<{ color: string }>(({ color }) => ({
  display: "flex",
  justifyContent: "center",
  minWidth: "180px",
  color: color,
}));

export default function List({ data, Loading, filterStatus }: Props) {
  if (Loading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    throw new Error("Can't fetch Data");
  }

  const filteredData = data.filter(
    (item) =>
      item.status &&
      (filterStatus === "แก้ไข"
        ? item.status.includes("แก้ไข")
        : item.status === filterStatus)
  );

  return (
    <React.Fragment>
      {filteredData.map((item, index) => {
        const status = item.status || "";
        const bgColor = getStatusColor(status);

        return (
          <React.Fragment key={index}>
            <Box className="my-2 flex items-center rounded-lg p-4">
              <Typography
                className="min-w-[180px] text-gray-500"
                fontWeight={400}
              >
                {item.name}
              </Typography>

              <ItemList color="#9ca3af">{item.code}</ItemList>
              <ItemList color="#9ca3af">{item.createDate}</ItemList>
              <ItemList color="#d1d5db">{item.verifyBy}</ItemList>
              <ItemList color="#9ca3af">{item.verifyDate}</ItemList>
              <Typography
                className="min-w-[200px] text-white border flex py-2 rounded-full justify-center px-5"
                style={{ backgroundColor: bgColor }}
              >
                {item.status}
              </Typography>
            </Box>
            <hr />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
