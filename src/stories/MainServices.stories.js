import React from "react";
import MainServices from "components/MainServices";
import * as ProminentTitle from "stories/ProminentTitle.stories";
import * as Divider from "stories/Divider.stories";
import { Box } from "@mui/material";

export default {
  component: MainServices,
};

export const Playground = () => (
  <Box
    sx={{
      minWidth: "360px",
      background: "#e9f1f6",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
  >
    <Divider.Template />
    <ProminentTitle.Template />
    <MainServices />
  </Box>
);
