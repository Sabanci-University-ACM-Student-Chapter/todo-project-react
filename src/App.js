import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import ProjectPage from './Components/ProjectPage';
import SideBar from './Components/SideBar';
import Inbox from './Components/Inbox'
import Completed from './Components/Completed'
import Today from './Components/Today'
import Upcoming from './Components/Upcoming';
import Projects from './Components/Projects';
import AddTodo from './Components/AddTodo';

// main component where is entire application runs.

function App() {
  const dispatch = useDispatch()
  const actual = useSelector(state => state.Actual)

  useEffect(() => {
    if(actual.description !== undefined) { // this condition determines title of the page in head.
      document.title = `Todo-App | ${actual.description}`
    }
    else {
      document.title = `Todo-App | ${actual}`
    }
    window.addEventListener("resize", () => { // main controller to work ScreenSize reducer.
      dispatch({type:'CONTROL_DEVICE'})    
  });
  })
  switch(actual){ // handmade router.
    case 'INBOX':
      return ( <div className="App">
                <SideBar />
                <Inbox />
               </div>
               )
    case 'COMPLETED':
      return ( <div className="App">
                <SideBar />
                <Completed />
               </div>)
    case 'TODAY':
      return ( <div className="App">
                <SideBar />
                <Today />
               </div>)
    case 'UPCOMING':
      return ( <div className="App">
                <SideBar />
                <Upcoming />
               </div>)
      case 'ADD_TODOS':
        return ( <div className="App">
                <SideBar />
                <AddTodo />
               </div>)
      case 'PROJECTS':
        return ( <div className="App">
                <SideBar />
                <Projects />
               </div>)
    default:
      return ( <div className="App">
                <SideBar />
                <ProjectPage />
               </div>
               )
  }

}

export default App