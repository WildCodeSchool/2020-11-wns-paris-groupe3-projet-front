import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    border: `3px solid ${theme.palette.primary.main}`,
    backgroundColor: 'white',
    padding: theme.spacing(2, 4, 3),
    borderRadius: '5px',
    outline: 'none',
    lineHeight: '2em',
  },
}));
