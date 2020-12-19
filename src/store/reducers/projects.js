import initialStates from './initialStates'
const Projects = initialStates.Projects

const ProjectReducer = (state=Projects,action) => {
    switch(action.type){
        case 'ADD_PROJECT':
          return [...Projects, action.newProject]
          default:
            return [...Projects]
    }
}

export default ProjectReducer