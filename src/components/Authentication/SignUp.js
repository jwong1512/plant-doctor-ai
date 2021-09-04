import React from 'react'
import PropTypes from 'prop-types'
import {
    TextField,
    Divider,
    Button,
    Grid
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import PersonAddIcon from '@material-ui/icons/PersonAdd'

const SignUp = props => {

    const { signUp, onChange, formState, updateFormState } = props;

    return (
    //     <div>
    //         <input name="username" onChange={onChange} placeholder="Email" />
    //         <input name="password" type="password" onChange={onChange} placeholder="password" />
    //         {/* <input name="email" onChange={onChange} placeholder="email" /> */}
    //         <input name="givenname" onChange={onChange} placeholder="Given Name" />
    //         <input name="lastname" onChange={onChange} placeholder="Last Name" />
    //         <button onClick={signUp}>Sign Up</button>
    //         <button onClick={() => updateFormState(() => ({
    //         ...formState, formType: "signIn"
    //         }))}>
    //         Sign In
    //         </button>
            
    //   </div>


    <div>
    <div>
        <div className="icon">
            <div className="icon_class">
                <PersonAddIcon fontSize="large"/>
            </div>
            <div className="text">Sign Up</div>
        </div>
    </div>
    <Grid container spacing={3}>
        <Grid item xs={6} md={6} lg={6}>
            <TextField
                name="firstname"
                id="firstname"
                onChange={onChange}
                type="text"
                variant="outlined"
                label="First Name"
                fullWidth
            />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
            <TextField 
                name="lastname"
                id="lastname"
                onChange={onChange}
                type="text"
                variant="outlined"
                label="Last Name"
                fullWidth
            />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
            <TextField 
                name="username" 
                id="username" 
                onChange={onChange}
                className="p-2" 
                type="text" 
                variant="outlined" 
                label="Enter Email" 
                fullWidth 
            />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
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

        <Grid item xs={12} md={12} lg={12}>
            <Button 
                variant="contained" 
                color="primary" 
                fullWidth
                onClick={signUp}
            >Create Account</Button>
        </Grid>                

        <Divider variant="middle" />

        <p className="text-center">
            <Link className="text-black-50" onClick={() => updateFormState(() => ({...formState, formType: "signIn"}))}>
                <h5>Already have an Account?</h5>
            </Link>
        </p>

    </Grid>    
    </div>
    )
}

SignUp.propTypes = {

}

export default SignUp
