export var ArtistsList = {
  "--column": "6",
  display: "grid",
  gridAutoRows: "0",
  gridTemplateRows: "1fr",
  // overflowY: "hidden",
  gridTemplateColumns: "repeat(var(--column), minmax(0,1fr))",
  justifyItems: "center",
};
export var CardContentStyle = {
  paddingBottom: "0",
  padding: "12px",
  width: "160px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

export var CardActionAreaStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
export var CardMediaStyle = {
  borderRadius: "10rem",
  width: "10rem",
  height: "10rem",
};
export var TypographyStyle = {
  bottom: "0px",
  color: "black",
  fontSize: "38px",
  fontWeight: "bolder",
};