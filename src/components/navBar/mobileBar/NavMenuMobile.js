import PropTypes from "prop-types";
import { ListItemText, Typography } from "@mui/material";
import {
  NavMenuOpenMobile,
  NavMenuItemsContainer,
  NavMenuItemContainer,
  NavMenuItem,
  NavMenuArrow,
} from "components/navBar/Styles";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const NavMenuMobile = ({ label, active, nested, drawerOnClose }) => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);

  const location = useLocation();

  const nestedLinks = nested.map((item, index) => {
    const isActive = item.to === location.pathname;
    return (
      <NavMenuItemContainer
        key={`${item.label}-${index}`}
        className='mobileMenuListItem'
      >
        <NavMenuItem
          to={item.to}
          active={isActive}
          onClick={drawerOnClose}
          {...item.anchorProp}
        >
          <ListItemText primary={item.label} />
        </NavMenuItem>
      </NavMenuItemContainer>
    );
  });

  return (
    <NavMenuOpenMobile active={active || open} onClick={handleMenu}>
      <Typography variant='button'>{label}</Typography>
      <NavMenuArrow open={open} className='navMenuArrow' />
      <NavMenuItemsContainer open={open} className='mobileMenuList'>
        {nestedLinks}
      </NavMenuItemsContainer>
    </NavMenuOpenMobile>
  );
};

NavMenuMobile.propTypes = {
  nested: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string,
      anchorProp: PropTypes.object,
    })
  ).isRequired,
  label: PropTypes.string,
  active: PropTypes.bool,
  drawerOnClose: PropTypes.func,
};

NavMenuMobile.defaulProps = {
  active: false,
};

export default NavMenuMobile;
