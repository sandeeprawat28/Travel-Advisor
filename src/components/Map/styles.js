import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '120px',
    transition: 'transform .2s',
    '&:hover': { transform: 'scale(1.2)' },
  },
  mapContainer: {
    height: '83vh',
    width: '100%',
    marginTop: '40px',
    boxShadow: '-2px 2px 16px 2px rgba(0,0,0,0.25)',
    [theme.breakpoints.down('sm')]: {
      height: '80vh',
      marginTop: '20px',
      marginBottom: '20px',
      marginLeft: '22px',
      marginRight: '0px',
    },
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
}));
