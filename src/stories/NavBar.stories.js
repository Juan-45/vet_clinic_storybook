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
          to: "/home",
          label: "Home",
        },
        {
          to: "/about",
          label: "Acerca de",
        },
        {
          to: "/services",
          label: "Servicios",
        },
        {
          to: "/appointment",
          label: "Solicitar turno",
          anchorProp: {
            target: "_blank",
          },
        },
        {
          // to: "/", this props was omited deliberately
          label: "Recursos",
          nested: [
            {
              to: "/resources/contact",
              label: "Contáctanos",
            },
            {
              to: "/resources/faq",
              label: "FAQ",
            },
            {
              to: "/resources/rate_us",
              label: "Califícanos",
            },
          ],
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
