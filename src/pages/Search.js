import React, { useState, useEffect } from 'react'
import {
    Typography,
    Container,
    makeStyles,
    withStyles,
    TextField,
    Paper,
    TableCell,
    TableRow,
    Grid,
    Button,
    Checkbox,
    FormGroup,
    FormControlLabel
} from '@material-ui/core'

import SearchComponent from '../components/SearchComponent'
import SearchIcon from '@material-ui/icons/Search';
import { RiUserSharedFill } from 'react-icons/ri';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    containerStyle: {
        paddingTop: '2em',
        // paddingLeft: '10em',
        // paddingRight: '10em'
    },
    search: {
        width: "60%",
    },
    searchfield: {
        marginTop: "2em",
        marginBottom: "2em"
    },
    searchFieldIcon: {
        paddingTop: "15px",
        paddingRight: "10px"
    },
    userPaper: {
        padding: '10px',
        width: '100%',
        margin: "5px",
        background: "#ebfdff",
        display: "inline-block"
    },
    adminPaper: {
        padding: '10px',
        width: '100%',
        margin: "5px",
        background: "#fff6ff",
        display: "inline-block"
    },   
    plantPaper: {
        padding: '10px',
        width: '100%',
        margin: "5px",
        background: "#dffbdf",
        display: "inline-block"
    },     
    paperTitle: {
        flexGrow: 1
    },
    subTitle: {
        paddingLeft: '3em'
    },
    buttons: {
        background: "#000000",
        color: "#fcfcfc",
        "&:hover": {
            color: "#000000"
        }
    },
    results: {
        marginTop: '2em'
    }
})


