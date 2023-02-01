import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@mui/material";
import { NavMenuOpenDesktop } from "components/navBar/Styles";

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
      {/*label*/ "Prueba"}
      <List
        sx={{
          display: "none",
          position: "absolute",
          left: "0",
          //  background: "gray",
          width: "150px",
          transform: "translate(-6.5px, 4px)",
          paddingTop: "10px",
          paddingBottom: "0px",
        }}
        className='desktopMenuList'
      >
        <ListItem
          disablePadding
          sx={{
            // borderTop: `1px solid ${theme.palette.divider}`,
            //height: "52px",
            margin: "0px",
            width: "100%",
            background: "gray",
          }}
          //  onClick={handleClose}
        >
          <a
            href={"/"}
            style={{
              paddingLeft: "8px",
              paddingTop: "8px",
              paddingBottom: "8px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <ListItemText
              primary={/*label*/ "Test1"}
              sx={{
                lineHeight: "1.4",
                fontSize: "0.875rem",
                margin: "0px",
              }}
            />
          </a>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            // borderTop: `1px solid ${theme.palette.divider}`,
            // height: "52px",
            width: "100%",
            background: "gray",
            cursor: "pointer",
          }}
          // onClick={handleClose}
        >
          <a
            href={"/"}
            style={{
              paddingLeft: "8px",
              paddingTop: "8px",
              paddingBottom: "8px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <ListItemText primary={/*label*/ "Test2"} />
          </a>
        </ListItem>
      </List>
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
