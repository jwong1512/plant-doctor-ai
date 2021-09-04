import React from 'react'
import {
    Grid,
    Button,
    makeStyles,
    TextField,
    Container
} from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles({
    containerStyle: {
        paddingTop: '1em',
        // paddingLeft: '10em',
        // paddingRight: '10em'
    },    
    buttons: {
        marginTop: '25px',
        marginBottom: '30px'
    },
    field: {
        marginTop: '20px',
        marginBottom: '20px',
        display: 'block'        
    }
})

const AddPlant = () => {
    const classes = useStyles()
    return (
        <Container className={classes.containerStyle}>
            <Grid container >
                <Grid item xs={12} sm={12} md={6} lg={6}>

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
                    <form>
                        <TextField
                            className={classes.field}
                            label="Plant Name"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            className={classes.field}
                            label="Disease"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            className={classes.field}
                            label="Cure"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            className={classes.field}
                            label="Age (months)"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            className={classes.field}
                            label="Height (cm)"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            className={classes.field}
                            label="Details"
                            variant="filled"
                            placeholder="Details about the plant..."
                            fullWidth
                            multiline
                            rows={8}
                        />
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddPlant
