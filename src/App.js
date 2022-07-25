import { ThemeProvider, createTheme } from "@mui/material/styles";
import MyRoutes from "./Routes";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
