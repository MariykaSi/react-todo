import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  form: {
    maxWidth: 1000,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    flexDirection: "column",

    [mediaQueries.small]: {
      flexDirection: "row"
    }
  },

  row: {
    margin: "5px 0",

    [mediaQueries.small]: {
      margin: 0
    }
  }
});
