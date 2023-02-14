import React from "react";
import MainServices from "components/MainServices";
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
      background: "#f6f0e8",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
    }}
  >
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
