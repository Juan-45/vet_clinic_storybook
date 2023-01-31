import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "stories/LinkMobile.stories.js";

const { Playground: LinkMobile } = composeStories(stories);

describe("<LinkMobile/>", () => {
  test("Label was rendered", () => {
    const args = {
      active: false,
      to: "/",
      label: "Página 1",
    };
    render(<LinkMobile {...args} />);
    expect(screen.getByText(args.label)).toBeInTheDocument();
  });
});
