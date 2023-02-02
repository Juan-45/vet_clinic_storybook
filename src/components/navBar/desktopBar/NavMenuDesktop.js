import PropTypes from "prop-types";
import { ListItemText, Typography } from "@mui/material";
import {
  NavMenuOpenDesktop,
  NavMenuItemsContainer,
  NavMenuItemContainer,
  NavMenuItem,
} from "components/navBar/Styles";
import { useLocation } from "react-router-dom";

//import { useState } from "react";

const NavMenuDesktop = ({ label, active, nested }) => {
  /*  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);*/
  const location = useLocation();

  const nestedLinks = nested.map((item, index) => {
    const isActive = item.to === location.pathname;

    return (
      <NavMenuItemContainer key={`${item.label}-${index}`}>
        <NavMenuItem to={item.to} active={isActive} {...item.anchorProp}>
          <ListItemText primary={item.label} />
        </NavMenuItem>
      </NavMenuItemContainer>
    );
  });

  return (
    <NavMenuOpenDesktop active={active}>
      <Typography variant='button'>{label}</Typography>
      <NavMenuItemsContainer className='desktopMenuList'>
        {nestedLinks}
      </NavMenuItemsContainer>
    </NavMenuOpenDesktop>
  );
};

NavMenuDesktop.propTypes = {
  nested: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string,
      anchorProp: PropTypes.object,
    })
  ).isRequired,
  label: PropTypes.string,
  active: PropTypes.bool,
};

NavMenuDesktop.defaulProps = {
  active: false,
};

export default NavMenuDesktop;
