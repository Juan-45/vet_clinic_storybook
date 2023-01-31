import React from "react";
import NavBar from "components/NavBar";
import { Box } from "@mui/material";
import logo from "stories/assets/logo.jpg";

export default {
  component: NavBar,
  argTypes: {
    navigationOptions: {
      defaultValue: [
        {
          to: "/?path=/story/stories-navbar--playground",
          label: "Home",
          active: false,
        },
        {
          to: "/?path=/story/stories-navbar--playground",
          label: "Acerca de",
          active: false,
        },
        {
          to: "/?path=/story/stories-navbar--playground",
          label: "Servicios",
          active: false,
        },
        {
          to: "/?path=/story/stories-navbar--playground",
          label: "Solicitar turno",
          active: false,
        },
        {
          to: "/?path=/story/stories-navbar--playground",
          label: "Recursos",
          active: false,
        },
      ],
      description: "Array of objects",
      control: { type: "object" },
    },
    withLogo: {
      defaultValue: true,
      description: "Condition to render a Logo",
      control: { type: "boolean" },
    },

    logoOptions: {
      defaultValue: {
        homeUrl:
          "http://localhost:6006/?path=/story/stories-navbar--playground",
        imgUrl: logo,
      },
      description: "Properties for Logo component",
      control: { type: "object" },
    },

    /*mobileIcon: {



    },*/
  },
};

const Template = (args) => <NavBar {...args} />;

const DefaultNavBar = Template.bind({});

export const Playground = (args) => {
  return (
    <Box sx={{ height: "150vh", background: "gray" }}>
      <DefaultNavBar {...args} />
    </Box>
  );
};
