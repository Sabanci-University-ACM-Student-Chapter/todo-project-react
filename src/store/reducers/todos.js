import initialStates from './initialStates'

const todos = initialStates.todos;



const TodoReducer = (state=todos,action) => {
    switch(action.type){
        case 'CHANGE_COMPLETED':
            let todo = todos[action.self_id]
            todo.isCompleted = !todo.isCompleted
            return todos
            
        default:
            return state
    }
}

export default TodoReducer

