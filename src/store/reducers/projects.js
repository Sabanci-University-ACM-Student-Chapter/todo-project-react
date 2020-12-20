import initialStates from './initialStates'
const Projects = initialStates.Projects

const ProjectReducer = (state=Projects,action) => {
    switch(action.type){
        case 'ADD_PROJECT':
          return [...action.Projects, action.newProject]
          default:
            return state
    }
}

export default ProjectReducer