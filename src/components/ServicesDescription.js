import {
  LargeContainerFlex,
  ResponsiveItemsContainer,
} from "components/CommonStyles";

const ServicesDescription = ({ children }) => {
  return (
    <LargeContainerFlex sx={{ marginBottom: "16px" }}>
      <ResponsiveItemsContainer>{children}</ResponsiveItemsContainer>
    </LargeContainerFlex>
  );
};

export default ServicesDescription;
