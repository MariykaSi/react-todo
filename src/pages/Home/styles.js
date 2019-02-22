import { StyleSheet } from "aphrodite/no-important";
import { colors } from "../../styles/variables";

export default StyleSheet.create({
  page: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },

  loading: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: "999",
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.6)"
  },
  container: {
    padding: "20px 0",
    maxWidth: 1200,
    margin: "0 auto"
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },

  main: {
    flex: "1 1",
    borderTop: `1px solid ${colors.grayEE}`
  },

  topRow: {
    textAlign: "center"
  }
});
