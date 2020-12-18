import CounterReducer from './counter'
import NameReducer from './name'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    counter : CounterReducer,
    counter2 : NameReducer
})

export default rootReducer