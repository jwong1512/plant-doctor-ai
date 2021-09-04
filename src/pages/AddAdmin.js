import React, { useState, useEffect } from 'react'
import {
    makeStyles,
    Container,
    TextField,
    Radio,
    Button,
    Snackbar
} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    containerStyle: {
        paddingTop: '1em',
        // paddingLeft: '10em',
        // paddingRight: '10em'
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'        
    }
}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddAdmin = () => {
    const classes = useStyles()

    const [givenNames, setGivenNames] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const [givenNamesError, setGiveNamesError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [mobileNumberError, setMobileNumberError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmpasswordError, setConfirmpasswordError] = useState(false)

    const [open, setOpen] = React.useState(false);

    const handleSubmit = e => {
        e.preventDefault()

        setGiveNamesError(false)
        setLastNameError(false)
        setEmailError(false)
        setMobileNumberError(false)
        setPasswordError(false)
        setConfirmpasswordError(false)
        
        console.log(givenNamesError)

        if (givenNames == '') setGiveNamesError(true);
        if (lastName == '') setLastNameError(true);
        if (email == '') setEmailError(true);
        if (mobileNumber == '') setMobileNumberError(true);
        if (password == '') setPasswordError(true);
        if (confirmpassword == '') setConfirmpasswordError(true);
        if (password != confirmpassword) setConfirmpasswordError(true);

        console.log(givenNamesError)

        if (givenNames && lastName && email && mobileNumber && password && confirmpassword && password == confirmpassword) {

            let formData = new FormData()
            formData.append('givenNames', givenNames)
            formData.append('lastName', lastName)
            formData.append('email', email)
            formData.append('mobileNumber', mobileNumber)
            formData.append('password', password)
            formData.append('confirmpassword', confirmpassword)

            fetch('https://jv4185vu77.execute-api.us-east-1.amazonaws.com/dev/admins', {
              method: 'POST',
              mode: 'no-cors',
              body: formData
            })
            setOpen(true)
            setGivenNames('');
            setLastName('');
            setEmail('');
            setMobileNumber('');
            setPassword('')
            setConfirmpassword('')     
            e.target.reset(); 
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Container className={classes.containerStyle}>
            <div className={classes.background}>
                <h1>Add Administrator</h1>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <TextField 
                        onChange={(e) => setGivenNames(e.target.value)}
                        className={classes.field}
                        label="Given Names"
                        variant="filled"
                        fullWidth
                        required
                        error={givenNamesError}
                    />
                    <TextField 
                        onChange={(e) => setLastName(e.target.value)}
                        className={classes.field}
                        label="Last Name"
                        variant="filled"
                        fullWidth
                        required
                        error={lastNameError}
                    />
                    <TextField 
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.field}
                        label="Email"
                        variant="filled"
                        fullWidth
                        required
                        error={emailError}
                    />
                    <TextField 
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className={classes.field}
                        label="Mobile Number"
                        variant="filled"
                        fullWidth
                        required
                        error={mobileNumberError}
                    />     
                    <br/>
                    <TextField 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={classes.field}
                        label="Type Password"
                        variant="filled"
                        fullWidth
                        required
                        error={passwordError}
                    />
                    <TextField 
                        type="password"
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        className={classes.field}
                        label="Confirm Password"
                        variant="filled"
                        fullWidth
                        required
                        error={confirmpasswordError}
                    />        
                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                    endIcon={<KeyboardArrowRightIcon />}
                    >
                        Submit
                    </Button>                                                                                                     
                </form>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                    New Administrator Added!
                    </Alert>
                </Snackbar>                  
            </div>
        </Container> 
        </div>
    )
}

export default AddAdmin
