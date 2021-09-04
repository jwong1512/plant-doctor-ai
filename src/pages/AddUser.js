import React, { useState } from 'react'
import {
    makeStyles,
    Container,
    TextField,
    Radio,
    Button,
    Snackbar
} from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles(theme => ({
    containerStyle: {
        paddingTop: '1em',
        // paddingLeft: '10em',
        // paddingRight: '10em'
    },
    field: {
        marginTop: '20px',
        marginBottom: '20px',
        display: 'block'
    }
}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddUser = () => {
    const classes = useStyles()

    // Fields
    const [givenNames, setGivenNames] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [business, setBusiness] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    // Errors
    const [givenNamesError, setGivenNamesError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [mobileNumberError, setMobileNumberError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmpasswordError, setConfirmpasswordError] = useState(false)

    // Snackbar
    const [open, setOpen] = React.useState(false);


    const handleSubmit = e => {
        e.preventDefault()
        // Initialize errors to false
        setGivenNamesError(false)
        setLastNameError(false)
        setEmailError(false)
        setMobileNumberError(false)
        setPasswordError(false)
        setConfirmpasswordError(false)

        // Error validation
        if (givenNames == '') setGivenNamesError(true);
        if (lastName == '') setLastNameError(true);
        if (email == '') setEmailError(true);
        if (mobileNumber == '') setMobileNumberError(true);
        if (password == '') setPasswordError(true);
        if (confirmpassword == '') setConfirmpasswordError(true);
        if (password != confirmpassword) setConfirmpasswordError(true);

        // POST to database
        if (givenNames && lastName && email && mobileNumber && password && confirmpassword && password == confirmpassword) {
            console.log(givenNames, lastName, email, mobileNumber);

            let formData = new FormData()
            formData.append('givenNames', givenNames)
            formData.append('lastName', lastName)
            formData.append('business', business)
            formData.append('email', email)
            formData.append('mobileNumber', mobileNumber)
            formData.append('password', password)
            formData.append('confirmpassword', confirmpassword)

            fetch('https://jv4185vu77.execute-api.us-east-1.amazonaws.com/dev/users', {
              method: 'POST',
              mode: 'no-cors',
              body: formData
            })
            console.log(JSON.stringify({givenNames, lastName, email, mobileNumber, business, password, confirmpassword}))
            setOpen(true)
            setGivenNames('');
            setLastName('');
            setEmail('');
            setMobileNumber('');
            setBusiness('');
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
        <Container className={classes.containerStyle}>
            <div className={classes.background}>
                <h1>Add User</h1>
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
                    <TextField 
                        onChange={(e) => setBusiness(e.target.value)}
                        className={classes.field}
                        label="Business/Farm"
                        variant="filled"
                        fullWidth
                    />           
                    <br/>
                    <TextField 
                        onChange={(e) => setPassword(e.target.value)}
                        className={classes.field}
                        label="Type Password"
                        variant="filled"
                        fullWidth
                        required
                        type="password"
                        error={passwordError}
                    />
                    <TextField 
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        className={classes.field}
                        label="Confirm Password"
                        variant="filled"
                        fullWidth
                        required
                        type="password"
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
                    New User Added!
                    </Alert>
                </Snackbar>
            </div>
        </Container>
    )
}

export default AddUser