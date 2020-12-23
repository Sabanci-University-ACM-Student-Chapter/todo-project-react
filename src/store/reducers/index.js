import {combineReducers} from 'redux'
import ProjectReducer from './projects'
import TodoReducer from './todos'
import actualTodoReducer from './actual'




const rootReducer = combineReducers({
    Projects: ProjectReducer,
    Todos: TodoReducer ,
    Actual : actualTodoReducer
})

export default rootReducer