const Search = () => {
    const classes = useStyles()

    const [filter, setFilter] = useState('')
    const [users, setUsers] = useState(null)
    const [admins, setAdmins] = useState(null)
    const [plants, setPlants] = useState(null)

    const [state, setState] = React.useState({
        checkedUser: true,
        checkedPlant: false,
        checkedAdmin: false
      });

    // https://jv4185vu77.execute-api.us-east-1.amazonaws.com/dev/users
    useEffect(() => {
        fetch('https://jv4185vu77.execute-api.us-east-1.amazonaws.com/dev/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data["Items"])
            console.log(data["Items"])
        })
    }, [])

    useEffect(() => {
        fetch('https://jv4185vu77.execute-api.us-east-1.amazonaws.com/dev/admins')
        .then(res => res.json())
        .then(data => {
            setAdmins(data["Items"])
            console.log(data["Items"])
        })
    }, [])    

    useEffect(() => {
        fetch('https://jv4185vu77.execute-api.us-east-1.amazonaws.com/dev/plants')
        .then(res => res.json())
        .then(data => {
            setPlants(data["Items"])
            console.log(data["Items"])
        })
    }, [])      

    const getUser = (user) => {
        // console.log(result)
        const userid = user.id - 1
        // console.log(value)
        const { id, givenNames, lastName, email, mobileNumber, business, password, confirmpassword } = users[userid];
        if (users[userid]) {
            return (
                <Paper
                className={classes.userPaper}
                variant="outlined"
                >
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography
                                className={classes.paperTitle}
                                variant="h5"
                                color="primary"
                            >
                                <span style={{ color: '#0000ff', fontSize: '0.5em', verticalAlign: 'middle', paddingRight: '1em' }}>(User)</span>{givenNames} {lastName}
                            </Typography>
                            <Typography
                                color="secondary"
                                className={classes.subTitle}
                            >
                                {business}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                {email}
                            </Typography>
                            <Typography>
                                {mobileNumber}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} align="right">
                            <Button
                            className={classes.buttons}
                            variant="contained"
                            >
                                Edit
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>

            )
        }
    }

    const getAdmin = (admin) => {
        // console.log(result)
        const adminid = admin.id - 1
        // console.log(value)
        const { id, givenNames, lastName, email, mobileNumber, password, confirmpassword } = admins[adminid];
        if (admins[adminid]) {
            return (
                <Paper
                className={classes.adminPaper}
                variant="outlined"
                >
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography
                                className={classes.paperTitle}
                                variant="h5"
                                color="primary"
                            >
                                <span style={{ color: '#800080', fontSize: '0.5em', verticalAlign: 'middle', paddingRight: '1em' }}>(Admin)</span>{givenNames} {lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                {email}
                            </Typography>
                            <Typography>
                                {mobileNumber}
                            </Typography>                            
                        </Grid>
                        <Grid item xs={4} align="right">
                            <Button
                            className={classes.buttons}
                            variant="contained"
                            >
                                Edit
                            </Button>                           
                        </Grid>                        
                    </Grid>
                </Paper>

            )
        }         
    }

    const getPlant = (plant) => {
        // console.log(result)
        const plantid = plant.id - 1
        // console.log(value)
        const { id, plantName, disease, cure, age, height, details } = plants[plantid];
        if (plants[plantid]) {
            return (
                <Paper
                className={classes.plantPaper}
                variant="outlined"
                >
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography
                                className={classes.paperTitle}
                                variant="h5"
                                color="primary"
                            >
                                <span style={{ color: '#005600', fontSize: '0.5em', verticalAlign: 'middle', paddingRight: '1em' }}>(Plant)</span>{plantName}
                            </Typography>
                            <Typography color="secondary" className={classes.subTitle}>
                                Disease: {disease}
                            </Typography>
                            <Typography color="secondary" className={classes.subTitle}>
                                Cure: {cure}
                            </Typography>                              
                        </Grid>
                        <Grid item xs={4}>
                                {details}
                        </Grid>
                        <Grid item xs={4} align="right">
                            <Button
                            className={classes.buttons}
                            variant="contained"
                            >
                                Edit
                            </Button>                           
                        </Grid>                        
                    </Grid>
                </Paper>

            )
        }         
    }

    const handleSearchChange =e => {
        setFilter(e.target.value)
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(state)
    };

    return (
        <Container className={classes.containerStyle}>
            <Typography
            variant="h4"
            >
                Search Page
            </Typography>

            {/* Search Functionality */}
            <div className={classes.searchfield}>
                <SearchIcon className={classes.searchFieldIcon}/>
                <TextField 
                onChange={handleSearchChange}
                className={classes.search}
                label="Search"
                variant="filled"
                placeholder="Search for plant, disease, user..."
                />
            </div>

            {/* Checkboxes */}
            <FormGroup row>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.checkedUser}
                        onChange={handleChange}
                        name="checkedUser"
                        color="primary"
                    />
                    }
                    label="User"
                />  
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.checkedPlant}
                        onChange={handleChange}
                        name="checkedPlant"
                        color="primary"
                    />
                    }
                    label="Plant"
                />                     
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.checkedAdmin}
                        onChange={handleChange}
                        name="checkedAdmin"
                        color="primary"
                    />
                    }
                    label="Admin"
                />                                             
            </FormGroup>

            {/* Results */}
            <div className={classes.results}>
            {
                users && state.checkedUser ? (
                    users.map(user => (
                    <div key={user.id - 1}>
                        {
                        (
                            users[user.id - 1].givenNames.toUpperCase().includes(filter.toUpperCase()) || 
                            users[user.id - 1].lastName.toUpperCase().includes(filter.toUpperCase()) ||
                            users[user.id - 1].email.toUpperCase().includes(filter.toUpperCase()) ||
                            users[user.id - 1].business.toUpperCase().includes(filter.toUpperCase())
                        )
                        && users[user.id - 1] && filter != '' &&
                        getUser(user)
                        }
                    </div>
                ))
                ) : null
            }

            {
                admins && state.checkedAdmin ? (
                        admins.map(admin => (
                        <div key={admin.id - 1}>
                            {
                            (
                                admins[admin.id - 1].givenNames.toUpperCase().includes(filter.toUpperCase()) || 
                                admins[admin.id - 1].lastName.toUpperCase().includes(filter.toUpperCase()) ||
                                admins[admin.id - 1].email.toUpperCase().includes(filter.toUpperCase())
                            )
                            && admins[admin.id - 1] && filter != '' &&
                            getAdmin(admin)
                            }
                        </div>
                    ))
                ) : null
            }       

            {
                plants && state.checkedPlant ? (
                    plants.map(plant => (
                        <div key={plant.id - 1}>
                            {
                            (
                                plants[plant.id - 1].plantName.toUpperCase().includes(filter.toUpperCase()) || 
                                plants[plant.id - 1].disease.toUpperCase().includes(filter.toUpperCase()) ||
                                plants[plant.id - 1].cure.toUpperCase().includes(filter.toUpperCase()) ||
                                plants[plant.id - 1].details.toUpperCase().includes(filter.toUpperCase())
                            )
                            && plants[plant.id - 1] && filter != '' &&
                            getPlant(plant)
                            }
                        </div>
                    ))
                ) : null
            }    
            </div>                  
        </Container>
    )
}

export default Search
