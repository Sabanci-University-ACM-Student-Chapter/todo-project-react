import {combineReducers} from 'redux'
import ProjectReducer from './projects'
import TodoReducer from './todos'
import actualTodoReducer from './actual'
import screenSizeReducer from './screenSize'

// root reducer where is all reducers are combined.

const rootReducer = combineReducers({
    Projects: ProjectReducer, 
    Todos: TodoReducer ,
    Actual : actualTodoReducer,
    ScreenSize: screenSizeReducer
})

export default rootReducer