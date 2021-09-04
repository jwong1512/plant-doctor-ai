import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { 
    makeStyles,
    CssBaseline,
    Container,
    Collapse,
    IconButton
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { RiArrowGoBackFill } from 'react-icons/ri';

const useStyles = makeStyles({    
    root: {
        minHeight: '100vh',
        // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/forest-background.jpeg'})`,
        backgroundImage: `url(${'./assets/forest-background.jpeg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    heading: {
        paddingTop: '50px',
    },
    colorText: {
        color: '#5AFF3D',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: "#fff",
        fontSize: '4.5rem'
    },
    titleLower: {
        height: '30vh'
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '4rem',
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: "50%"
    },
})

const HomePage = props => {
    const classes = useStyles()

    const [checked, setChecked] = useState(false);

    useEffect(() => {
      setChecked(true);
    }, []);    

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container>

            <div className={classes.titleLower}></div>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                <h1 className={classes.title}>
                <span className={classes.colorText}>Plant</span> Doctor<br/>AI
                </h1>
                <Scroll to="place-to-visit" smooth={true}>
                    <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
                </div>
            </Collapse>

                {/* <Typography
                className={classes.heading}
                variant="h1"
                align="center"
                color="primary"
                >
                Plant Disease Detector
                </Typography>   */}
            </Container>
        </div>
    )
}

HomePage.propTypes = {

}

export default HomePage
