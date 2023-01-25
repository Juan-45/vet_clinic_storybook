import React from "react";
import ListSample from "components/ListSample";

export default {
  component: ListSample,
  argTypes: {
    items: {
      defaultValue: ["Item-1", "Item-2", "Item-3", "Item-4"],
      description: "Array de string",
      control: { type: "object" },
    },
    error: {
      control: { type: "boolean" },
      description: "Booleano en caso de error",
    },
    fetching: {
      control: { type: "boolean" },
      description: "Booleano en caso de solicitud en progreso",
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ListSample {...args} />;

//👇 Each story then reuses that template
export const Playground = Template.bind({});

export const ListadoCargado = Template.bind({});

ListadoCargado.args = {
  items: ["Item-1", "Item-2", "Item-3", "Item-4"],
  error: false,
  fetching: false,
};

export const ListadoVacio = Template.bind({});

ListadoVacio.args = {
  items: [],
  error: false,
  fetching: false,
};

export const SolicitudEnProgreso = Template.bind({});

SolicitudEnProgreso.args = {
  items: [],
  error: false,
  fetching: true,
};

export const SolicitudFallida = Template.bind({});

SolicitudFallida.args = {
  items: [],
  error: true,
  fetching: false,
};
