import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const DividerContainer = styled(Box)({
  margin: "auto",
  marginTop: "60px",
  marginBottom: "40px",
  width: "80%",
  position: "relative",
});

const Shadow = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  height: "20px",
  "&::after": {
    content: "''",
    display: "block",
    margin: "-25px auto 0",
    width: "100%",
    height: "25px",
    borderRadius: "125px/12px",
    boxShadow: theme.shadows[6],
  },
}));

const Pin = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "45px",
  padding: "10px",
  position: "absolute",
  bottom: "-3px",
  left: "50%",
  marginLeft: "-60px",
  borderRadius: "100%",
  boxShadow: theme.shadows[6],
  background: theme.palette.background.default,
}));

const PinText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "4px",
  bottom: "4px",
  left: "4px",
  right: "4px",
  borderRadius: "100%",
  border: `1px dashed ${theme.palette.text.secondary}`,
  textAlign: "center",
  lineHeight: "35px",
  fontWeight: 600,
  color: theme.palette.text.secondary,
}));

const Divider = () => (
  <DividerContainer>
    <Shadow />
    <Pin>
      <PinText variant='caption'>PET PAW</PinText>
    </Pin>
  </DividerContainer>
);

export default Divider;
