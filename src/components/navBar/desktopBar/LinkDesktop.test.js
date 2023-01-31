import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "stories/LinkDesktop.stories.js";

const { Playground: LinkDesktop } = composeStories(stories);

describe("<LinkDesktop/>", () => {
  test("Label was rendered", () => {
    const args = {
      active: false,
      to: "/",
      children: "Página 1",
    };
    render(<LinkDesktop {...args} />);
    expect(screen.getByText("Página 1")).toBeInTheDocument();
  });
  test("Children was rendered", () => {
    const args = {
      active: false,
      to: "/",
      children: <p>Página 1</p>,
    };
    render(<LinkDesktop {...args} />);
    expect(screen.getByText("Página 1")).toBeInTheDocument();
  });
});
