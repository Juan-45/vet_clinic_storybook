import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "stories/LinkDesktop.stories.js";

const { Playground: LinkDesktop } = composeStories(stories);

describe("<LinkDesktop/>", () => {
  test("Label was rendered", () => {
    const args = {
      active: false,
      to: "/",
      label: "Página 1",
    };
    render(<LinkDesktop {...args} />);
    expect(screen.getByText(args.label)).toBeInTheDocument();
  });
});
