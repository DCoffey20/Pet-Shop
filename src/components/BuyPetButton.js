import React, { useEffect, useState } from 'react';
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

  const updateSoldPets = () => {
    console.log("Original Status: " + props.pet.status)
    API.updatePetStatus(props.pet)
    .then((res) => {
      console.log("New Status: " + props.pet.status)
      console.log(props)
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