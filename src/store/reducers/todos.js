// import initialStates from './initialStates'

// const todos = initialStates.todos;
let todos = JSON.parse(localStorage.getItem("Todos")) || []

if(todos === []){
    let todos = []
    localStorage.setItem("Todos", JSON.stringify(todos));
  }




const TodoReducer = (state=todos,action) => {
    switch(action.type){
        case 'CHANGE_COMPLETED':
            let todo = todos[action.self_id] 
            todo.isCompleted = !todo.isCompleted
            localStorage.setItem("Todos", JSON.stringify(todos))
            return todos
        case 'UPDATE_DETAIL':
            // todos = JSON.parse(localStorage.getItem("Todos")) 
            let todo2 = todos[action.self_id]
            todo2.detail = action.text
            return todos
        case 'REMOVE_TODO':
            let rest2 = action.todos.slice()
            rest2.splice(action.self_id,1)
            rest2.forEach(element => {
                 if(element.self_id > action.self_id){
                     element.self_id -= 1
                 }
            })
            localStorage.setItem("Todos", JSON.stringify(rest2))
            return rest2
        case 'ADD_TODO':
            let todos3 = [...action.todoList, action.newTodo]
            localStorage.setItem("Todos", JSON.stringify(todos3))
            return todos3
        case 'CHANGE_LABEL':
            // todos = JSON.parse(localStorage.getItem("Todos")) 
            let todo3 = todos[action.self_id]
            todo3.category = action.newLabel
            localStorage.setItem("Todos", JSON.stringify(todos))
            return todos

        default:
            return state
    }
}

export default TodoReducer

