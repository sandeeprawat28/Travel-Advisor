import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <Card elevation={4}>
      <CardMedia
        style={{ height: 200 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent className={classes.Card}>
        <Typography gutterBottom variant="h6">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={1}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography variant="subtitle1">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Price</Typography>
          <Typography gutterBottom variant="body2">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Ranking</Typography>
          <Typography gutterBottom variant="body2">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip variant="default" color="primary" key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="black" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <Box display="flex" margin="8px" justifyContent="space-around" ma alignItems="center">
        <Button size="small" variant="contained" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" variant="contained" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </Box>
    </Card>
  );
};

export default PlaceDetails;
