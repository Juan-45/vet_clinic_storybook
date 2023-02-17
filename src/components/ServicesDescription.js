import {
  LargeContainerFlex,
  ResponsiveItemsContainer,
} from "components/CommonStyles";

const ServicesDescription = ({ children }) => {
  return (
    <LargeContainerFlex>
      <ResponsiveItemsContainer>{children}</ResponsiveItemsContainer>
    </LargeContainerFlex>
  );
};

export default ServicesDescription;
