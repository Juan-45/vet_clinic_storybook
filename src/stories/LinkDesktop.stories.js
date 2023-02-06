import React from "react";
import LinkDesktop from "components/navBar/desktopBar/LinkDesktop";

export default {
  component: LinkDesktop,
  argTypes: {
    active: {
      defaultValue: false,
      description: "Active: current path matches the value of href attribute",
      control: { type: "boolean" },
    },
    to: {
      defaultValue: "/?path=/story/stories-linkdesktop--playground",
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

const Template = (args) => <LinkDesktop {...args} />;

export const Playground = Template.bind({});

export const LinkDesktopActive = Template.bind({});

LinkDesktopActive.args = {
  active: true,
  to: "/?path=/story/stories-linkdesktop--nav-link-active",
  children: "active",
};

export const LinkDesktopExternal = Template.bind({});

LinkDesktopExternal.args = {
  active: false,
  to: "/?path=/story/stories-linkdesktop--nav-link-external",
  children: "external",
  target: "_blank",
};
