import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
    Drawer, 
    List, 
    ListItem, 
    ListItemSecondaryAction,
    ListItemText, 
    ListItemIcon,
    IconButton,
    makeStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    menuIconContainer: {
        marginLeft: 'auto',
        color: '#fcfcfc'
    }
}));



const DrawerComponent = ({ menuItems }) => {
    const [openDrawer, setOpenDrawer] = useState(true);
    const classes = useStyles()
    const history = useHistory()

    const handleListChange = (e, path) => {
        history.push(path)
        setOpenDrawer(false)
    }

    return (
        <>
        <Drawer
            className={classes.drawer}
            anchor='right'
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}
        >
            <List
                className={classes.list}
            >
                {
                    menuItems.map(item => (
                    <ListItem key={item.path} divider button onClick={(e) => handleListChange(e, item.path)}>   
                        <ListItemIcon >
                        <ListItemText primary={item.title} />
                        </ListItemIcon>
                    </ListItem>
                    ))
                }
            </List>
        </Drawer>
        <IconButton className={classes.menuIconContainer} onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
        </IconButton>
        </>
    )
}

export default DrawerComponent
