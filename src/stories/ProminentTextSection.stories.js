import React from "react";
import { Box } from "@mui/material";
import ProminentTextSection from "components/ProminentTextSection";
import {
  Title,
  InnerContainer,
  ParagraphContainer,
  Paragraph,
  ImgPositioning,
  ImageContainer,
  StyledImg,
  Bold,
} from "components/prominentTextSection/Styles";
import PageLink from "components/PageLink";
import { FlexRowCenter } from "components/CommonStyles";
import happy_dog_500x334_c from "stories/assets/happy-dog_500x334_c.jpg";
import { styled } from "@mui/material/styles";

export default {
  component: ProminentTextSection,
  argTypes: {
    children: {
      defaultValue: "Test",
      control: { type: "node" },
      description: "Children",
    },
  },
};

const Wrapper = styled(Box)({
  display: "flex",
  maxWidth: "1200px",
  minWidth: "360px",
  marginLeft: "auto",
  marginRight: "auto",
  justifyContent: "center",
  padding: "16px",
});

export const TemplateNoImg = () => (
  <Wrapper>
    <ProminentTextSection>
      <Title variant='h1'>Nuestra historia</Title>
      <InnerContainer className='innerContainerNoImg'>
        <ParagraphContainer>
          <Paragraph>
            La historia de PetPaw comienza hace más de dos décadas, cuando un
            grupo de veterinarios se dio cuenta de la falta de clínicas
            especializadas en el cuidado de mascotas en la región. Se
            propusieron crear una clínica que no solo brindara servicios médicos
            de alta calidad, sino que también fuera un lugar donde los dueños de
            mascotas pudieran sentirse cómodos y seguros dejando a sus
            compañeros peludos.
          </Paragraph>
          <Paragraph>
            Después de mucho trabajo y esfuerzo, la clínica finalmente abrió sus
            puertas, con un equipo de profesionales altamente capacitados y
            apasionados por el bienestar de las mascotas. Desde entonces, PetPaw
            se ha ganado una excelente reputación en la región, no solo por sus
            servicios médicos de primer nivel, sino también por su compromiso
            con la comunidad y el cuidado de los animales.
          </Paragraph>
          <Paragraph>
            A lo largo de los años, PetPaw ha seguido creciendo y expandiendo
            sus servicios. La clínica ha incorporado tecnología de vanguardia y
            ha ampliado su equipo con los mejores profesionales del área,
            siempre con el objetivo de brindar a los clientes la mejor atención
            posible.
          </Paragraph>
          <Paragraph>
            Hoy en día, PetPaw es un referente en el cuidado de mascotas en la
            región, y es el lugar al que acuden los dueños de mascotas para
            recibir atención médica de alta calidad, además de contar con un
            equipo amigable y acogedor. La clínica sigue comprometida con su
            misión de brindar el mejor cuidado posible a cada mascota que entra
            por sus puertas.
          </Paragraph>
        </ParagraphContainer>
      </InnerContainer>
    </ProminentTextSection>
  </Wrapper>
);

export const TemplateWithImg = () => (
  <Wrapper>
    <ProminentTextSection>
      <Title variant='h1'>Confía en PetPaw para el cuidado de tu mascota</Title>
      <InnerContainer className='innerContainerWithImg'>
        <ParagraphContainer className='paragraphContainerBesideImg'>
          <Paragraph>
            Somos una clínica veterinaria de primer nivel con más de{" "}
            <Bold>20 años de experiencia</Bold>. Nuestro equipo altamente
            capacitado ofrece <Bold>servicios médicos de alta calidad</Bold> y
            atención personalizada para cada mascota. Desde vacunación y
            exámenes de rutina hasta tratamientos y emergencias las 24 horas,
            estamos aquí para cuidar a tu compañero.{" "}
            <Bold>Contáctanos hoy para programar una cita.</Bold>
          </Paragraph>
          <FlexRowCenter>
            <PageLink
              sx={{ marginRight: "32px" }}
              to={
                "/?path=/story/stories-prominenttextsection--template-no-img&globals=backgrounds.grid:false"
              }
            >
              Solicitar turno
            </PageLink>
            <PageLink
              to={
                "/?path=/story/stories-prominenttextsection--template-no-img&globals=backgrounds.grid:false"
              }
            >
              Contáctanos
            </PageLink>
          </FlexRowCenter>
        </ParagraphContainer>
        <ImgPositioning>
          <ImageContainer src={happy_dog_500x334_c}>
            <StyledImg src={happy_dog_500x334_c} alt='test' />
          </ImageContainer>
        </ImgPositioning>
      </InnerContainer>
    </ProminentTextSection>
  </Wrapper>
);
