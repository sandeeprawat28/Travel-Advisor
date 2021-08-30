import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: '30px',
    marginTop: '30px',
  },
  input: {
    color: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    marginLeft: '24px',
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '8px',
      marginLeft: '22px',
      marginRight: '0px',
    },
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '73.5vh',
    overflow: 'auto',
  },
}));
