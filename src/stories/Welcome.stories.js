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
import { Box } from "@mui/material";
import * as NavBar from "stories/NavBar.stories";
import home_1920x1110_c from "stories/assets/home_1920x1110_c.jpg";
import home_1200x800_c from "stories/assets/home_1200x800_c.jpg";
import home_900x600_c from "stories/assets/home_900x600_c.jpg";
import history_1920x780_c from "stories/assets/history_1920x780_c.jpg";
import history_1200x494_c from "stories/assets/history_1200x494_c.jpg";
import history_900x369_c from "stories/assets/history_900x369_c.jpg";
import { styled } from "@mui/material/styles";

export default {
  component: Welcome,
  argTypes: {
    children: {
      description: "Children Nodes",
    },
    src: {
      defaultValue: home_1920x1110_c,
      control: { type: "text" },
      description: "Image url",
    },
    sourceOptions: {
      defaultValue: [],
      control: { type: "object" },
      description: "Array of objects with source tag attributes",
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
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          <HiglightTitle>Pet Paw</HiglightTitle>, el lugar donde cuidamos de tu
          mejor amigo.
        </Blurb>
      </TextContainer>
      <TextContainer>
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

Home.args = {
  src: home_1920x1110_c,
  sourceOptions: [
    { media: "(min-width: 1200px)", srcset: home_1920x1110_c },
    { media: "(min-width: 900px)", srcset: home_1200x800_c },
    { media: "(max-width: 900px)", srcset: home_900x600_c },
  ],
};

const Container = styled(TextContainer)(({ theme }) => ({
  [theme.breakpoints.up("screen_max_850")]: {
    paddingTop: theme.spacing(10),
  },
  [theme.breakpoints.down("screen_max_850")]: {
    paddingTop: "0px",
  },
}));

export const History = (args) => (
  <WrapperWithBar>
    <Welcome {...args}>
      <Container>
        <Blurb variant='h1' color='primary'>
          <HiglightTitle>20 años</HiglightTitle> cuidando de tu mascota.
        </Blurb>
      </Container>
    </Welcome>
  </WrapperWithBar>
);

History.args = {
  src: history_1920x780_c,
  sourceOptions: [
    { media: "(min-width: 1200px)", srcset: history_1920x780_c },
    { media: "(min-width: 900px)", srcset: history_1200x494_c },
    { media: "(max-width: 900px)", srcset: history_900x369_c },
  ],
};
