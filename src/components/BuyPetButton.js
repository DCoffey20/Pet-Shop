import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import API from '../util/API';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButPetButton(props) {
  const classes = useStyles();

  function log(){
    console.log(props)
  }

  const updateSoldPets = () => {
    console.log(props.name)
    API.updatePetStatus(props.id, props.name)
    .then((res) => {
      console.log(res.data)
    })
    .catch(err => console.log(err));
  }

  return (
    <div className={classes.root}>
      <Button onClick={e => updateSoldPets()} variant="contained" color="primary">
        Purchase
      </Button>
    </div>
  );
}