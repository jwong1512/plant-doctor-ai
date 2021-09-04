import React from 'react'
import PropTypes from 'prop-types'

import { Auth, Hub } from 'aws-amplify';

const SignOut = props => {
    return (
        <div>
            <h1>
            Hello and welcome user!
            </h1>
            <button onClick={
            () => Auth.signOut()
            }>Sign Out</button>
        </div>
    )
}

SignOut.propTypes = {

}

export default SignOut
