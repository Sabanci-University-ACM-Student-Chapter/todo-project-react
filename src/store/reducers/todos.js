import initialStates from './initialStates'

const todos = initialStates.todos;



const TodoReducer = (state=todos,action) => {
    switch(action.type){
        case 'CHANGE_COMPLETED':
            let todo = todos[action.self_id]
            todo.isCompleted = !todo.isCompleted
            return todos
        case 'UPDATE_DETAIL':
            let todo2 = todos[action.self_id]
            todo2.detail = action.text
            return todos
        case 'REMOVE_TODO':
            let rest2 = action.todos.slice()
            rest2.splice(action.self_id,1)
            console.log(rest2)
            rest2.forEach(element => {
                 if(element.self_id > action.self_id){
                     element.self_id -= 1
                 }
            })
            return rest2
        case 'ADD_TODO':
            let todos3 = [...action.todoList, action.newTodo]
            return todos3
        default:
            return state
    }
}

export default TodoReducer

