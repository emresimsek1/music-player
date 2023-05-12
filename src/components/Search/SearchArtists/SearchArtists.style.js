export const CardContentStyle = {
  paddingBottom: "0",
  padding: "12px",
  width: "160px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  fontFamily: "GraublauWeb",
};

export const PlayListDisplayMobile = {
  display: "flex",
  justifyItems: "center",
  overflow: "scroll",
};

export const CardMediaStyle = {
  minWidth: 150,
  maxWidth: 150,
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
};

const PlayListDisplay = () => {
  var CardCount = {
    display: "grid",
    gridAutoRows: "0",
    gridTemplateRows: "1fr",
    // overflowY: "hidden",
    gridTemplateColumns: "repeat(var(--column), minmax(0,1fr))",
    justifyItems: "center",
  };
  CardCount = {
    ...CardCount,
    "--column":  Math.floor(window.innerWidth / 206) > 7
    ? 7
    : Math.floor(window.innerWidth / 206),
  };

  return CardCount;
};

export default PlayListDisplay();
