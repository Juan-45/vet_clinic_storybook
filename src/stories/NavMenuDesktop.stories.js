import React from "react";
import NavMenuDesktop from "components/navBar/desktopBar/NavMenuDesktop";

export default {
  component: NavMenuDesktop,
  argTypes: {
    active: {
      defaultValue: false,
      description: "Active: current path matches the value of href attribute",
      control: { type: "boolean" },
    },
    label: {
      defaultValue: "Página 1",
      control: { type: "text" },
      description: "Label",
    },
    nested: {
      defaultValue: [
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
      control: { type: "object" },
      description: "Array of objects",
    },
  },
};

const Template = (args) => <NavMenuDesktop {...args} />;

export const Playground = Template.bind({});

export const NavMenuDesktopActive = Template.bind({});

NavMenuDesktopActive.args = {
  active: true,
};
