import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

// import Button stories file as a module
import * as stories from "stories/NavMenuDesktop.stories.js";

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Playground: NavMenuDesktop } = composeStories(stories);

describe("<NavMenuDesktop/> It renders nested items", () => {
  test("It renders all nested items", () => {
    const argsWithItems = {
      label: "Test1",
      nested: [
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
    };
    render(<NavMenuDesktop {...argsWithItems} />);
    for (let i = 0; i < argsWithItems.nested.length; i++) {
      expect(
        screen.getByText(argsWithItems.nested[i].label)
      ).toBeInTheDocument();
    }
  });
});

describe("<NavMenuDesktop/> It renders label", () => {
  test("It renders label", () => {
    const argsWithItems = {
      label: "Test1",
      nested: [
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
    };
    render(<NavMenuDesktop {...argsWithItems} />);
    expect(screen.getByText(argsWithItems.label)).toBeInTheDocument();
  });
});
