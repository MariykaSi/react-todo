import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  header: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [mediaQueries.medium]: {
      padding: "10px 0"
    }
  },

  logo: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 1.8,
    lineHeight: 1.7,
    textTransform: "uppercase"
  },

  auth: {
    [mediaQueries.medium]: {
      position: "absolute",
      right: 0,
      top: 10
    }
  },

  link: {
    fontWeight: 500,
    fontSize: 13,
    margin: "0px 15px",
    padding: 5,
    border: `1px solid ${colors.gray}`,
    borderRadius: "4px",
    minWidth: 70,
    textAlign: "center",
    background: colors.gray,
    cursor: "pointer"
  }
});
