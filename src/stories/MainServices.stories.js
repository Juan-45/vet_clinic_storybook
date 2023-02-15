import React from "react";
import MainServices from "components/MainServices";
import * as ProminentTitle from "stories/ProminentTitle.stories";
import * as Divider from "stories/Divider.stories";
import { Box } from "@mui/material";

export default {
  component: MainServices,
  argTypes: {
    linksList: {
      defaultValue: [
        {
          label: "",
          to: "",
        },
      ],
      control: { type: "object" },
      description:
        "Array of objects with props for React-Router's Link components",
    },
  },
};

export const Playground = (args) => (
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
    <MainServices {...args} />
  </Box>
);

Playground.args = {
  linksList: [
    {
      label: "Ver todo",
      to: "/?path=/story/stories-mainservices--playground",
    },
    {
      label: "Solicitar turno",
      to: "/?path=/story/stories-mainservices--playground",
    },
  ],
};
