import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import PersonIcon from '@material-ui/icons/Person'
import { Button } from '@material-ui/core'


function Search() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection'
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className="search">
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests
                <PersonIcon />
            </h2>
            <input
                min={0}
                defaultValue={2}
                type='number'
            />
            <Button className='search-btn'>Search Airbnb</Button>
        </div>
    )
}

export default Search
