import PageLink from "components/PageLink";
import { LargeContainer } from "components/CommonStyles";
import { HighlightSecondary } from "components/CommonStyles";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import mergician from "mergician";
import vaccination from "stories/assets/vaccination.png";
import toothbrush from "stories/assets/toothbrush.png";
import bed from "stories/assets/bed.png";
import ambulance from "stories/assets/ambulance.png";

import PropTypes from "prop-types";

const Container = styled(LargeContainer)({
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
});

const LinksContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const ServicesListContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  paddingRight: "0px",
  display: "flex",
  flexWrap: "wrap",
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  minHeight: "300px",
  background: theme.palette.primary.main,
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

const MainServices = ({ linksList }) => {
  const links = linksList.map((item) => (
    <PageLink
      label={item.label}
      to={item.to}
      key={item.label}
      sx={{ marginLeft: "8px", marginRight: "8px" }}
    />
  ));

  return (
    <Container>
      <ServicesListContainer>
        <InfoContainer>
          <StyledImg src={vaccination} alt='vaccination' />
          <Title variant='h2'>Vacunación.</Title>
          <Description>
            Entendemos la importancia de proteger a tu compañero. Porque un
            futuro saludable comienza con una prevención efectiva.
          </Description>
        </InfoContainer>
        <InfoContainer>
          <StyledImg src={toothbrush} alt='dental health' />
          <Title variant='h2'>Salud dental.</Title>
          <Description>
            Prevenimos problemas dentales y mantenemos una boca saludable para
            una vida larga y feliz.
          </Description>
        </InfoContainer>
        <InfoContainer>
          <StyledImg src={bed} alt='admission' />
          <Title variant='h2'>Internaciones.</Title>
          <Description>
            Con un equipo altamente capacitado y un ambiente acogedor, tu
            mascota estará en buenas manos durante su recuperación.
          </Description>
        </InfoContainer>
        <InfoContainer>
          <StyledImg src={ambulance} alt='emergency services 24 hours' />
          <Title variant='h2'>Servicio de emergencias 24 hs.</Title>
          <Description>
            Atendemos tu emergencia las 24/7: estamos aquí para proteger la
            salud de tu mascota.
          </Description>
          <HighlightSecondary sx={{ fontSize: "1.5rem", textAlign: "center" }}>
            Te: 555-555-555
          </HighlightSecondary>
        </InfoContainer>
      </ServicesListContainer>
      <LinksContainer>{links}</LinksContainer>
    </Container>
  );
};

MainServices.prototype = {
  linksList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
};

MainServices.defaultProps = {
  linksList: [
    {
      label: "",
      to: "",
    },
  ],
};

export default MainServices;
