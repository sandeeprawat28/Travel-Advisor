import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '3px',
    '&:hover': { boxShadow: '-2px 2px 7px 1px rgba(2,22,92,0.43)' },
  },
  subtitle: {
    display: 'flex', alignItems: 'center', paddingRight: '5px', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', paddingRight: '5px', justifyContent: 'space-between',
  },
}));
