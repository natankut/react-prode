import Navigation from './routes/Navigation';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';


function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navigation/>
      </div>
    </ThemeProvider>
  );
}

export default App;
