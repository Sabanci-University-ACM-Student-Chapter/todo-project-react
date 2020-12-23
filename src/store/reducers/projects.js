// import initialStates from './initialStates'
// const Projects = initialStates.Projects

let Projects = JSON.parse(localStorage.getItem("Projects")) 

if(Projects === null){
  localStorage.setItem("Projects", JSON.stringify([{"id":0,"title":"TODO 101"}]));
  Projects = JSON.parse(localStorage.getItem("Projects"))
}



const ProjectReducer = (state=Projects,action) => {
    switch(action.type){
        case 'ADD_PROJECT':
          localStorage.setItem("Projects", JSON.stringify([...action.Projects, action.newProject]));
          return [...action.Projects, action.newProject]
        case 'REMOVE_PROJECT':
            Projects = JSON.parse(localStorage.getItem("Projects"))
            Projects.splice(action.id,1)
            Projects.forEach(element => {
                 if(element.id > action.id){
                     element.id -= 1
                 }
            })
            localStorage.setItem("Projects", JSON.stringify(Projects))
            Projects = JSON.parse(localStorage.getItem("Projects"))
            return Projects
        default:
          return state
    }
}

export default ProjectReducer