import React, { useState } from 'react';
import Navbar from './NavBar/NavBar';
import {
    makeStyles,
    Container,
    useMediaQuery,
    useTheme
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    navbarSpacing: {
        marginTop: '65px'
    },
    page: {
        height: '100vh',
        background: '#ffffec'
    }
}))

const Layout = ({children}) => {
    const classes = useStyles()
    return (
        <div className={classes.page}>
            <Navbar />
            <div className={classes.navbarSpacing} />
            {children}
        </div>
      );
}


export default Layout;