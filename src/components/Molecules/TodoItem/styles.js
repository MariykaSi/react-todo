import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  item: {
    width: "100%",
    textAlign: "center",

    [mediaQueries.small]: {
      width: "33.3%",
      textAlign: "left"
    }
  }
});
