import PageLink from "components/PageLink";
import { LargeContainer, FlexRowCenter } from "components/CommonStyles";
import { HighlightRed } from "components/CommonStyles";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import { useMediaQuery } from "@mui/material";
import mergician from "mergician";
import vaccination from "stories/assets/vaccination.png";
import toothbrush from "stories/assets/toothbrush.png";
import bed from "stories/assets/bed.png";
import ambulance from "stories/assets/ambulance.png";
import useTriggerOnScroll from "hooks/useTriggerOnScroll";

const Container = styled(LargeContainer)({
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
});

const ServicesListContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  paddingRight: "0px",
  display: "flex",
  flexWrap: "wrap",
}));

const ANIMATION_TIME = 0.8;

const bounceIn = keyframes({
  "0%": {
    opacity: "0",
    transform: "scale(.3)",
  },
  "50%": {
    opacity: "1",
    transform: "scale(1.05)",
  },
  "70%": {
    transform: "scale(.9)",
  },
  "100%": {
    transform: "scale(1)",
    opacity: "1",
  },
});

const InfoContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "trigger" && prop !== "delay",
})(({ theme, trigger, delay }) => ({
  minHeight: "300px",
  background: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(2),
  paddingTop: theme.spacing(3),
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(3),
  maxWidth: "calc(100% - 16px)",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "calc(50% - 16px)",
  },
  [theme.breakpoints.up("tablet_min_900")]: {
    maxWidth: "calc(25% - 16px)",
  },
  opacity: 0,
  animation: trigger
    ? `${ANIMATION_TIME}s ease ${delay}s forwards ${bounceIn}`
    : "unset",
}));

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "80px",
  height: "80px",
  marginBottom: theme.spacing(3),
  marginLeft: "auto",
  marginRight: "auto",
}));

const getCommonStyles = ({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  textAlign: "center",
});

const Title = styled(Typography)(({ theme }) =>
  mergician(getCommonStyles({ theme }), {
    fontWeight: 600,
    textDecoration: "underline",
    overflow: "hidden",
    textOverflow: "ellipsis",
  })
);

const Description = styled(Typography)(({ theme }) =>
  mergician(getCommonStyles({ theme }), { marginBottom: "0px" })
);

const MainServices = () => {
  const { targetEl: targetEl1, trigger: trigger1 } = useTriggerOnScroll();
  const { targetEl: targetEl2, trigger: trigger2 } = useTriggerOnScroll();
  const { targetEl: targetEl3, trigger: trigger3 } = useTriggerOnScroll();
  const { targetEl: targetEl4, trigger: trigger4 } = useTriggerOnScroll();

  const between600_899 = useMediaQuery(
    "(min-width: 600px) and (max-width:899px)"
  );

  const max599 = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const getDelayArr = ({ max599, between600_899 }) => {
    if (max599) {
      const results = [0, 0, 0, 0];
      return results;
    } else if (between600_899) {
      const results = [0, 0.3, 0, 0.3];
      return results;
    } else {
      const results = [0, 0.3, 0.6, 0.9];
      return results;
    }
  };

  return (
    <Container>
      <ServicesListContainer>
        <InfoContainer
          ref={targetEl1}
          trigger={trigger1}
          delay={getDelayArr({ max599, between600_899 })[0]}
        >
          <StyledImg src={vaccination} alt='vaccination' />
          <Title variant='h2'>Vacunación.</Title>
          <Description>
            Entendemos la importancia de proteger a tu compañero. Porque un
            futuro saludable comienza con una prevención efectiva.
          </Description>
        </InfoContainer>
        <InfoContainer
          ref={targetEl2}
          trigger={trigger2}
          delay={getDelayArr({ max599, between600_899 })[1]}
        >
          <StyledImg src={toothbrush} alt='dental health' />
          <Title variant='h2'>Salud dental.</Title>
          <Description>
            Prevenimos problemas dentales y mantenemos una boca saludable para
            una vida larga y feliz.
          </Description>
        </InfoContainer>
        <InfoContainer
          ref={targetEl3}
          trigger={trigger3}
          delay={getDelayArr({ max599, between600_899 })[2]}
        >
          <StyledImg src={bed} alt='admission' />
          <Title variant='h2'>Internaciones.</Title>
          <Description>
            Con un equipo altamente capacitado y un ambiente acogedor, tu
            mascota estará en buenas manos durante su recuperación.
          </Description>
        </InfoContainer>
        <InfoContainer
          ref={targetEl4}
          trigger={trigger4}
          delay={getDelayArr({ max599, between600_899 })[3]}
        >
          <StyledImg src={ambulance} alt='emergency services 24 hours' />
          <Title variant='h2'>Servicio de emergencias 24 hs.</Title>
          <Description>
            Atendemos tu emergencia las 24/7: estamos aquí para proteger la
            salud de tu mascota.
          </Description>{" "}
          <HighlightRed sx={{ fontSize: "1.5rem", textAlign: "center" }}>
            Te: 555-555-555
          </HighlightRed>
        </InfoContainer>
      </ServicesListContainer>
      <FlexRowCenter>
        <PageLink
          to='/?path=/story/stories-mainservices--playground'
          sx={{ marginRight: "32px" }}
        >
          Ver todo
        </PageLink>
        <PageLink to='/?path=/story/stories-mainservices--playground'>
          Solicitar turno
        </PageLink>
      </FlexRowCenter>
    </Container>
  );
};

export default MainServices;
