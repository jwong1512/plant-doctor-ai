import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { 
    AppBar, 
    Tab, 
    Tabs, 
    Typography, 
    Toolbar, 
    Button,
    makeStyles,
    Menu,
    MenuList,
    MenuItem,
    useMediaQuery,
    useTheme
} from '@material-ui/core';

import HouseIcon from '@material-ui/icons/House';
import AccessibleIcon from '@material-ui/icons/Accessible';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EcoIcon from '@material-ui/icons/Eco';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FindInPageIcon from '@material-ui/icons/FindInPage';

import { GiBookAura } from 'react-icons/gi'
import { FiBookOpen } from 'react-icons/fi'
import { RiMoneyPoundCircleLine } from 'react-icons/ri'
import { BsFillPersonPlusFill, BsFillBrightnessHighFill } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { ImHappy } from 'react-icons/im'
import { RiPlantFill } from 'react-icons/ri'


import DrawerComponent from './DrawerComponent/DrawerComponent'

import { Auth, Hub } from 'aws-amplify';

const useStyles = makeStyles(theme => ({
    icons: {
        fontSize: '1.4rem',
    },
    iconLogo: {
        color: 'green',
        fontSize: '3rem'
    },
    accountButton: {
        marginLeft: 'auto',
        '&:hover': {
            background: 'green'
        }
    },
    navbarSpacing: {
        marginTop: '80px'
    }

}))


const menuItems = [
    {
        title: 'Home',
        icon: <HouseIcon />,
        path: '/'
    },
    {
        title: 'Scan Plant',
        icon: <LocalHospitalIcon />,
        path: '/scanplant'
    },
    {
        title: 'Add User',
        icon: <PersonAddIcon />,
        path: '/adduser'
    },
    {
        title: 'Add Admin',
        icon: <SupervisorAccountIcon />,
        path: '/addadmin'
    },
    {
        title: 'Add Plant',
        icon: <EcoIcon />,
        path: '/addplant'
    },
    {
        title: 'Search',
        icon: <FindInPageIcon />,
        path: '/search'
    }
]

const Navbar = ({children}) => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const history = useHistory()

    const handleClickTab = (e, newValue) => {
        setValue(newValue)
        console.log(newValue)
    }

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    // Breakpoints
    const theme = useTheme()
    // For the useMediaQuery() function, you can pass in the number of pixels or you 
    // can pass in a Material UI theme number.
    // What the below is saying is that any side that is below the theme Breakpoint of 
    // small (sm) set isMatch to true.
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
        <AppBar color='primary'>
            <Toolbar>
                <Typography>
                    <RiPlantFill className={classes.iconLogo}/>
                </Typography>
                {
                    isMatch ? (<DrawerComponent menuItems={menuItems} />) : (
                        <>
                            <Tabs
                            onChange={handleClickTab} 
                            indicatorColor='secondary' 
                            value={value}
                        >
                            {/* disableRipple gets rid of the ripple effect when you click on the Tab */}
                            {
                                menuItems.map(item => (
                                    <Tab icon={item.icon} disableRipple label={item.title} onClick={() => history.push(item.path)}/>
                                ))
                            }
                        </Tabs>
                        <Button
                            aria-controls='menu'
                            onClick={handleOpenMenu}
                            className={classes.accountButton}
                            color='secondary'
                            variant='contained'
                        >LOG OUT
                        </Button>
                    </>
                    )
                }
            </Toolbar>
        </AppBar>
        <Menu
            style={{ marginTop: '50px' }}
            id='menu' 
            onClose={handleMenuClose} 
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)}
        >
            <MenuItem onClick={handleMenuClose}>
                <span onClick={() => Auth.signOut()}>Logout</span>
            </MenuItem>
        </Menu>
        </>
    )
}

export default Navbar;