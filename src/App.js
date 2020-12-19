import React, {} from 'react';
import {useSelector} from 'react-redux'
import ProjectPage from './Components/ProjectPage';
import SideBar from './Components/SideBar';
import Inbox from './Components/Inbox'
import Completed from './Components/Completed'
import Today from './Components/Today'
import Upcoming from './Components/Upcoming';



function App() {
 

  const actual = useSelector(state => state.Actual)

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