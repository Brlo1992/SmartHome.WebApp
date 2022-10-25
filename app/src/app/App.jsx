import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Menu from '../menu/menu';
import Cookbook from '../cookbook/cookbook';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Menu />
      <Cookbook />
      
    </ThemeProvider>
  ); 
}

export default App;