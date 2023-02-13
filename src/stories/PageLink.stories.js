import React from "react";
import PageLink from "components/PageLink";

export default {
  component: PageLink,
  argTypes: {
    to: {
      defaultValue: "/?path=/story/stories-pageLink--playground",
      control: { type: "text" },
      description: "Path value",
    },
    label: {
      defaultValue: "Solicitar turno",
      control: { type: "text" },
      description: "Children",
    },
  },
};

export const Playground = (args) => <PageLink {...args}>Página 1</PageLink>;
