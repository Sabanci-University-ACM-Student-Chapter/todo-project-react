import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'
import ProjectPage from './Components/ProjectPage';
import SideBar from './Components/SideBar';
import Inbox from './Components/Inbox'
import Completed from './Components/Completed'
import Today from './Components/Today'
import Upcoming from './Components/Upcoming';
import Projects from './Components/Projects';
import AddTodo from './Components/AddTodo';



function App() {

  const actual = useSelector(state => state.Actual)

  useEffect(() => {
    if(actual.description !== undefined) {
      document.title = `Todo-App | ${actual.description}`
    }
    else {
      document.title = `Todo-App | ${actual}`
    }
  })
  switch(actual){
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


  // return (
  //   <div className="App">
  //     <SideBar />
      
  //     {() => {
  //       switch(actual){
  //         case 'INBOX':
  //           return <Inbox />
  //         case 'TODAY':
  //           return <Today />
  //         case '':
  //           return <ProjectPage />
  //         default:
  //           return <Inbox />
  //       }
  //     }}
      
  //     {/* {actual === 'INBOX' ? <Inbox /> : <ProjectPage />} */}
    // </div>
  // );
}

export default App