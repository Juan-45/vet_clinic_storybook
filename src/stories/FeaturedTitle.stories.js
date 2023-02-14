import React from "react";
import { Box } from "@mui/material";
import { FeaturedTitle } from "components/CommonStyles";

export default {
  component: FeaturedTitle,
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
    <FeaturedTitle {...args}>Cuidados Integrales para tu Mascota</FeaturedTitle>
  </Box>
);
