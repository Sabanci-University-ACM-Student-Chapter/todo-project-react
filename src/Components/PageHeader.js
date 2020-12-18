import React from 'react'
import { useSelector } from 'react-redux'
import CounterReducer from '../store/reducers/counter'

function PageHeader() {

    const counter = useSelector(state => state.counter)
    const counter2 = useSelector(state => state.counter2)


    
    return (
        <div className="PageHeader">
            <h4> {counter} </h4>
            <h1> {counter2} </h1>
            <div className="minInfo">
                <p> Note Category </p>
                <p> Date </p>
            </div>
        </div>
    )
}

export default PageHeader
