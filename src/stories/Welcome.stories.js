import React from "react";
import Welcome from "components/Welcome";
import PageLink from "components/PageLink";
import {
  TextContainer,
  Blurb,
  SecondaryText,
  HiglightTitle,
  HighlightSecondary,
  LinkContainer,
} from "components/welcome/Styles";
import home_1920x1110_c from "stories/assets/home_1920x1110_c.jpg";
import historyBackground from "stories/assets/history_2_2620x1780_c.jpg";
import { Box } from "@mui/material";
import * as NavBar from "stories/NavBar.stories";

export default {
  component: Welcome,
  argTypes: {
    children: {
      description: "Children Nodes",
    },
    /*  src: {
      defaultValue: homeSmall,
      control: { type: "text" },
      description: "Image url",
    },
    srcset: {
      defaultValue: `${homeMedium} 1200w`,
      control: { type: "text" },
      description: "Image url",
    },*/
    center: {
      defaultValue: false,
      control: { type: "boolean" },
      description: "Change justify-content value in screens 400px wide or less",
    },
    fullPage: {
      defaultValue: true,
      control: { type: "boolean" },
      description: "Change height value to 70vh in screens 850px wide or more",
    },
  },
};

const WrapperWithBar = ({ children }) => (
  <Box sx={{ minWidth: "360px" }}>
    <NavBar.Template
      navigationOptions={NavBar.default.argTypes.navigationOptions.defaultValue}
      withLogo={NavBar.default.argTypes.withLogo.defaultValue}
      logoOptions={NavBar.default.argTypes.logoOptions.defaultValue}
    />
    {children}
  </Box>
);

export const Home = (args) => (
  <WrapperWithBar>
    <Welcome {...args}>
      <TextContainer fullPage={true}>
        <Blurb variant='h1' color='primary'>
          <HiglightTitle>Pet Paw</HiglightTitle>, el lugar donde cuidamos de tu
          mejor amigo.
        </Blurb>
      </TextContainer>
      <TextContainer fullPage={true}>
        <SecondaryText color='primary'>
          Servicios de vacunación, exámenes, tratamientos, baños, corte de uñas,
          peluquería y limpieza dental.
          <HighlightSecondary>
            Atendemos emergencias las 24hs.
          </HighlightSecondary>
        </SecondaryText>
      </TextContainer>
      <LinkContainer>
        <PageLink
          label='Solicitar una entrevista'
          to='/?path=/story/stories-pageLink--playground'
        />
      </LinkContainer>
    </Welcome>
  </WrapperWithBar>
);
///usar picture y source para mostrar la imágen 1920x1110
//por encima de 1200 px y la de 1200x800 por debajo de 1200px,
//primero reSize manteniendo relación de aspecto, luego recortar si es necesario
Home.args = {
  src: home_1920x1110_c,
  center: false,
  fullPage: true,
};

export const History = (args) => (
  <WrapperWithBar>
    <Welcome {...args}>
      <TextContainer fullPage={false}>
        <Blurb variant='h1' color='primary'>
          <HiglightTitle>20 años</HiglightTitle> cuidando de tu mascota.
        </Blurb>
      </TextContainer>
    </Welcome>
  </WrapperWithBar>
);

History.args = {
  src: historyBackground,
  center: true,
  fullPage: false,
};
