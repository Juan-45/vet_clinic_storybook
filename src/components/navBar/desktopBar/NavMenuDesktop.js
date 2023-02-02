import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import {
  NavMenuOpenDesktop,
  NavMenuItemsContainer,
  NavMenuItemContainer,
  NavMenuItem,
} from "components/navBar/Styles";

//import { useState } from "react";

const NavMenuDesktop = ({ label, nested }) => {
  const active = false;

  /*const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);*/

  return (
    <NavMenuOpenDesktop
      // onClick={handleOpen}
      active={active}
    >
      <Typography variant="button">Prueba</Typography>
      <NavMenuItemsContainer className="desktopMenuList">
        <NavMenuItemContainer
        //  onClick={handleClose}
        >
          <NavMenuItem to={"/"}>
            <ListItemText primary={"Test1"} />
          </NavMenuItem>
        </NavMenuItemContainer>
        <NavMenuItemContainer
        // onClick={handleClose}
        >
          <NavMenuItem to={"/"}>
            <ListItemText primary={"Test2"} />
          </NavMenuItem>
        </NavMenuItemContainer>
      </NavMenuItemsContainer>
    </NavMenuOpenDesktop>
  );
};

NavMenuDesktop.propTypes = {
  nested: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
      active: PropTypes.bool,
      anchorProp: PropTypes.object,
    })
  ).isRequired,
  label: PropTypes.string,
};

NavMenuDesktop.defaulProps = {
  nested: {
    active: false,
  },
};

export default NavMenuDesktop;
