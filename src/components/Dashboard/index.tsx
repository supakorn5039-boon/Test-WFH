"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import List from "./List";
import { TestApi } from "@/services/test-api";

import Label from "./Label";
import TabActive from "./TabActive";
import Search from "./Search";

export default function DashboardPage() {
  const { TestApiData, APILOADING } = TestApi();
  const [show, setShow] = useState("รอตรวจสอบ");

  if (APILOADING) {
    return <div>Loading...</div>;
  }
  if (!TestApiData) {
    throw new Error("Can't fetch Data");
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={2.2}>
        <Box className="bg-gray-200">
          <Sidebar data={TestApiData} />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box className="text-4xl mt-10 flex flex-col">
          <Typography className="text-gray-600" mx={10} fontSize={36}>
            รายการขอขึ้นทะเบียน
          </Typography>
          <Box className="mt-5 bg-gray-300/90 rounded-lg  w-fit p-3">
            <TabActive setShow={setShow} />
            <Search />
            <Box className="bg-white rounded-t-lg" pt={2} px={2}>
              <Label />
              <List
                data={TestApiData}
                Loading={APILOADING}
                filterStatus={show}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
