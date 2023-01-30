import React from "react";
import NavLink from "components/navBar/desktopBar/NavLink";

export default {
  component: NavLink,
  argTypes: {
    active: {
      defaultValue: false,
      description: "Active: current path matches the value of href attribute",
      control: { type: "boolean" },
    },
    to: {
      defaultValue: "/?path=/story/stories-navlink--playground",
      control: { type: "text" },
      description: "Path value",
    },
    label: {
      defaultValue: "Página 1",
      control: { type: "text" },
      description: "Label",
    },
  },
};

const Template = (args) => <NavLink {...args} />;

export const Playground = Template.bind({});

export const NavLinkHover = Template.bind({});

NavLinkHover.args = {
  active: true,
  to: "/?path=/story/stories-navlink--nav-link-hover",
  label: "onHover",
};

export const NavLinkActive = Template.bind({});

NavLinkActive.args = {
  active: true,
  to: "/?path=/story/stories-navlink--nav-link-active",
  label: "active",
};

export const NavLinkExternal = Template.bind({});

NavLinkExternal.args = {
  active: false,
  to: "/?path=/story/stories-navlink--nav-link-external",
  label: "external",
  target: "_blank",
};
