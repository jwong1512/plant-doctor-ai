import React from 'react'
import PropTypes from 'prop-types'

import {
    TextField,
    Button,
    Divider,
    FormControlLabel,
    Checkbox,
    Grid
} from '@material-ui/core'

import { Link } from 'react-router-dom';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonIcon from '@material-ui/icons/Person';

const SignIn = props => {

    const { onChange, signIn, formState, updateFormState } = props;

    return (
        <div>
            <div className="icon">
                <div className="icon_class">
                    <PersonIcon fontSize="large"/>
                </div>
                <div className="text">Sign In</div>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField 
                        name="username"
                        id="username" 
                        onChange={onChange}
                        className="p-2" 
                        type="text" 
                        variant="outlined" 
                        label="Enter Email" 
                        fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        name="password"
                        id="password" 
                        onChange={onChange}
                        className="p-2" 
                        type="password" 
                        variant="outlined" 
                        label="Enter Password" 
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={signIn}
                    >
                        Log In
                    </Button>
                </Grid>

                <Divider variant="middle" />
                <p className="text-center">
                    <Link className="text-black-50" onClick={() => updateFormState(() => ({...formState, formType: "signUp"}))}>
                        <h5>Create Account</h5>
                    </Link>
                </p>

            </Grid>
        </div>        
    )
}

SignIn.propTypes = {

}

export default SignIn
