import React from 'react'
import useSelector from 'react-redux'


function MobileHeader() {
    const actual = useSelector(state => state.actual)
    
    return (
        <div>
            <h1> {actual.description || actual} </h1>
        </div>
    )
}

export default MobileHeader
