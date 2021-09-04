import React, { useState, useEffect } from 'react'
import {
    Typography,
    TextField,
    makeStyles,
    Button,
    IconButton
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import { GiCardJackClubs } from 'react-icons/gi';

const useStyles = makeStyles({
    search: {
        width: "60%",
    },
    searchfield: {
        marginTop: "1em"
    },
    searchFieldIcon: {
        paddingTop: "15px",
        paddingRight: "10px"
    }
})

const SearchComponent = ({results, getUser}) => {
    const classes = useStyles()
    const [filter, setFilter] = useState('')

    const handleSearchChange =e => {
        setFilter(e.target.value)
    }


    return (
        <div className={classes.searchfield}>
            <SearchIcon className={classes.searchFieldIcon}/>
            <TextField 
            onChange={handleSearchChange}
            className={classes.search}
            label="Search"
            variant="outlined"
            placeholder="Search for plant, disease, user..."
            />
            {
                results ? (
                results.map(result => (
                    <p key={result.id}>
                        {
                        (
                            results[result.id - 1].givenNames.includes(filter) || 
                            results[result.id - 1].lastName.includes(filter) ||
                            results[result.id - 1].email.includes(filter) ||
                            results[result.id - 1].business.includes(filter)
                        )
                        && results[result.id - 1] && getUser(result.id - 1)
                        }
                    </p>
                ))
                ) : null
            }
        </div>
    )
}

export default SearchComponent
