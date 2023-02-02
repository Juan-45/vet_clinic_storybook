import PropTypes from "prop-types";
import { ListItemText, Typography } from "@mui/material";
import {
  NavMenuOpenDesktop,
  NavMenuItemsContainer,
  NavMenuItemContainer,
  NavMenuItem,
} from "components/navBar/Styles";

//import { useState } from "react";

const NavMenuDesktop = ({ label, active, nested }) => {
  /*  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);*/

  const nestedLinks = nested.map((item) => (
    <NavMenuItemContainer>
      <NavMenuItem to={item.to} active={item.active}>
        <ListItemText primary={item.label} />
      </NavMenuItem>
    </NavMenuItemContainer>
  ));

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
      active: PropTypes.bool,
      anchorProp: PropTypes.object,
    })
  ).isRequired,
  label: PropTypes.string,
  active: PropTypes.bool,
};

NavMenuDesktop.defaulProps = {
  nested: [
    {
      active: false,
    },
  ],
  active: false,
};

export default NavMenuDesktop;
