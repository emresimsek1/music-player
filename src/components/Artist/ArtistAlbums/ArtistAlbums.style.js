export var PlayListDisplayMobile = {
  display: "flex",
  justifyItems: "center",
  overflow: "scroll",
};
export var CardContentStyle = {
  fontFamily: "GraublauWeb",
  color: "black",
  paddingBottom: "0",
  padding: "12px",
  width: "130px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

export const CardStyle = {
  maxWidth: 150,
  minWidth: 150,
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
};

const PlayListDisplay = () => {
  var CardCount = {
    display: "grid",
    gridAutoRows: "0",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "repeat(var(--column), minmax(0,1fr))",
    justifyItems: "center",
  };
  CardCount = {
    ...CardCount,
    "--column":
      Math.floor(window.innerWidth / 206) > 7
        ? 7
        : Math.floor(window.innerWidth / 206),
  };

  return CardCount;
};

export default PlayListDisplay();
