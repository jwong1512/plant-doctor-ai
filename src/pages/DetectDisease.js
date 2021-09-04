import React from 'react'
import {
    Grid,
    GridItem,
    Container,
    Typography,
    Button,
    makeStyles
} from '@material-ui/core'

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import BackspaceIcon from '@material-ui/icons/Backspace';

const useStyles = makeStyles({
    containerStyle: {
        paddingTop: '50px'
    },
    imagePanel: {
        height: '350px',
        border: '1px solid darkblue'
    },
    buttons: {
        display: 'block',
        marginBottom: '50px',
        marginTop: '25px'
    },
    results: {
        marginTop: '30px'
    }
})

const DetectDisease = () => {
    const classes = useStyles()
    return (
        <Container className={classes.containerStyle}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6} className={classes.imagePanel}>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} align="center">
                    <div className={classes.buttons}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large" 
                            endIcon={<PhotoCamera />}
                        >Upload Image
                        </Button>
                    </div>
                    <div className={classes.buttons}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large" 
                            endIcon={<BackspaceIcon />}
                        >Remove Image
                        </Button>
                    </div>
                    <div className={classes.buttons}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large" 
                            endIcon={<PlayCircleOutlineIcon />}
                        >Execute Model
                        </Button>
                    </div>
                </Grid>
                <Typography
                    variant="h4"
                    color="secondary"
                    className={classes.results}
                >
                    Results
                </Typography>
                <Grid item xs={12} sm={12} md={12} lg={12}>

                </Grid>
            </Grid>
        </Container>
    )
}

export default DetectDisease
