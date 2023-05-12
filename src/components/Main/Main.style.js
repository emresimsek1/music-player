 
export var PlayListDisplayMobile = {
  display: "flex",
  overflowY: "scroll",
};

export var CardContentStyle = {
  fontFamily: "GraublauWeb",
  padding: "12px 12px 0 12px",
  paddingBottom: "0",
  width: "125px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

export var ArtistNameStyle = {
  display: "flex",
  justifyContent: "flex-start",
  fontFamily: "GraublauWeb",
  fontSize: "12px",
  color: "black",
};



export const CardStyle ={
  maxWidth: 150,
  minWidth: 150,
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
}
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
    "--column":  Math.floor(window.innerWidth / 206) > 7
    ? 7
    : Math.floor(window.innerWidth / 206),
  };

  return CardCount;
};

export default PlayListDisplay();
