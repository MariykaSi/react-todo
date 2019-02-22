import { StyleSheet } from "aphrodite/no-important";
import { colors } from "../../styles/variables";

export default StyleSheet.create({
  page: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },

  main: {
    flex: "1 1",
    borderTop: `1px solid ${colors.grayEE}`
  },

  signinError: {
    textAlign: "center",
    fontWeight: 600
  }
});
