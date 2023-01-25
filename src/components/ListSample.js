import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MessageContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StatusMessage = styled(Typography, {
  shouldForwardProp: (props) => props !== "color",
})(({ theme, color }) => ({
  fontSize: "20px",
  fontWeight: "600",
  color: theme.palette[color].main,
}));

const EmptyList = () => (
  <ListItem>
    <MessageContainer>
      <StatusMessage color='info'>No hay datos cargados aún.</StatusMessage>
    </MessageContainer>
  </ListItem>
);

const Loading = () => (
  <ListItem>
    <MessageContainer>
      <StatusMessage color='info'>Cargando...</StatusMessage>
    </MessageContainer>
  </ListItem>
);

const RequestFailError = () => (
  <ListItem>
    <MessageContainer>
      <StatusMessage color='error'>Ups..¡ Algo fallo por aquí.</StatusMessage>
    </MessageContainer>
  </ListItem>
);

const RenderIf = ({ condition, children }) => {
  return <>{condition ? children : null}</>;
};

const ListWrapper = styled(List)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
  border: `1px solid ${theme.palette.spacing}`,
  padding: theme.spacing(2),
}));

const Item = styled(ListItem)(({ theme }) => ({
  margin: `${theme.spacing(1)} 0px`,
  background: theme.palette.background.paper,
  border: "1px solid gray",
  "&:hover": {
    background: theme.palette.ternary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const ListSample = ({ items, error, fetching }) => {
  //fetching: it will be a boolean returned after a request has been made
  /*
    if request = succefull => fetching === false
    if request = fail => fetching === false
    if request = unresolved promise => fetching === true
*/
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const itemsLenght = items.length;
    if (itemsLenght === 0) {
      setEmpty(true);
    } else setEmpty(false);
  }, [items]);
  return (
    <ListWrapper>
      <RenderIf condition={fetching}>
        <Loading />
      </RenderIf>
      <RenderIf condition={error && !fetching}>
        <RequestFailError />
      </RenderIf>
      <RenderIf condition={empty && !error && !fetching}>
        <EmptyList />
      </RenderIf>
      <RenderIf condition={!fetching && !error && !empty}>
        {items.map((item, index) => (
          <Item key={`${index}-${item}`} role='listitem'>
            <ListItemText>{item}</ListItemText>
          </Item>
        ))}
      </RenderIf>
    </ListWrapper>
  );
};

ListSample.prototype = {
  items: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.bool,
  fetching: PropTypes.bool,
};

ListSample.defaultProps = {
  items: [],
  error: false,
  fetching: false,
};

export default ListSample;
