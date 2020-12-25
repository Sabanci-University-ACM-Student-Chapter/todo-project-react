// Since I did not use react router, I wrote myself.
// This reducer controls what shows in application page.
// Also it works to provide information about what they work on for components.

function compare(a, b) {
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

    switch(action.type){
        case 'CHANGE_ACTUAL': //This action selects only one todo and changes its actual to true.
            let actualTodo = action.todos[action.self_id] || action.todos[1] || {type:'EMPTY'} //This application uses Local Storage, if there is mistake, it returns 'INBOX'. 
            if(actualTodo.type === 'EMPTY'){                                                   // It is prevention for collapsing.
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
            return actualTodo || 'INBOX' // just another prevention.
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
        case 'CHANGE_TO_ADD TODO':
            return 'ADD_TODOS'
        default:
            return state
    }
}

export default ActualTodoReducer