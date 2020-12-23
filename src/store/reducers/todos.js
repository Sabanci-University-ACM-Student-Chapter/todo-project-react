// import initialStates from './initialStates'

// const todos = initialStates.todos;
let todos = JSON.parse(localStorage.getItem("Todos"))

if(todos === null){
    
    localStorage.setItem("Todos", JSON.stringify([{"project_name":"TODO 101","self_id":0,"description":"Hello!","category":"Today","date":"2020-12-23","svg":"Element2","actual":false,"isCompleted":false,"detail":"Welcome my to-do application!\nThis is page 1 of the TO-DO 101 course.\n\nThere are a lot of feature you can use. First, let's create a project and todo.\nClick the blue '+' which is in side bar and then select 'New Project' from project options.\nThen write your project's name and fill other blanks. \nRemember, you can add detail after create todo.\nThere are two main category. You can select 'Today' for daily todos or 'Upcoming' for next-date todos.\nDon't forget determine the delivery date!\n\nLet's try yourself and go to lesson 2, ''Review your todos!\""},{"project_name":"TODO 101","self_id":1,"description":"Review your todos!","category":"Today","date":"2020-12-23","svg":"Element2","actual":true,"isCompleted":false,"detail":"You can see all of your todos in 'Inbox'\n\nThere are two different pages for 'Today' and 'Upcoming' todos.\n\nIf you click on 'Done', your todos will be shown on the 'Completed' page.\n\nAnd finally you can manage your projects on 'Projects' page.\n\nLet's move on the last lesson, 'The Project Page!'."},{"project_name":"TODO 101","self_id":2,"description":"The Project Page","category":"Today","date":"2020-12-23","svg":"Element2","actual":false,"isCompleted":false,"detail":"From there, you can easily access your projects. \n\nYou can delete them, with all their todos.\n\nThank you for using this app!\n\nLet's do last exercies. Go to 'Projects' page and delete TODO 101!\n\nGood Bye for now (;"}]));
    todos =  JSON.parse(localStorage.getItem("Todos"))
  }




const TodoReducer = (state=todos,action) => {
    switch(action.type){
        case 'CHANGE_COMPLETED':
            let todo = todos[action.self_id] || todos[0]
            todo.isCompleted = !todo.isCompleted
            localStorage.setItem("Todos", JSON.stringify(todos))
            todos = JSON.parse(localStorage.getItem("Todos"))
            return todos
        case 'UPDATE_DETAIL':
            let todo2 = todos[action.self_id]
            todo2.detail = action.text
            return todos
        case 'SAVE_DETAIL':
            localStorage.setItem("Todos", JSON.stringify(todos))
            return todos
        case 'CANCEL_DETAIL':
            todos = JSON.parse(localStorage.getItem("Todos"))
            return todos
        case 'REMOVE_TODO':
            let rest2 = todos.slice()
            rest2.splice(action.self_id,1)
            rest2.forEach(element => {
                 if(element.self_id > action.self_id){
                     element.self_id -= 1
                 }
            })
            localStorage.setItem("Todos", JSON.stringify(rest2))
            todos = JSON.parse(localStorage.getItem("Todos"))
            return rest2
        case 'ADD_TODO':
            let todos3 = [...action.todoList, action.newTodo]
            localStorage.setItem("Todos", JSON.stringify(todos3))
            todos = JSON.parse(localStorage.getItem("Todos"))
            return todos3
        case 'CHANGE_LABEL':
            let todo3 = todos[action.self_id]
            todo3.category = action.newLabel
            localStorage.setItem("Todos", JSON.stringify(todos))
            todos = JSON.parse(localStorage.getItem("Todos"))
            return todos

        default:
            return state
    }
}

export default TodoReducer

