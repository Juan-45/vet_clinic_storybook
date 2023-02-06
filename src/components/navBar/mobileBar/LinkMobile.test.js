import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "stories/LinkMobile.stories.js";

const { Playground: LinkMobile } = composeStories(stories);

describe("<LinkMobile/>", () => {
  test("Label was rendered", () => {
    const args = {
      active: false,
      to: "/",
      children: "Página 1",
    };
    render(<LinkMobile {...args} />);
    expect(screen.getByText("Página 1")).toBeInTheDocument();
  });
  test("Children was rendered", () => {
    const args = {
      active: false,
      to: "/",
      children: <p>Página 1</p>,
    };
    render(<LinkMobile {...args} />);
    expect(screen.getByText("Página 1")).toBeInTheDocument();
  });
});
