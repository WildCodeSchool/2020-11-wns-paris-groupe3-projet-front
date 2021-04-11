import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        width: '70vw',
        maxWidth: 800,
      },
    },
    MuiCardContent: {
      root: {
        margin: 40,
      },
    },
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: '#609890',
        },
        '&$active': {
          color: '#EC982F',
        },
      },
      active: {},
      completed: {},
    },
    MuiStepConnector: {
      completed: {
        '& $line': {
          borderColor: '#609890',
        },
      },
      active: {
        '& $line': {
          borderColor: '#609890',
        },
      },
      line: {
        borderTopWidth: 3,
        borderRadius: 1,
      },
    },
    // MuiInput: {
    //   root: {
    //     borderRadius: 50,
    //     border: 2,
    //   },
    // },
  },
  palette: {
    primary: {
      // orange
      main: '#EC982F',
      contrastText: '#fff',
    },
    secondary: {
      // blue green
      main: '#609890',
    },
    error: {
      // red
      main: red.A400,
    },
    background: {
      // white
      default: '#fff',
    },
  },
});

export default theme;
