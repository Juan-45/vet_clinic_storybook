import React from "react";
import { Box } from "@mui/material";
import ProminentTitle from "components/ProminentTitle";

export default {
  component: ProminentTitle,
  argTypes: {
    children: {
      defaultValue: "Test",
      control: { type: "node" },
      description: "Children",
    },
  },
};

export const Template = (args) => (
  <Box
    sx={{
      display: "flex",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "center",
    }}
  >
    <ProminentTitle {...args}>
      Cuidados Integrales para tu Mascota
    </ProminentTitle>
  </Box>
);
