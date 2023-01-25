import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

// import Button stories file as a module
import * as stories from "stories/ListSample.stories.js";

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Playground: ListSample } = composeStories(stories);

describe("<ListSample/> con items", () => {
  test("Renderiza todos los item pasados", () => {
    const argsWithItems = {
      items: ["Item-1", "Item-2"],
      error: false,
      fetching: false,
    };
    render(<ListSample {...argsWithItems} />);
    for (let i = 0; i < argsWithItems.length; i++) {
      expect(screen.getByText(argsWithItems.items[i])).toBeInTheDocument();
    }
  });

  test("NO muestra mensaje de listado vacio", () => {
    const argsWithItems = {
      items: ["Item-1", "Item-2"],
      error: false,
      fetching: false,
    };
    render(<ListSample {...argsWithItems} />);

    expect(
      screen.queryByText("No hay datos cargados aún.")
    ).not.toBeInTheDocument();
  });
});

describe("<ListSample/> con items = []", () => {
  test("Renderiza solo un elemento role='listitem'", () => {
    const argsWithItems = {
      items: [],
      error: false,
      fetching: false,
    };
    render(<ListSample {...argsWithItems} />);
    expect(screen.getAllByRole("listitem").length).toBeOneOf([1]);
  });

  test("Muestra mensaje de listado vacio", () => {
    const argsWithItems = {
      items: [],
      error: false,
      fetching: false,
    };
    render(<ListSample {...argsWithItems} />);

    expect(screen.getByText("No hay datos cargados aún.")).toBeInTheDocument();
  });
});

describe("<ListSample/> con error = true", () => {
  test("Renderiza mensaje de error", () => {
    const argsWithItems = {
      items: [],
      error: true,
      fetching: false,
    };
    render(<ListSample {...argsWithItems} />);
    expect(screen.getByText("Ups..¡ Algo fallo por aquí.")).toBeInTheDocument();
  });
});

describe("<ListSample/> con error = false", () => {
  test("NO renderiza mensaje de error", () => {
    const argsWithItems = {
      items: [],
      error: false,
      fetching: false,
    };
    render(<ListSample {...argsWithItems} />);
    expect(
      screen.queryByText("Ups..¡ Algo fallo por aquí.")
    ).not.toBeInTheDocument();
  });
});

describe("<ListSample/> con fetching = true", () => {
  test("Renderiza mensaje de carga en progreso", () => {
    const argsWithItems = {
      items: [],
      error: false,
      fetching: true,
    };
    render(<ListSample {...argsWithItems} />);
    expect(screen.getByText("Cargando...")).toBeInTheDocument();
  });
});

describe("<ListSample/> con fetching = false", () => {
  test("NO renderiza mensaje de carga en progreso", () => {
    const argsWithItems = {
      items: [],
      error: false,
      fetching: false,
    };
    render(<ListSample {...argsWithItems} />);
    expect(screen.queryByText("Cargando...")).not.toBeInTheDocument();
  });
});
