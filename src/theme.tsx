import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EC982F',
    },
    secondary: {
      main: '#609890',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
