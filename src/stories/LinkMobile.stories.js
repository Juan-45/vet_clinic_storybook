import React from "react";
import LinkMobile from "components/navBar/mobileBar/LinkMobile";

export default {
  component: LinkMobile,
  argTypes: {
    active: {
      defaultValue: false,
      description: "Active: current path matches the value of href attribute",
      control: { type: "boolean" },
    },
    to: {
      defaultValue: "/?path=/story/stories-linkmobile--playground",
      control: { type: "text" },
      description: "Path value",
    },
    children: {
      defaultValue: "Página 1",
      control: { type: "text" },
      description: "Children",
    },
  },
};

const Template = (args) => <LinkMobile {...args} />;

export const Playground = Template.bind({});

export const LinkMobileActive = Template.bind({});

LinkMobileActive.args = {
  active: true,
  to: "/?path=/story/stories-linkmobile--nav-link-active",
  children: "active",
};

export const LinkMobileExternal = Template.bind({});

LinkMobileExternal.args = {
  active: false,
  to: "/?path=/story/stories-linkmobile--nav-link-external",
  children: "external",
  target: "_blank",
};
