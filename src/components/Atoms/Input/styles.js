import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  input: {
    fontWeight: 500,
    fontSize: 13,
    marginLeft: 5,
    padding: 10,
    border: `1px solid ${colors.gray}`,
    borderRadius: "4px",
    minWidth: 200
  },

  error: {
    display: "block",
    textAlign: "center",
    color: colors.red
  }
});
