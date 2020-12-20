// import initialStates from './initialStates'
// let todos = initialStates.todos
// console.log(todos)


function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const obj1 = a.self_id;
    const obj2 = b.self_id;
  
    let comparison = 0;
    if (obj1 > obj2) {
      comparison = 1;
    } else if (obj1 < obj2) {
      comparison = -1;
    }
    return comparison;
  }


const ActualTodoReducer = (state='INBOX',action) => {
    
    // const dispatch = useDispatch()

    switch(action.type){
        case 'CHANGE_ACTUAL':
            let actualTodo = action.todos[action.self_id] || action.todos[1] || {type:'EMPTY'}
            if(actualTodo.type === 'EMPTY'){
                return 'INBOX'
            }
            actualTodo.actual = true
            let rest = action.todos.slice()
            rest.splice(action.self_id,1)
            rest.forEach(element => {
                element.actual = false 
            })
            actualTodo.actual = true 
            action.todos = [actualTodo, ...rest]
            action.todos.sort(compare)
            return actualTodo || 'INBOX'
        case 'CHANGE_TO_INBOX':
            return 'INBOX'
        case 'CHANGE_TO_COMPLETED':
            return 'COMPLETED'
        case 'CHANGE_TO_TODAY':
            return 'TODAY'
        case 'CHANGE_TO_UPCOMING':
            return 'UPCOMING'
        case 'CHANGE_TO_PROJECTS':
            return 'PROJECTS'
        case 'ADD_TODOS':
            return 'ADD_TODOS'
        default:
            return state
    }
}

export default ActualTodoReducer