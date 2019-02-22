import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  button: {
    fontWeight: 500,
    fontSize: 13,
    margin: "15px 0px 15px 5px",
    padding: 10,
    border: `1px solid ${colors.gray}`,
    borderRadius: "4px",
    minWidth: 100,
    background: colors.gray,
    cursor: "pointer",
    textAlign: "center",

    [mediaQueries.small]: {
      margin: "15px 19px"
    }
  },

  disabled: {
    opacity: "0.4",
    cursor: "not-allowed"
  }
});
