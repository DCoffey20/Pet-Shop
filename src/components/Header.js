import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import { classExpression } from '@babel/types';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        textAlign: 'center',
        mb: 2,
    },
}));

function Header(props) {
    const classes = useStyles();
    const [status, setStatus] = useState("sold")

    function availableOrSold() {
        // console.log(props.onChange)
        // console.log(status)
        if (props.displayStatus !== "sold") {
            setStatus("available")
        } else {
            setStatus("sold")
        }

    }

    function updateStatusDisplay() {
        if (props.displayStatus === "available") {
            props.onChange("sold")
        } else {
            props.onChange("available")
        }
    }

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <h1 justifycontent="center">CDI Pet Shop</h1>
                <div>
                    <Button onClick={e => {availableOrSold();updateStatusDisplay()}} variant="contained" color="primary">
                        Click button to see pets that are {status}!
                    </Button>
                </div>
            </header>
        </div>
    )
};

export default Header;