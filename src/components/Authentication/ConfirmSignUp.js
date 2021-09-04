import React from 'react'
import PropTypes from 'prop-types'

import {
    TextField,
    Button,
    Divider,
    Grid
} from '@material-ui/core'

import { Link } from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const ConfirmSignUp = props => {

    const { onChange, confirmSignUp, updateFormState, formState, authCode } = props;

    return (
        // <div>
        //     <input name="authCode" onChange={onChange} placeholder="Confirmation code" />
        //     <button onClick={confirmSignUp}>Confirm Sign Up</button>
        // </div>

        <div>
            <div className="icon">
                <div className="icon_class">
                    <CheckBoxIcon fontSize="large"/>
                </div>
                <div className="text">Confirm Sign Up</div>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField 
                        name="authCode"
                        id="authCode" 
                        onChange={onChange}
                        className="p-2" 
                        type="text" 
                        variant="outlined" 
                        label="Enter Confirmation Code" 
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={confirmSignUp}
                    >
                        Submit Code
                    </Button>
                </Grid>

                {/* <Divider variant="middle" />
                <p className="text-center">
                    <Link to="/" className="text-black-50" onClick={() => updateFormState(() => ({...formState, formType: "signUp"}))}>
                        <h5>Create Account</h5>
                    </Link>
                </p> */}

            </Grid>
        </div>              
    )
}

ConfirmSignUp.propTypes = {

}

export default ConfirmSignUp
