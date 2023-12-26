import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4962fd",
    },
    secondary: {
      main: "#0095eb",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "'Founders Grotesk Text',sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
      textDecoration: "none",
    },
  },
});

export default theme;
