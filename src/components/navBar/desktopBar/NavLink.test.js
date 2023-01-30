import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "stories/NavLink.stories.js";

const { Playground: NavLink } = composeStories(stories);

describe("<NavLink/>", () => {
  test("Label was rendered", () => {
    const args = {
      active: false,
      to: "/",
      label: "Página 1"
    };
    render(<NavLink {...args} />);
    expect(screen.getByText(args.label)).toBeInTheDocument();
  });
});